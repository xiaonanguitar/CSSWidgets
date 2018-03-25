import React from 'react';
import { compose } from 'redux';
import withLoading from './LoadingList';
import flatten from './flatten';


const List = ({ data }) => {
    console.log(data);
    return (
        <ul>
            {data.map(item => <li key={item.name}>{item.name}</li>)}
        </ul>
    )
}

const EnhancedList = compose(
    flatten('list'),
    withLoading,
  )(List)

export default EnhancedList;

