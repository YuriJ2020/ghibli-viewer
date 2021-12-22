import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import _ from 'lodash';

import { MDBDropdownMenu, MDBDropdownItem, MDBDropdownLink, MDBDropdownToggle, MDBDropdown } from 'mdb-react-ui-kit';

import { useGetAllCategoriesQuery } from '../store/services/ghibliApi';

// get a category Id from path
const categoryIdFromPath = (path) => {
  const lastSlash = path.lastIndexOf('/');
  const cid = path.substring(lastSlash + 1);
  return _.parseInt(cid);
};

const CategoryDropDownMenu = () => {
  const history = useHistory();
  const location = useLocation();
  const initialCategoryID = categoryIdFromPath(location.pathname);

  const [categoryID, setCategoryID] = useState(initialCategoryID);

  const createCategoryEventHandlerFromID = (cid) => {
    const eventHandler = () => {
      setCategoryID(cid);
      const arg = { pathname: `/ghibli-viewer/category/${cid}` };
      history.push(arg);
    };
    return eventHandler;
  };

  const { data: categories, isLoading, error } = useGetAllCategoriesQuery();

  const categoryIdToName = (cid) => {
    const category = _.find(categories, { id: cid });
    return _.get(category, 'name', 'Categories');
  };

  return (
    <MDBDropdown>
      <MDBDropdownToggle style={{ backgroundColor: '#26A69A' }}>{categoryIdToName(categoryID)}</MDBDropdownToggle>
      <MDBDropdownMenu>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error?.message}</p>
        ) : (
          categories.map(({ id, name }) => {
            const categoryEventHandler = createCategoryEventHandlerFromID(id);
            return (
              <MDBDropdownItem key={id}>
                <MDBDropdownLink onClick={categoryEventHandler}>{name}</MDBDropdownLink>
              </MDBDropdownItem>
            );
          })
        )}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default CategoryDropDownMenu;
