import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MailboxWhereUniqueInput } from "../mailbox/MailboxWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EmailWhereInput = {
  id?: StringFilter;
  isFlagged?: BooleanNullableFilter;
  isRead?: BooleanNullableFilter;
  mailbox?: MailboxWhereUniqueInput;
  receivedAt?: DateTimeNullableFilter;
  senderEmail?: StringNullableFilter;
  senderName?: StringNullableFilter;
  subject?: StringNullableFilter;
};
