import { SortOrder } from "../../util/SortOrder";

export type EmailOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isFlagged?: SortOrder;
  isRead?: SortOrder;
  mailboxId?: SortOrder;
  receivedAt?: SortOrder;
  senderEmail?: SortOrder;
  senderName?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};
