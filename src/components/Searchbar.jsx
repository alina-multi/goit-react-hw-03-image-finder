

export const Searchbar = ({onSearch}) => ( 
<header className="searchbar">
<form className="form" onSubmit={onSearch}>
  <button type="submit" className="button" > 
    <span className="button-label">Search</span>
  </button>

  <input
    className="input"
    type="text"
    name="input"
    placeholder="Search images and photos"
  
  />
</form>
</header>)

