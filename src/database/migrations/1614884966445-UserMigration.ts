import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserMigration1614884966445 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"users",
            columns:[
                {
                    name:"id",
                    type:"integer",
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment'
                },
                {
                    name:"name",
                    type:"varchar"
                },
                {
                    name:"email",
                    type:"varchar"
                },
                {
                    name:"password",
                    type:"varchar"
                },
                {
                    name:"created_at",
                    type:"timestamp",
                    default:"now()"
                },
                {
                    name:"updated_at",
                    type:"timestamp",
                    isNullable:true
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
