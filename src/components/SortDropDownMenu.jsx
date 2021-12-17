import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import _ from 'lodash';

import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';

const SortDropDownMenu = () => {
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sortCodeFromParam = searchParams.get('sort');

  const [sortCode, setSortCode] = useState(sortCodeFromParam);

  const createEventHandlerFromSortCode = (s) => {
    const eventHandler = () => {
      setSortCode(s);
      history.push({ search: `?sort=${s}` });
    };
    return eventHandler;
  };

  const sortByRankEventHandler = createEventHandlerFromSortCode('rank');
  const newestFirstEventHandler = createEventHandlerFromSortCode('newest');
  const oldestFirstEventHandler = createEventHandlerFromSortCode('oldest');

  // What's higher order function?
  // - HOF is a function that returns / creates a function.
  //
  // Why is higher order function needed?
  // - To improve code reusability.

  // If 'handleSort' were not created:
  //
  // const handleSortByRank = () => {
  //   setSort(s);
  //   console.log(`sort: ${s}`);
  //   history.push({ search: '?sort=rank' });
  // }

  // const handleSortByNewest = () => {
  //   setSort(s);
  //   console.log(`sort: ${s}`);
  //   history.push({ search: '?sort=newest' });
  // }

  // const handleSortByOldest = () => {
  //   setSort(s);
  //   console.log(`sort: ${s}`);
  //   history.push({ search: '?sort=oldest' });
  // }

  const sortCodeToTitle = (s) => {
    const dict = {
      rank: 'By Rank',
      newest: 'Newest First',
      oldest: 'Oldest First',
    };
    return _.get(dict, s, 'Sort By');
  };

  return (
    <MDBDropdown>
      <MDBDropdownToggle className='bg-dark'>{sortCodeToTitle(sortCode)}</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem>
          <MDBDropdownLink onClick={sortByRankEventHandler}>By Rank</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink onClick={newestFirstEventHandler}>By Release Year (Newest First)</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink onClick={oldestFirstEventHandler}>By Release Year (Oldest First)</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default SortDropDownMenu;
