import React from 'react';

const container = (props) => (
    <div className={props.className}>
        {props.children}
    </div>
)

export default container;
