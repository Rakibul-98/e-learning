import { Button, Navbar } from 'flowbite-react';
import React from 'react';

const NavBar = () => {

    const nav =[
        {
            id:1,
            name:"About",
            link:"#about",
        },
        {
            id:2,
            name:"Service",
            link:"#service",
        },
        {
            id:3,
            name:"Pricing",
            link:"#pricing",
        },
        {
            id:4,
            name:"Contact",
            link:"#contact",
        }
    ]

    return (
        <Navbar className='bg-opacity-0 pt-10' fluid={true} rounded={true}>
            <Navbar.Brand href="/">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> LOGO </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button>
                    Get started
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link className='text-lg text-white' href="/">Home</Navbar.Link>
                {
                    nav.map(n=><Navbar.Link className='text-lg text-white' key={n.id} href={n.link}>{n.name}</Navbar.Link>)
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;