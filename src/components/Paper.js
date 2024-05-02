import React from 'react';

const Paper = ({ children, titleDewan, custom, titleBool, customTitle}) => {

    return (
        <div className={`bg-slate-50 rounded-lg shadow-xl ${custom}`}>
            {titleBool && <h1 className={`font-bold ${customTitle} pb-3`}>{titleDewan.toUpperCase()}</h1>}
            {children}
        </div>
    );
};

export default Paper;