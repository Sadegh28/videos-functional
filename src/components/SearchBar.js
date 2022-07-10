import React, { useRef } from 'react'

function SearchBar({ label, setSearchTerm }) {

  const termRef = useRef();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(termRef.current.value)

  }
  return (
    <form onSubmit={onSearchSubmit}>
      <div class="mb-3">
        <label for="searchInput" className="h5">{label}</label>
        <input ref={termRef} type="text" className="form-control" id="searchInput" ></input>
      </div>
    </form>
  )
}

export default SearchBar