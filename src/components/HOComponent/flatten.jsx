import React from 'react';

const flatten = propKey => BaseComponent => props => <BaseComponent {...props} {...props[propKey]} />

export default flatten;
