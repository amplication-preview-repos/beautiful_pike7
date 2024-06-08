import { MailboxWhereUniqueInput } from "../mailbox/MailboxWhereUniqueInput";

export type EmailUpdateInput = {
  isFlagged?: boolean | null;
  isRead?: boolean | null;
  mailbox?: MailboxWhereUniqueInput | null;
  receivedAt?: Date | null;
  senderEmail?: string | null;
  senderName?: string | null;
  subject?: string | null;
};
