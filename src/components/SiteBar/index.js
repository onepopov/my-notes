import React, {  useEffect, useState  } from "react";
import Note from "./Note";
import "./styles.scss";
import {useDispatch, useSelector} from "react-redux";
import types from "../../store/types/notes";
import Search from "../Search";
import Popup from "./Popup";


function SiteBar() {
    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();
    const [searchedNotes, setLists] = useState( notes.notesList);
    const [isOpenPopup, openPopup] = useState(false);
    const [positionContext, setPositionContext] = useState({left: "100px", top: "100px"});
    const addNote = () => {
        dispatch({type: types.ADD_NOTE});
        openPopup(false);
    };
    const search = (query) => {
        setLists((state) => notes.notesList.filter((note => note.title.indexOf(query) !== -1)));
    };
    const contextHandler = (e) => {
        e.preventDefault();
        openContext(e.pageX, e.pageY);
    };
    const openContext = (x,y) => {
        openPopup(!isOpenPopup);
        setPositionContext({left: x, top: y});
    };
    const handleReset = (e) => {
        if(e.target.tagName === "UL") {
            dispatch({type: types.SELECT_NOTE, payload: {id: ""}});
            openPopup(false);
        }

    };

    useEffect(() => {
        setLists(notes.notesList);
    }, [notes]);


    return(<nav className="site-bar">
        <ul className="site-bar__list" onContextMenu={contextHandler} onClick={handleReset} >
            {searchedNotes.map(note => <Note  contextHandler={contextHandler} addNote={addNote} selected={notes.selectedNote === note.id} note={note} key={note.id}/>)}
        </ul>
        {isOpenPopup && <Popup selectedNote={notes.selectedNote}  positionContext={positionContext} addNote={addNote}/>}
        <Search search={search}/>
    </nav>)
}


export default SiteBar;