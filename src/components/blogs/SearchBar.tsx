import { Search } from 'react-feather';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input placeholder="Search..." className="search-input"></input>
      <Search className="icon" color="#677788" size="3rem"/>
    </div>
  );
};

export default SearchBar;
