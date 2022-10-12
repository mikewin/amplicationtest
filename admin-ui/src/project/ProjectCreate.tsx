import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description " multiline source="description" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="user.id" reference="User" label="Owner ">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateInput label="StartAt" source="startAt" />
      </SimpleForm>
    </Create>
  );
};
