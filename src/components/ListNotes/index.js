import React from "react";
import ItemList from "./ItemList";
import "./styles.scss";
import AddIcon from "../../assets/note_add-24px.svg";
import {useDispatch, useSelector} from "react-redux";
import types from "../../store/types/notes";

function ListNotes() {
    const notes = useSelector(state => state.notes.notesList);
    const dispatch = useDispatch();
    const addNote = () => {
        dispatch({type: types.ADD_NOTE});
    };
    return(<nav className="list">
        <button className="list__btn-add" onClick={addNote}><img src={AddIcon} width="40px" alt="add"/>create</button>
        <ul>
            {notes.map(note => <ItemList note={note} key={note.id}/>)}
        </ul>
    </nav>)
}


export default ListNotes;
