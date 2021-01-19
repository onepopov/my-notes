import React from "react";
import "./styles.scss";
import {useDispatch, useSelector} from "react-redux";
import types from "../../../store/types/notes";

function Popup() {
    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();
    const deleteNote = () => {
        dispatch({type: types.REMOVE_NOTE, payload: {id: notes.selectedNote}});
    };
    return(<div className="popup">
        <button onClick={deleteNote}>Delete</button>
    </div>)
}


export default Popup;
