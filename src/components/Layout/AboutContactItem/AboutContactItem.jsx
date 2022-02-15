import React from 'react';

const AboutContactItem = ({title, children}) => {
    return (
        <>
            <span>{title}</span>
            <div>{children}</div>
        </>
    );
};

export default AboutContactItem;