import { Migration } from '@mikro-orm/migrations';

export class Migration20241019011610_AddReservedAccountColumnsToUserTable extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'alter table `users` add `bvn` varchar(255) null, add `nin` varchar(255) null, add `account_name` varchar(255) null, add `account_reference` varchar(255) null, add `bank_accounts` longtext null, add `provider_response` longtext null;',
    );
  }

  override async down(): Promise<void> {
    this.addSql(
      'alter table `users` drop column `bvn`, drop column `nin`, drop column `account_name`, drop column `account_reference`, drop column `bank_accounts`, drop column `provider_response`;',
    );
  }
}
