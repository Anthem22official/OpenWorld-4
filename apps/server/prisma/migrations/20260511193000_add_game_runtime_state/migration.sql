CREATE TABLE "GameRuntimeState" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "current_location_id" TEXT NOT NULL,
    "current_dialogue_id" TEXT NOT NULL,
    "game_time_detail" TEXT NOT NULL,
    CONSTRAINT "GameRuntimeState_current_location_id_fkey" FOREIGN KEY ("current_location_id") REFERENCES "Location" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GameRuntimeState_current_dialogue_id_fkey" FOREIGN KEY ("current_dialogue_id") REFERENCES "DialogueNode" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
