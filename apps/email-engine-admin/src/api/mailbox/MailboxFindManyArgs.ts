import { MailboxWhereInput } from "./MailboxWhereInput";
import { MailboxOrderByInput } from "./MailboxOrderByInput";

export type MailboxFindManyArgs = {
  where?: MailboxWhereInput;
  orderBy?: Array<MailboxOrderByInput>;
  skip?: number;
  take?: number;
};
