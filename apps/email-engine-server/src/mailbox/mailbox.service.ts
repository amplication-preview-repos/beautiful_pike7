import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MailboxServiceBase } from "./base/mailbox.service.base";

@Injectable()
export class MailboxService extends MailboxServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
