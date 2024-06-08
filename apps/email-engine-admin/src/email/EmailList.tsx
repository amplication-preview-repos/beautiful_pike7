import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { MAILBOX_TITLE_FIELD } from "../mailbox/MailboxTitle";

export const EmailList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Emails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
