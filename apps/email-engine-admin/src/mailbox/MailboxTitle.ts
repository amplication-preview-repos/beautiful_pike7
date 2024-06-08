import { Mailbox as TMailbox } from "../api/mailbox/Mailbox";

export const MAILBOX_TITLE_FIELD = "mailboxName";

export const MailboxTitle = (record: TMailbox): string => {
  return record.mailboxName?.toString() || String(record.id);
};
