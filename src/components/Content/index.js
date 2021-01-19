import React, {useState, useEffect} from "react";
import {useDebounce} from "../../hooks/useDebounce";
import "./styles.scss";
import {useDispatch, useSelector} from "react-redux";
import types from "../../store/types/notes";



function Content() {

    const notes = useSelector((state) => state.notes);
    const selectedNote = notes.notesList.find((note) => note.id === notes.selectedNote);
    const [text, setText] = useState(selectedNote ? selectedNote.content : "");
    const [title, setTitle] = useState(selectedNote? selectedNote.title : "Untitled");
    const dispatch = useDispatch();
    const debouncedContent = useDebounce(text, 300);
    const debouncedTitle = useDebounce(title, 300);
    const handlerInput = (text) => {
      setText(text);

        text.indexOf("\n") === -1 && setTitle(text);
    };

    useEffect(() => {
        selectedNote && setText(selectedNote.content);
    }, [notes]);

    useEffect(() => {
        if(selectedNote && text !== selectedNote.content) {
            dispatch({type: types.SET_CONTENT, payload: {id: notes.selectedNote,content: debouncedContent}});
        }
    }, [debouncedContent]);

    useEffect(() => {
        if(selectedNote && title !== selectedNote.title) {
            dispatch({type: types.SET_TITLE, payload: {id: notes.selectedNote,title: debouncedTitle}});
        }
    }, [debouncedTitle]);

    return (
        <main className="content">
            <textarea className="content__field" value={text} onChange={(e) => handlerInput(e.target.value)}></textarea>
        </main>
    );
}

export default Content;
