import { Email } from "../email/Email";
import { User } from "../user/User";

export type Mailbox = {
  createdAt: Date;
  emails?: Array<Email>;
  id: string;
  mailboxName: string | null;
  synced: boolean | null;
  updatedAt: Date;
  user?: User | null;
};
