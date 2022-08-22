import React from 'react';
import Logo from "../UI/Logo/Logo";
import SearchInput from "./SearchInput/SearchInput.jsx";
import SearchButton from "./SearchButton/SearchButton.jsx";

const Search = () => {
    return (
        <>
            <Logo/>
            <SearchInput />
            <SearchButton> Найти </SearchButton>
        </>
    );
};

export default Search;