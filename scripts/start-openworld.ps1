$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$backendUrl = "http://127.0.0.1:3000/api/game/bootstrap"
$gameplayUrl = "http://127.0.0.1:5173/"
$studioUrl = "http://127.0.0.1:5174/"

function Stop-PortProcess {
  param(
    [Parameter(Mandatory = $true)]
    [int]$Port
  )

  $connections = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
  if (-not $connections) {
    Write-Host "Port $Port is clear."
    return
  }

  $processIds = $connections | Select-Object -ExpandProperty OwningProcess -Unique
  foreach ($processId in $processIds) {
    if (-not $processId) { continue }

    $process = Get-Process -Id $processId -ErrorAction SilentlyContinue
    if (-not $process) { continue }

    Write-Host "Stopping process $processId on port $Port ($($process.ProcessName))."
    Stop-Process -Id $processId -Force
  }
}

function Start-AppWindow {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Title,
    [Parameter(Mandatory = $true)]
    [string]$WorkingDirectory,
    [Parameter(Mandatory = $true)]
    [string]$Command
  )

  $escapedTitle = $Title.Replace("'", "''")
  $escapedWorkingDirectory = $WorkingDirectory.Replace("'", "''")
  $escapedCommand = $Command.Replace("'", "''")

  Start-Process powershell.exe -ArgumentList @(
    "-NoExit",
    "-NoProfile",
    "-ExecutionPolicy",
    "Bypass",
    "-Command",
    "& { `$Host.UI.RawUI.WindowTitle = '$escapedTitle'; Set-Location '$escapedWorkingDirectory'; $escapedCommand }"
  )
}

Write-Host "Cleaning existing OpenWorld dev ports..."
Stop-PortProcess -Port 3000
Stop-PortProcess -Port 5173
Stop-PortProcess -Port 5174

Write-Host "Starting OpenWorld backend, gameplay, and studio..."
Start-AppWindow `
  -Title "OpenWorld Backend :3000" `
  -WorkingDirectory $root `
  -Command "`$env:GAMEPLAY_MODE='public-local-full'; `$env:PORT='3000'; `$env:DATABASE_URL='file:./dev.db'; npm.cmd run dev --workspace apps/server"

Start-Sleep -Seconds 2

Start-AppWindow `
  -Title "OpenWorld Gameplay :5173" `
  -WorkingDirectory (Join-Path $root "apps\gameplay") `
  -Command "npx.cmd vite --host 127.0.0.1"

Start-AppWindow `
  -Title "OpenWorld Studio :5174" `
  -WorkingDirectory (Join-Path $root "apps\studio") `
  -Command "npx.cmd vite --host 127.0.0.1"

Start-Sleep -Seconds 4
Start-Process $backendUrl
Start-Process $gameplayUrl
Start-Process $studioUrl

Write-Host "OpenWorld startup requested."
Write-Host "Backend:  $backendUrl"
Write-Host "Gameplay: $gameplayUrl"
Write-Host "Studio:   $studioUrl"
