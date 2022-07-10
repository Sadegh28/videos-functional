import React, { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVidoes] = useState([]);

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm])
  return (
    <div className='container'>
      <div className=" mt-2 pt-2 pb-2 border-bottom">
        <SearchBar label='Search a Video' setSearchTerm={setSearchTerm} />
      </div>
    </div>
  )
}

export default App