import * as graphql from "@nestjs/graphql";
import { MailboxResolverBase } from "./base/mailbox.resolver.base";
import { Mailbox } from "./base/Mailbox";
import { MailboxService } from "./mailbox.service";

@graphql.Resolver(() => Mailbox)
export class MailboxResolver extends MailboxResolverBase {
  constructor(protected readonly service: MailboxService) {
    super(service);
  }
}
