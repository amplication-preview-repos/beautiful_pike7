import { MailboxWhereUniqueInput } from "./MailboxWhereUniqueInput";
import { MailboxUpdateInput } from "./MailboxUpdateInput";

export type UpdateMailboxArgs = {
  where: MailboxWhereUniqueInput;
  data: MailboxUpdateInput;
};
