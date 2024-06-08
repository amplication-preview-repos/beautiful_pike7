import { MailboxUpdateManyWithoutUsersInput } from "./MailboxUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  mailboxes?: MailboxUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
