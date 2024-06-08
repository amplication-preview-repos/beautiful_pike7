import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MAILBOX_TITLE_FIELD } from "./MailboxTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MailboxShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="mailboxName" source="mailboxName" />
        <BooleanField label="synced" source="synced" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Email" target="mailboxId" label="Emails">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="isFlagged" source="isFlagged" />
            <BooleanField label="isRead" source="isRead" />
            <ReferenceField
              label="Mailbox"
              source="mailbox.id"
              reference="Mailbox"
            >
              <TextField source={MAILBOX_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="receivedAt" source="receivedAt" />
            <TextField label="senderEmail" source="senderEmail" />
            <TextField label="senderName" source="senderName" />
            <TextField label="subject" source="subject" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
