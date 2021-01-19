import React, {useEffect, useState} from "react";
import "./styles.scss";
import {useDebounce} from "../../hooks/useDebounce";
import types from "../../store/types/notes";
import {useDispatch} from "react-redux";

function Search({search}) {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const debouncedQuery = useDebounce(query, 300);

    const handleInput = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        if(debouncedQuery !== "") {
            search(debouncedQuery);
        }
    }, [debouncedQuery]);
    return(<div className="search">
        <input type="text" onChange={handleInput}/>
    </div>)
}


export default Search;
