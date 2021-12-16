import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';

const SortDropDownMenu = () => {
  const [sort, setSort] = useState();
  const history = useHistory();

  const handleSort = (s) => () => {
    setSort(s);
    history.push({ search: `?sort=${s}` });
  };

  const handleSortByRank = handleSort('rank');
  const handleSortByNewest = handleSort('newest');
  const handleSortByOldest = handleSort('oldest');

  return (
    <MDBDropdown>
      <MDBDropdownToggle className='bg-dark'>Sort By {sort}</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem>
          <MDBDropdownLink onClick={handleSortByRank}>By Rank</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink onClick={handleSortByNewest}>By Release Year (Newest First)</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink onClick={handleSortByOldest}>By Release Year (Oldest First)</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default SortDropDownMenu;
