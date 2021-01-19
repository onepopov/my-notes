import React, {useState} from "react";
import "./styles.scss";
import {useDispatch} from "react-redux";
import types from "../../../store/types/notes";
import Popup from "../Popup";

function Note({note, selected}) {
    const dispatch = useDispatch();
    const [isOpen, open] = useState(false);
    const selectNote = () => {
        dispatch({type: types.SELECT_NOTE, payload: {id: note.id}});
    };
    return(<li className={selected ? "note note--selected": "note"} onClick={selectNote}>
        <span className="note__title">{note.title}</span>{selected && <button className="note__actions" onClick={() => open(!isOpen)}></button>}
        {isOpen && <Popup />}
    </li>);
}
export default Note;
