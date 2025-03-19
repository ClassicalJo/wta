module.exports = class Wta1742249720106 {
    name = 'Wta1742249720106'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "temporary_fight" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar, "description" varchar, "times" integer DEFAULT (1))`);
        await queryRunner.query(`INSERT INTO "temporary_fight"("id", "name", "description", "times") SELECT "id", "name", "description", "times" FROM "fight"`);
        await queryRunner.query(`DROP TABLE "fight"`);
        await queryRunner.query(`ALTER TABLE "temporary_fight" RENAME TO "fight"`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "fight" RENAME TO "temporary_fight"`);
        await queryRunner.query(`CREATE TABLE "fight" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar, "description" varchar, "times" integer DEFAULT (0))`);
        await queryRunner.query(`INSERT INTO "fight"("id", "name", "description", "times") SELECT "id", "name", "description", "times" FROM "temporary_fight"`);
        await queryRunner.query(`DROP TABLE "temporary_fight"`);
    }
}
