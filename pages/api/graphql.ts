import { createServer } from '@graphql-yoga/node';
import { NextApiRequest, NextApiResponse } from 'next';
import { readFileSync } from 'fs';

import { Resolvers } from '~/graphql/resolvers-types';

const schemaPath = process.cwd() + '/graphql/schema.graphql';
const typeDefs = readFileSync(schemaPath, 'utf-8');

const resolvers: Resolvers = {
  Query: {
    notes: (_, { userId }) => {
      return [
        {
          id: '1',
          title: 'Note 1',
          content: 'This is the first note',
          user: {
            id: userId + '-user',
            name: 'John Doe',
            email: 'foo',
            password: 'bar',
          },
        },
      ];
    },
  },
};

const server = createServer<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: { typeDefs, resolvers },
});

export default server;
