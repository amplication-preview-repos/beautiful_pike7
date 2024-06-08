import { EmailUpdateManyWithoutMailboxesInput } from "./EmailUpdateManyWithoutMailboxesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MailboxUpdateInput = {
  emails?: EmailUpdateManyWithoutMailboxesInput;
  mailboxName?: string | null;
  synced?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
