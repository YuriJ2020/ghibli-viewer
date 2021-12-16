import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { MDBInput } from 'mdb-react-ui-kit';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const history = useHistory();

  return (
    <MDBInput
      label='Search'
      id='typeText'
      type='text'
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        history.push(`/search/${e.target.value}`);
      }}
    />
  );
};

export default SearchBar;
