import { useState } from "react";

import Header from "./Header";
import AddNote from "./AddNote";
import Note from "./Note-compo";
import Footer from "./Footer";
import notes from "../notes";

export default function App() {
  const [newNote, setNewNote] = useState({title:"Title",content:"Take a note..."});

  const [notesArray, setNotesArray] = useState(notes);

  function createNote(note) {
    return <Note key={note.key} title={note.title} content={note.content} />;
  }
  return (
    <div>
      <Header />
      <div className="mid-content">
        <AddNote
          newNote={newNote}
          setNewNote={setNewNote}
          setNotesArray={setNotesArray}
        />
        {notesArray.map(createNote)}
      </div>
      <Footer />
    </div>
  );
}
