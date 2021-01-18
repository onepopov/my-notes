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
        default:
            return state;
    }
}
