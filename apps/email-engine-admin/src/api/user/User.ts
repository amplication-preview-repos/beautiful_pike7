import { Mailbox } from "../mailbox/Mailbox";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  mailboxes?: Array<Mailbox>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
