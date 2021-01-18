import React from "react";
import "./styles.scss";
import {useDispatch} from "react-redux";
import types from "../../../store/types/notes";

function Note({note, selected}) {
    const dispatch = useDispatch();
    const selectNote = () => {
        dispatch({type: types.SELECT_NOTE, payload: {id: note.id}});
    };
    return(<li className={selected ? "note note--selected": "note"} onClick={selectNote}>
        <span className="note__title">{note.title}</span>
    </li>);
}
export default Note;
