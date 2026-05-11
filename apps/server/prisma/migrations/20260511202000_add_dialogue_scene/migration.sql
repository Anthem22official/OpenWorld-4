ALTER TABLE "DialogueNode" ADD COLUMN "scene" TEXT NOT NULL DEFAULT '{"mode":"dialogue","backgroundAssetKey":"locations/shibuya-109/background/main.jpg","characterIds":[]}';

UPDATE "DialogueNode"
SET "scene" = CASE
    WHEN "id" = 'ren-shibuya-109-line' THEN '{"mode":"cg","cgAssetKey":"cg/ren-overlay-test.png","characterIds":["ren-takahashi"]}'
    WHEN "id" LIKE 'ren-%' AND "speaker" IS NOT NULL THEN '{"mode":"dialogue","backgroundAssetKey":"locations/shibuya-109/background/main.jpg","characterIds":["ren-takahashi"]}'
    WHEN "id" LIKE 'ren-%' THEN '{"mode":"dialogue","backgroundAssetKey":"locations/shibuya-109/background/main.jpg","characterIds":[]}'
    WHEN "id" LIKE 'kaito-%' AND "speaker" IS NOT NULL THEN '{"mode":"dialogue","backgroundAssetKey":"locations/qfront/background/main.jpg","characterIds":["kaito-sugiyama"]}'
    WHEN "id" LIKE 'kaito-%' THEN '{"mode":"dialogue","backgroundAssetKey":"locations/qfront/background/main.jpg","characterIds":[]}'
    WHEN "id" LIKE 'daiki-%' AND "speaker" IS NOT NULL THEN '{"mode":"dialogue","backgroundAssetKey":"locations/magnet/background/main.jpg","characterIds":["daiki-mori"]}'
    WHEN "id" LIKE 'daiki-%' THEN '{"mode":"dialogue","backgroundAssetKey":"locations/magnet/background/main.jpg","characterIds":[]}'
    WHEN "id" LIKE 'haruto-%' AND "speaker" IS NOT NULL THEN '{"mode":"dialogue","backgroundAssetKey":"locations/hachiko-station/background/main.jpg","characterIds":["haruto-nakamura"]}'
    WHEN "id" LIKE 'haruto-%' THEN '{"mode":"dialogue","backgroundAssetKey":"locations/hachiko-station/background/main.jpg","characterIds":[]}'
    ELSE "scene"
END;
