-- Add required map rendering fields to Location.
-- Existing database is expected to be empty for this MVP. If data exists, populate
-- these values before applying the NOT NULL migration.
ALTER TABLE "Location" ADD COLUMN "area_id" TEXT NOT NULL DEFAULT 'shibuya';
ALTER TABLE "Location" ADD COLUMN "area_map_id" TEXT NOT NULL DEFAULT 'shibuya-crossing';
ALTER TABLE "Location" ADD COLUMN "building_id" TEXT NOT NULL DEFAULT 'legacy-point';
ALTER TABLE "Location" ADD COLUMN "map_kind" TEXT NOT NULL DEFAULT 'legacy-point';

-- CreateTable
CREATE TABLE "DialogueNode" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "speaker" TEXT,
    "text" TEXT NOT NULL,
    "next_dialogue_id" TEXT,
    CONSTRAINT "DialogueNode_next_dialogue_id_fkey" FOREIGN KEY ("next_dialogue_id") REFERENCES "DialogueNode" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DialogueChoice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dialogue_node_id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "next_dialogue_id" TEXT NOT NULL,
    "sort_order" INTEGER NOT NULL,
    CONSTRAINT "DialogueChoice_dialogue_node_id_fkey" FOREIGN KEY ("dialogue_node_id") REFERENCES "DialogueNode" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "DialogueChoice_next_dialogue_id_fkey" FOREIGN KEY ("next_dialogue_id") REFERENCES "DialogueNode" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_dialogue_id_fkey" FOREIGN KEY ("dialogue_id") REFERENCES "DialogueNode" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- CreateIndex
CREATE INDEX "DialogueChoice_dialogue_node_id_sort_order_idx" ON "DialogueChoice"("dialogue_node_id", "sort_order");
