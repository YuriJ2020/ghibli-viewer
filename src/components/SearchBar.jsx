import React, { useState } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import { MDBInput } from 'mdb-react-ui-kit';

const DivS = styled.div`
  @media (min-width: 992px) {
    padding-right: 2rem;
  }
`;

const MDBInputS = styled(MDBInput)`
  @media (min-width: 992px) {
    width: 15rem;
  }
`;

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const history = useHistory();

  return (
    <DivS>
      <MDBInputS
        label='Search'
        id='typeText'
        type='text'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          history.push(`/ghibli-viewer/search/${e.target.value}`);
        }}
      />
    </DivS>
  );
};

export default SearchBar;
