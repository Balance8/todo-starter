import { makeSchema } from 'nexus';
import { paljs } from '@paljs/nexus';
import * as types from '../generated/nexus';
import * as path from 'path';
import { Prisma } from '@todo-starter/prisma-client';

export const schema = makeSchema({
  plugins: [
    paljs({
      prismaSelectOptions: {
        dmmf: [Prisma.dmmf],
      },
      includeAdmin: false,
      dmmf: [Prisma.dmmf],
    }),
  ],
  outputs: {
    schema: path.join(__dirname, '../generated/schema.graphql'),
    typegen: path.join(__dirname, '../generated/nexus.ts'),
  },
  contextType: {
    module: path.join(process.cwd(), 'apps/api/src/graphql/context.ts'),
    export: 'Context',
  },
  types,
});
