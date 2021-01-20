import React from "react";
import "./styles.scss";
import {useDispatch, useSelector} from "react-redux";
import types from "../../../store/types/notes";

function Popup({addNote, positionContext, selectedNote, openPopup}) {
    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();
    const deleteNote = () => {
        dispatch({type: types.REMOVE_NOTE, payload: {id: notes.selectedNote}});
        openPopup(false);
    };
    return(<div className="popup" style={positionContext}>
        <button onClick={addNote}>New Note</button>
        {selectedNote && <>
            <button onClick={deleteNote}>Delete</button>
            <button>Lock this note</button>
        </>}

    </div>)
}


export default Popup;
