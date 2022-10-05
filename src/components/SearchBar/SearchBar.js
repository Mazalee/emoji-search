import React from 'react'
import './SearchBar.css'

function SearchBar({ handleChange }) {
    const handleText = (e) => {
        handleChange(e);
    }
  return (
    <div className='search-input'>
        <div>
            <input className='input-text' placeholder='Search Emoji...' onChange={handleText} />
        </div>
    </div>
  )
}

export default SearchBar