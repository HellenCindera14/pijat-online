import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696577768973 implements MigrationInterface {
    name = 'MyMigration1696577768973'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`image\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ratings\` (\`id\` int NOT NULL AUTO_INCREMENT, \`review\` varchar(255) NOT NULL, \`start\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`sellerId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sellers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`district\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`image\` varchar(255) NULL, \`balance\` varchar(255) NOT NULL DEFAULT '0', \`isPijetUrut\` tinyint NOT NULL DEFAULT 0, \`isPijetRefleksi\` tinyint NOT NULL DEFAULT 0, \`isPijetRelaksasi\` tinyint NOT NULL DEFAULT 0, \`isPijetkretek\` tinyint NOT NULL DEFAULT 0, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`invoiceHistories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`price\` int NOT NULL DEFAULT '0', \`isPijetUrut\` tinyint NOT NULL DEFAULT 0, \`isPijetRefleksi\` tinyint NOT NULL DEFAULT 0, \`isPijetRelaksasi\` tinyint NOT NULL DEFAULT 0, \`isPijetkretek\` tinyint NOT NULL DEFAULT 0, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`sellerId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`invoices\` (\`id\` int NOT NULL AUTO_INCREMENT, \`csEmail\` varchar(255) NOT NULL, \`csName\` varchar(255) NOT NULL, \`csPhone\` varchar(255) NOT NULL, \`csAddress\` varchar(255) NOT NULL, \`district\` varchar(255) NOT NULL, \`price\` int NOT NULL DEFAULT '0', \`isPijetUrut\` tinyint NOT NULL DEFAULT 0, \`isPijetRefleksi\` tinyint NOT NULL DEFAULT 0, \`isPijetRelaksasi\` tinyint NOT NULL DEFAULT 0, \`isPijetkretek\` tinyint NOT NULL DEFAULT 0, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`sellerId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`addressTemplates\` (\`id\` int NOT NULL AUTO_INCREMENT, \`address\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`ratings\` ADD CONSTRAINT \`FK_df637b7409219c10f692cbdec6e\` FOREIGN KEY (\`sellerId\`) REFERENCES \`sellers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ratings\` ADD CONSTRAINT \`FK_4d0b0e3a4c4af854d225154ba40\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`invoiceHistories\` ADD CONSTRAINT \`FK_55dc47fb506d025ca07e624b7ca\` FOREIGN KEY (\`sellerId\`) REFERENCES \`sellers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`invoiceHistories\` ADD CONSTRAINT \`FK_c7a9007fcc9443c18d2f6639437\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`invoices\` ADD CONSTRAINT \`FK_0b7320e7be48e88e0f408e535d9\` FOREIGN KEY (\`sellerId\`) REFERENCES \`sellers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`invoices\` ADD CONSTRAINT \`FK_fcbe490dc37a1abf68f19c5ccb9\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`invoices\` DROP FOREIGN KEY \`FK_fcbe490dc37a1abf68f19c5ccb9\``);
        await queryRunner.query(`ALTER TABLE \`invoices\` DROP FOREIGN KEY \`FK_0b7320e7be48e88e0f408e535d9\``);
        await queryRunner.query(`ALTER TABLE \`invoiceHistories\` DROP FOREIGN KEY \`FK_c7a9007fcc9443c18d2f6639437\``);
        await queryRunner.query(`ALTER TABLE \`invoiceHistories\` DROP FOREIGN KEY \`FK_55dc47fb506d025ca07e624b7ca\``);
        await queryRunner.query(`ALTER TABLE \`ratings\` DROP FOREIGN KEY \`FK_4d0b0e3a4c4af854d225154ba40\``);
        await queryRunner.query(`ALTER TABLE \`ratings\` DROP FOREIGN KEY \`FK_df637b7409219c10f692cbdec6e\``);
        await queryRunner.query(`DROP TABLE \`addressTemplates\``);
        await queryRunner.query(`DROP TABLE \`invoices\``);
        await queryRunner.query(`DROP TABLE \`invoiceHistories\``);
        await queryRunner.query(`DROP TABLE \`sellers\``);
        await queryRunner.query(`DROP TABLE \`ratings\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
