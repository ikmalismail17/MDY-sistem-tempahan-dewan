import React from 'react';

const Paper = ({ children, title, custom, titleBool, customeTitle}) => {

    return (
        <div className={`bg-slate-50 rounded-lg shadow-xl ${custom}`}>
            {titleBool && <h1 className={`font-bold ${customeTitle} pb-3`}>{title.toUpperCase()}</h1>}
            {children}
        </div>
    );
};

export default Paper;