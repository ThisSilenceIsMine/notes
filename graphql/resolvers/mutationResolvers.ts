import type { MutationResolvers, Note } from '../resolvers-types';
export const mutationResolvers: MutationResolvers = {
  createNote(_, { title, content, user }, { db }) {
    console.log(user);
    const newNote = {
      id: db.notes.length + 1,
      title,
      content,
      user: {
        id: user,
        name: 'John Doe',
        email: 'foo',
        password: 'bar',
      },
    };
    db.notes.push(newNote);
    return newNote;
  },
  updateNote(_, { id, title, content }, { db }) {
    const note = db.notes.find((n: Note) => n.id === id);
    if (!note) {
      throw new Error('Note not found');
    }
    note.title = title;
    note.content = content;
    return note;
  },
  deleteNote(_, { id }, { db }) {
    const noteIndex = db.notes.findIndex((n: Note) => n.id === id);
    if (noteIndex === -1) {
      throw new Error('Note not found');
    }
    const deletedNote = db.notes.splice(noteIndex, 1);
    return deletedNote;
  },
};
