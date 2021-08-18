import { Search } from 'react-feather';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input placeholder="Search..." className="search-input"></input>
      <Search className="icon" color="#fff" size="3rem"/>
    </div>
  );
};

export default SearchBar;
