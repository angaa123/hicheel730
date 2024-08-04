import React from 'react';
import { IoMenu } from "react-icons/io5";

function Header() {
    return (
        <header className='flex justify-between items-center'>
            <img src="/img/logo.png" alt='Logo' className='m-5 h-6 w-auto' />
            <IoMenu className='text-2xl m-5 md:hidden'></IoMenu>
        </header>
    );
}

export default Header;