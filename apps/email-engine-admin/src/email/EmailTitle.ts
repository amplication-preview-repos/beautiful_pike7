import { Email as TEmail } from "../api/email/Email";

export const EMAIL_TITLE_FIELD = "senderName";

export const EmailTitle = (record: TEmail): string => {
  return record.senderName?.toString() || String(record.id);
};
