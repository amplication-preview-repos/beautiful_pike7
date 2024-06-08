import { SortOrder } from "../../util/SortOrder";

export type MailboxOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  mailboxName?: SortOrder;
  synced?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
