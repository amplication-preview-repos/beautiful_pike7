/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Mailbox } from "./Mailbox";
import { MailboxCountArgs } from "./MailboxCountArgs";
import { MailboxFindManyArgs } from "./MailboxFindManyArgs";
import { MailboxFindUniqueArgs } from "./MailboxFindUniqueArgs";
import { CreateMailboxArgs } from "./CreateMailboxArgs";
import { UpdateMailboxArgs } from "./UpdateMailboxArgs";
import { DeleteMailboxArgs } from "./DeleteMailboxArgs";
import { EmailFindManyArgs } from "../../email/base/EmailFindManyArgs";
import { Email } from "../../email/base/Email";
import { User } from "../../user/base/User";
import { MailboxService } from "../mailbox.service";
@graphql.Resolver(() => Mailbox)
export class MailboxResolverBase {
  constructor(protected readonly service: MailboxService) {}

  async _mailboxesMeta(
    @graphql.Args() args: MailboxCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Mailbox])
  async mailboxes(
    @graphql.Args() args: MailboxFindManyArgs
  ): Promise<Mailbox[]> {
    return this.service.mailboxes(args);
  }

  @graphql.Query(() => Mailbox, { nullable: true })
  async mailbox(
    @graphql.Args() args: MailboxFindUniqueArgs
  ): Promise<Mailbox | null> {
    const result = await this.service.mailbox(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Mailbox)
  async createMailbox(
    @graphql.Args() args: CreateMailboxArgs
  ): Promise<Mailbox> {
    return await this.service.createMailbox({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Mailbox)
  async updateMailbox(
    @graphql.Args() args: UpdateMailboxArgs
  ): Promise<Mailbox | null> {
    try {
      return await this.service.updateMailbox({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Mailbox)
  async deleteMailbox(
    @graphql.Args() args: DeleteMailboxArgs
  ): Promise<Mailbox | null> {
    try {
      return await this.service.deleteMailbox(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Email], { name: "emails" })
  async findEmails(
    @graphql.Parent() parent: Mailbox,
    @graphql.Args() args: EmailFindManyArgs
  ): Promise<Email[]> {
    const results = await this.service.findEmails(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Mailbox): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
