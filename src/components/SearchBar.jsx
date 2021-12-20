import React, { useState } from 'react';

import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import { MDBInput } from 'mdb-react-ui-kit';

const DivS = styled.div`
  @media (min-width: 992px) {
    padding-right: 5rem;
  }
`;

const MDBInputS = styled(MDBInput)`
  // @media (min-width: 992px) {
  //   margin: 0 4rem;
  // }
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
          history.push(`/search/${e.target.value}`);
        }}
      />
    </DivS>
  );
};

export default SearchBar;
