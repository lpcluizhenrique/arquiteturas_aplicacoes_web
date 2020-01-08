import React from 'react';
import ListCustomers from '../components/ListCustomers';
import Viewer from '../components/Viewer';

export default () => {
  return (
    <div>
      <Viewer viewer={props.viewer} />
      <ListCustomers customers={props.allCustomers} />
    </div>
  );
};
