import React, { useEffect } from "react";

import {useDebounce} from "../../hooks/useDebounce";

import "./styles.scss";

function Search({search, setQuery, query}) {
    const debouncedQuery = useDebounce(query, 300);

    const handleInput = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
            search(debouncedQuery);
    }, [debouncedQuery]);

    return(<div className="search">
        <input
            className="search__input"
            placeholder="Search everywhere"
            type="text"
            onChange={handleInput}
        />
    </div>)
}


export default Search;
