import React, {useState} from "react";
import Note from "./Note";
import "./styles.scss";
import AddIcon from "../../assets/note_add-24px.svg";
import {useDispatch, useSelector} from "react-redux";
import types from "../../store/types/notes";
import Search from "../Search";


function ListNotes() {
    const notes = useSelector(state => state.notes);
    const mainDispatch = useDispatch();
    const [searchedNotes, setLists] = useState(notes ? notes.notesList : []);
    const addNote = () => {
        mainDispatch({type: types.ADD_NOTE});
    };
    const search = (query) => {
        setLists((state) => notes.notesList.filter((note => note.title.indexOf(query) !== -1)));
    };


    return(<nav className="list">
        <button className="list__btn-add" onClick={addNote}><img src={AddIcon} width="40px" alt="add"/>create</button>
        <ul>
            {searchedNotes.map(note => <Note selected={notes.selectedNote === note.id} note={note} key={note.id}/>)}
        </ul>
        <Search search={search}/>
    </nav>)
}


export default ListNotes;
