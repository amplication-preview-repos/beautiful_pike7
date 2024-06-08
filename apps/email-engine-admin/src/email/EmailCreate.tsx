import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { MailboxTitle } from "../mailbox/MailboxTitle";

export const EmailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isFlagged" source="isFlagged" />
        <BooleanInput label="isRead" source="isRead" />
        <ReferenceInput source="mailbox.id" reference="Mailbox" label="Mailbox">
          <SelectInput optionText={MailboxTitle} />
        </ReferenceInput>
        <DateTimeInput label="receivedAt" source="receivedAt" />
        <TextInput label="senderEmail" source="senderEmail" type="email" />
        <TextInput label="senderName" source="senderName" />
        <TextInput label="subject" source="subject" />
      </SimpleForm>
    </Create>
  );
};
