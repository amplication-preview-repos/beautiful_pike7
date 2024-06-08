import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MailboxService } from "./mailbox.service";
import { MailboxControllerBase } from "./base/mailbox.controller.base";

@swagger.ApiTags("mailboxes")
@common.Controller("mailboxes")
export class MailboxController extends MailboxControllerBase {
  constructor(protected readonly service: MailboxService) {
    super(service);
  }
}
