import React from 'react';

const Search = () => {
  return (
    <div className="md:ml-5">
        <input type="text" 
        className="md:px-4 px-2 md:py-3 py-3 outline-0 border-b-2 border-slate-100 text-md md:text-lg bg-transparent text-slate-500" 
        placeholder="Type to search posts..."/>
    </div>
  )
}

export default Search;