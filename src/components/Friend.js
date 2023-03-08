import React from 'react';

const Friend = (props) => {
    return (
        <img className={'col-4 p-1'} src={props.friend} alt={'friend'}/>
    );
};

export default Friend;
