import React, { useState } from 'react';

const Paper = ({ children, title, custom, titleBool }) => {

    return (
        <div className={`bg-slate-50 rounded-lg shadow-xl ${custom}`}>
            {titleBool && <legend className='font-bold'>{title.toUpperCase()}</legend>}
            {children}
        </div>
    );
};

export default Paper;