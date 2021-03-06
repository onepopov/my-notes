import { v4 as uuidv4 } from "uuid";
import types from "../types/notes";

const initState = {
    notesList: [],
    selectedNote: "",
};

export function notes(state = initState, {type, payload}) {
    switch (type) {
        case types.ADD_NOTE:
            const id = uuidv4();
            return {...state, notesList: [...state.notesList, {id, date: new Date(), content: "", title: "Untitled", selectedNote: id, blocked: false}]};
        case types.REMOVE_NOTE:
            return {...state, notesList: state.notesList.slice().filter((item)=> item.id !== payload.id), selectedNote: ""};
        case types.SELECT_NOTE:
            return {...state, selectedNote: payload.id};
        case types.SET_TITLE:
            return {...state, notesList: state.notesList.map((note) => {
                    if(note.id === payload.id) {
                        return Object.assign({}, note, {
                            title: payload.title
                        });
                    }
                    return note;
                })};
        case types.SET_BLOCKED:
            return {...state, notesList: state.notesList.map((note) => {
                    if(note.id === payload.id) {
                        return Object.assign({}, note, {
                            blocked: !note.blocked
                        });
                    }
                    return note;
                })};
        case types.SET_CONTENT:
            return {...state, notesList: state.notesList.map((note) => {
                    if(note.id === payload.id) {
                        return Object.assign({}, note, {
                            content: payload.content
                        });
                    }
                    return note;
                })};
        default:
            return state;
    }
}
