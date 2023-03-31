import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680219605353 implements MigrationInterface {
    name = 'default1680219605353'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "room_subject" ("room.id" integer NOT NULL, "subject_id" integer NOT NULL, CONSTRAINT "PK_9b5f40d0cdccf860d583e9ebd55" PRIMARY KEY ("room.id", "subject_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b1cee1b256eb5ab979e47510bb" ON "room_subject" ("room.id") `);
        await queryRunner.query(`CREATE INDEX "IDX_a05f10c497f5f7db3022664a6d" ON "room_subject" ("subject_id") `);
        await queryRunner.query(`ALTER TABLE "room_subject" ADD CONSTRAINT "FK_b1cee1b256eb5ab979e47510bbf" FOREIGN KEY ("room.id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "room_subject" ADD CONSTRAINT "FK_a05f10c497f5f7db3022664a6d6" FOREIGN KEY ("subject_id") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room_subject" DROP CONSTRAINT "FK_a05f10c497f5f7db3022664a6d6"`);
        await queryRunner.query(`ALTER TABLE "room_subject" DROP CONSTRAINT "FK_b1cee1b256eb5ab979e47510bbf"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a05f10c497f5f7db3022664a6d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b1cee1b256eb5ab979e47510bb"`);
        await queryRunner.query(`DROP TABLE "room_subject"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
    }

}
