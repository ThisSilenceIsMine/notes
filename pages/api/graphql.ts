import { createServer } from '@graphql-yoga/node';
import { NextApiRequest, NextApiResponse } from 'next';
import { readFileSync } from 'fs';
import { notes } from '~/graphql/mockData';

import resolvers from '~/graphql/resolvers';

const schemaPath = process.cwd() + '/graphql/schema.graphql';
const typeDefs = readFileSync(schemaPath, 'utf-8');

const server = createServer<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: { typeDefs, resolvers },
  context: { db: { notes } },
});

export default server;
