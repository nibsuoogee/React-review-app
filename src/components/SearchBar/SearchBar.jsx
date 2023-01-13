import { useState } from 'react';
import { books } from "./Data.js"

const searchBar =() => {
const [searchInput, setSearchInput] = useState("");

const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value)
};

if (searchInput.length > 0){
    mediaItems.filter((book) => {
    return book.title.match(searchInput)
    })
}

}