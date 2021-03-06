import React from "react";
import "./styles.scss";
import {useDispatch, useSelector} from "react-redux";
import types from "../../../store/types/notes";

function Popup({addNote, positionContext, selectedNote, openPopup}) {
    const dispatch = useDispatch();
    const deleteNote = () => {
        dispatch({type: types.REMOVE_NOTE, payload: {id: selectedNote.id}});
        openPopup(false);
    };
    const blockNote = () => {
        dispatch({type: types.SET_BLOCKED, payload: {id: selectedNote.id}});
        openPopup(false);
    };
    return(<div className="popup" style={positionContext}>
        <button onClick={addNote}>New Note</button>
        {selectedNote && <>
            <button onClick={deleteNote}>Delete</button>
            <button onClick={blockNote}>{selectedNote.blocked ? "Unlock this note" : "Lock this note"}</button>
        </>}

    </div>)
}


export default Popup;
