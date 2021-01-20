import React, {useEffect, useState} from "react";
import "./styles.scss";
import {useDebounce} from "../../hooks/useDebounce";
import {useDispatch} from "react-redux";

function Search({search}) {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 300);

    const handleInput = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
            search(debouncedQuery);
    }, [debouncedQuery]);
    return(<div className="search">
        <input className="search__input" type="text" onChange={handleInput}/>
    </div>)
}


export default Search;
