import React from 'react';

import HeaderForm from './HeaderForm';

const Header = () => {
    return (
        <header className="header">
            <div className="header__title">
                <h1 className="heading-primary">
                    Main Header
                </h1>
            </div>
            <HeaderForm />
        </header>
    );
};

export default Header;