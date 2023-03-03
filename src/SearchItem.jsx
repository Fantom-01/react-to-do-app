import React from 'react'

const SearchItem = ({ search, setSearch}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
            type="text" 
            role="searchbox" 
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem