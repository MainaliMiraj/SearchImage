import './searchBar.css'
import { useState } from "react";
function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSunmit = (e) => {
    e.preventDefault();
    onSubmit(term);
      setTerm('');
  };
  
  const handleChange=(e)=>{
    setTerm(e.target.value)
    e.target.value='';
    
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSunmit}>
        <label className='label'>Enter search term: </label>
        <input value={term} autoFocus onChange={handleChange}  className='box'/>
      </form>
    </div>
  );
}
export default SearchBar;
