import {appSchema, tableSchema} from '@nozbe/watermelondb';

export const mySchema = appSchema({
  version: 2,
  tables: [
    tableSchema({
      name: 'usuario',
      columns: [{name: 'name', type: 'string'}],
    }),
  ],
});
