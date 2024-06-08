import { EmailListRelationFilter } from "../email/EmailListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MailboxWhereInput = {
  emails?: EmailListRelationFilter;
  id?: StringFilter;
  mailboxName?: StringNullableFilter;
  synced?: BooleanNullableFilter;
  user?: UserWhereUniqueInput;
};
