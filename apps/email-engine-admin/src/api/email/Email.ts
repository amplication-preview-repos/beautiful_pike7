import { Mailbox } from "../mailbox/Mailbox";

export type Email = {
  createdAt: Date;
  id: string;
  isFlagged: boolean | null;
  isRead: boolean | null;
  mailbox?: Mailbox | null;
  receivedAt: Date | null;
  senderEmail: string | null;
  senderName: string | null;
  subject: string | null;
  updatedAt: Date;
};
