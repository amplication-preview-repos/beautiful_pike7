import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { MAILBOX_TITLE_FIELD } from "../mailbox/MailboxTitle";

export const EmailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isFlagged" source="isFlagged" />
        <BooleanField label="isRead" source="isRead" />
        <ReferenceField label="Mailbox" source="mailbox.id" reference="Mailbox">
          <TextField source={MAILBOX_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="receivedAt" source="receivedAt" />
        <TextField label="senderEmail" source="senderEmail" />
        <TextField label="senderName" source="senderName" />
        <TextField label="subject" source="subject" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
