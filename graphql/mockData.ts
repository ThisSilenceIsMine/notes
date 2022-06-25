import { Note } from './resolvers-types';

export const notes: Note[] = [
  {
    id: '1',
    title: 'Note 1',
    content: 'This is the first note',
    user: {
      id: 'foo',
      name: 'John Doe',
      email: 'foo',
      password: 'bar',
    },
  },
  {
    id: '2',
    title: 'Note 2',
    content: 'This is the second note',
    user: {
      id: 'foo',
      name: 'John Doe',
      email: 'foo',
      password: 'bar',
    },
  },
  {
    id: '3',
    title: 'Note 3',
    content: 'This is the third note',
    user: {
      id: 'foo',
      name: 'John Doe',
      email: 'foo',
      password: 'bar',
    },
  },
  {
    id: '4',
    title: 'Note 4',
    content: 'How do I spell',
    user: {
      id: 'foo',
      name: 'John Doe',
      email: 'foo',
      password: 'bar',
    },
  },
];
