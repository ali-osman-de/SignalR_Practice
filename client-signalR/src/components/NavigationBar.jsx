import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const NavigationBar = () => {
    return (
        <Navbar
            color="dark"
            dark
        >
            <NavbarBrand className='mx-auto fw-lighter m-3' href="/">
                SignalR Practice Chat App
            </NavbarBrand>
        </Navbar>
    )
}

export default NavigationBar