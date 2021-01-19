import React, {useState, useEffect} from "react";
import {useDebounce} from "../../hooks/useDebounce";
import "./styles.scss";
import {useDispatch, useSelector} from "react-redux";
import types from "../../store/types/notes";



function Content() {

    const notes = useSelector((state) => state.notes);
    const selectedNote = notes.notesList.find((note) => note.id === notes.selectedNote);
    const [text, setText] = useState(selectedNote ? selectedNote.content: "");
    const dispatch = useDispatch();
    const debouncedText = useDebounce(text, 300);
    const handlerInput = (text) => {
      setText(text);
    };
    useEffect(() => {
        selectedNote && setText(selectedNote.content);
    }, [notes]);
    useEffect(() => {
        if(selectedNote && text !== selectedNote.content) {
            dispatch({type: types.SET_CONTENT, payload: {id: notes.selectedNote,content: debouncedText}});
        }
    }, [debouncedText]);

    return (
        <main className="content">
            <textarea className="content__field" value={text} onChange={(e) => handlerInput(e.target.value)}></textarea>
        </main>
    );
}

export default Content;
