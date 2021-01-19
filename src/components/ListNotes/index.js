import React from "react";
import Note from "./Note";
import "./styles.scss";
import AddIcon from "../../assets/note_add-24px.svg";
import {useDispatch, useSelector} from "react-redux";
import types from "../../store/types/notes";
import Search from "../Search";

function ListNotes() {
    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();
    const addNote = () => {
        dispatch({type: types.ADD_NOTE});
    };

    return(<nav className="list">
        <button className="list__btn-add" onClick={addNote}><img src={AddIcon} width="40px" alt="add"/>create</button>
        <ul>
            {notes.notesList.map(note => <Note selected={notes.selectedNote === note.id} note={note} key={note.id}/>)}
        </ul>
        <Search/>
    </nav>)
}


export default ListNotes;
