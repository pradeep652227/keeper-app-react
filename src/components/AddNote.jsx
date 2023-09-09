
import styles from "../css/addNoteStyles.module.css";
export default function AddNote({ newNote, setNewNote, setNotesArray }) {

  function handleChange(event) {
    const {name:inputType,value:inputValue}=event.target;

    setNewNote((prevValue)=>{
        return {...prevValue,[inputType]:inputValue};
    })

  }
  function handleClick(event){
    event.preventDefault();
    setNotesArray(prevValue=>{
        return [...prevValue,newNote];
    })
    setNewNote({title:"Title",content:"Take a note..."});
  }
  
  return (
    <div className={styles["add-note-box"]}>
      <input
        className={styles["input-title"]}
        name="title"
        onChange={handleChange}
        placeholder={newNote.title}
      />
      <textarea
        className={styles["textarea-input"]}
        name="content"
        onChange={handleChange}
        rows="5"
        placeholder={newNote.content}
      ></textarea>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
