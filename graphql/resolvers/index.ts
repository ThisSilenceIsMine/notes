import { queryResolvers } from './queryResolvers';
import { mutationResolvers } from './mutationResolvers';
import { Resolvers } from '../resolvers-types';

const resolvers: Resolvers = {
  Query: {
    ...queryResolvers,
  },
  Mutation: {
    ...mutationResolvers,
  },
};

export default resolvers;
