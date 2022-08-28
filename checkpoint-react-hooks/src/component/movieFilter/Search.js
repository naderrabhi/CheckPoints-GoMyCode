import React,{useState} from 'react'
import './search.css'

const Search = ({callSearchFunction}) => {

    const [searchValue, setSearchValue] = useState('');

  return (
    <form className="search d-flex" onSubmit={(e)=> e.preventDefault()}>
        <input
            className="form-control me-2"
          value={searchValue}
          onChange={(e)=> setSearchValue(e.target.value)}
          type="text"
        />
        <button onClick={() => callSearchFunction(searchValue)} className="btn btn-outline-success">
            Search
        </button>
      </form>
    );
  
}

export default Search