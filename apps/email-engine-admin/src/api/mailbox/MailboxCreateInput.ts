import { EmailCreateNestedManyWithoutMailboxesInput } from "./EmailCreateNestedManyWithoutMailboxesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MailboxCreateInput = {
  emails?: EmailCreateNestedManyWithoutMailboxesInput;
  mailboxName?: string | null;
  synced?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
