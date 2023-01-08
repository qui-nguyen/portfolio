import React from 'react';
import { useState } from 'react';
interface Props {
    menuClose: boolean;
}

const MenuButton = ({ menuClose }: Props) => {

    return (
        <div id="menu-btn" className={menuClose ? 'close' : 'open'}>
            <span className="text">MENU</span>
        </div>
    )
};

export default MenuButton;
