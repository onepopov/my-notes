import React, {useState, useEffect} from "react";
import {useDebounce} from "../../hooks/useDebounce";

import "./styles.scss";

import {useDispatch, useSelector} from "react-redux";

import types from "../../store/types/notes";




function Content() {

    const notes = useSelector((state) => state.notes);
    const selectedNote = notes.notesList.find((note) => note.id === notes.selectedNote);
    const [text, setText] = useState(selectedNote ? selectedNote.content : null);
    const [title, setTitle] = useState(selectedNote ? selectedNote.title : "Untitled");
    const dispatch = useDispatch();
    const debouncedContent = useDebounce(text, 300);
    const debouncedTitle = useDebounce(title, 300);

    const handlerInput = (text) => {
        setText(text);
    };

    const handlerTitle = (title) => {
        setTitle(title);
    };

    useEffect(() => {
        selectedNote && setText(selectedNote.content);
        selectedNote && setTitle(selectedNote.title);
    }, [notes]);

    useEffect(() => {

        if(selectedNote && text !== selectedNote.content) {
            dispatch({type: types.SET_CONTENT, payload: {id: notes.selectedNote,content: debouncedContent}});
        }
    }, [debouncedContent]);

    useEffect(() => {
        if(selectedNote && title !== selectedNote.title) {
            dispatch({type: types.SET_TITLE, payload: {id: notes.selectedNote, title: debouncedTitle}});
        }
    }, [debouncedTitle]);



    return (
        <main className="content">
            {selectedNote ? <>
                <input readOnly={selectedNote.blocked} className="content__title" placeholder="Enter title of note" type="text" value={title} onChange={(e) => handlerTitle(e.target.value)}/>
                <textarea readOnly={selectedNote.blocked} placeholder="What's new with you?" className="content__field" value={text} onChange={(e) => handlerInput(e.target.value)}></textarea>
                </> : <section className="content__info">Not found note</section>    }
        </main>
    );
}

export default Content;
