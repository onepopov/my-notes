import { v4 as uuidv4 } from "uuid";
import types from "../types/notes";

const initState = {
    notesList: [],
    selectedNote: "",
};

export function notes(state = initState, {type, payload}) {
    switch (type) {
        case types.ADD_NOTE:
            return {...state, notesList: [...state.notesList, {id: uuidv4(), date: new Date(), content: "", title: "UNTITLED"}]};
        case types.SELECT_NOTE:
            return {...state, selectedNote: payload.id};
        case types.SET_CONTENT:
            console.log("1")
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
