/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Mailbox as PrismaMailbox,
  Email as PrismaEmail,
  User as PrismaUser,
} from "@prisma/client";

export class MailboxServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MailboxCountArgs, "select">): Promise<number> {
    return this.prisma.mailbox.count(args);
  }

  async mailboxes<T extends Prisma.MailboxFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MailboxFindManyArgs>
  ): Promise<PrismaMailbox[]> {
    return this.prisma.mailbox.findMany<Prisma.MailboxFindManyArgs>(args);
  }
  async mailbox<T extends Prisma.MailboxFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MailboxFindUniqueArgs>
  ): Promise<PrismaMailbox | null> {
    return this.prisma.mailbox.findUnique(args);
  }
  async createMailbox<T extends Prisma.MailboxCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MailboxCreateArgs>
  ): Promise<PrismaMailbox> {
    return this.prisma.mailbox.create<T>(args);
  }
  async updateMailbox<T extends Prisma.MailboxUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MailboxUpdateArgs>
  ): Promise<PrismaMailbox> {
    return this.prisma.mailbox.update<T>(args);
  }
  async deleteMailbox<T extends Prisma.MailboxDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MailboxDeleteArgs>
  ): Promise<PrismaMailbox> {
    return this.prisma.mailbox.delete(args);
  }

  async findEmails(
    parentId: string,
    args: Prisma.EmailFindManyArgs
  ): Promise<PrismaEmail[]> {
    return this.prisma.mailbox
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .emails(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.mailbox
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
