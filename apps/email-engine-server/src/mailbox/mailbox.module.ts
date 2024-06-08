import { Module } from "@nestjs/common";
import { MailboxModuleBase } from "./base/mailbox.module.base";
import { MailboxService } from "./mailbox.service";
import { MailboxController } from "./mailbox.controller";
import { MailboxResolver } from "./mailbox.resolver";

@Module({
  imports: [MailboxModuleBase],
  controllers: [MailboxController],
  providers: [MailboxService, MailboxResolver],
  exports: [MailboxService],
})
export class MailboxModule {}
