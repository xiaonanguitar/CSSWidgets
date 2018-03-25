import React,{Component} from 'react';

const withLoading = BaseComponent => ({ isLoading, ...otherProps }) => (
    isLoading ?
        <div>我正在加载...</div> :
        <BaseComponent {...otherProps} />
)


export default withLoading;
