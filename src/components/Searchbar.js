const Searchbar = ({ name }) => {
    return (
      <div className="search-container">
        <i className="ri-search-line search-icon"></i>
        <input type="text" placeholder={name} className="search-input" />
      </div>
    );
  };


export default Searchbar;


