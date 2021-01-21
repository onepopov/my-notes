import React from "react";
import "./styles.scss";
import {useDispatch} from "react-redux";
import types from "../../../store/types/notes";

function Note({note, selected,contextHandler}) {
    const dispatch = useDispatch();

    const selectNote = () => {
        dispatch({type: types.SELECT_NOTE, payload: {id: note.id}});
    };
    const handleContext = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return(<li className={selected ? "note note--selected": "note"} onClick={selectNote} onContextMenu={handleContext}>
        <span className="note__title">{/\w+/.test(note.title) ? note.title : "Untitled"}</span>{selected && <button className="note__actions" onClick={contextHandler}></button>}

    </li>);
}
export default Note;
