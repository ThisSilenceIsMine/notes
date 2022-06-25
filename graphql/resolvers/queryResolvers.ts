import { Note, QueryResolvers } from '../resolvers-types';

export const queryResolvers: QueryResolvers = {
  notes: (_, { userId }, { db }) => {
    return db.notes.filter((note: Note) => note.user.id === userId);
  },
  user: (_, { id }, { db }) => {
    return db.notes[0].user;
  },
};
