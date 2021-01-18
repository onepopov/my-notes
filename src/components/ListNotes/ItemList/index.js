import React from "react";
import "./styles.scss";

function ItemList({note}) {
    return(<li className="note">
        <span className="note__title">{note.title}</span>
    </li>);
}
export default ItemList;
