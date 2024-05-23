import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAgeColumnIntoUser1716497837771 implements MigrationInterface {
    name = 'AddAgeColumnIntoUser1716497837771'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "age" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
    }

}
