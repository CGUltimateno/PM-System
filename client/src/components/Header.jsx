import { Link, useLocation } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"; // Import animateScroll
import { useEffect } from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
    const location = useLocation();
    const path = location.pathname;
    const hash = location.hash;

    useEffect(() => {
        if (hash) {
            scroll.scrollTo(document.querySelector(hash).offsetTop, {
                duration: 500,
                smooth: true
            });
        }
    }, [hash]);

    return (
        <header className="border-b-2">
            <Navbar fluid rounded className="container mx-auto">
                <Link to='/' className="self-center whitespace-nowrap text-sm sm:text-2xl font-bold leading-10 tracking-wide">
                    <span>PM </span>
                    <span className="text-white px-2 py-1 rounded bg-gradient-to-r from-green-400 via-blue-500 to-purple-700">System</span>
                </Link>
                <div className="flex gap-2 md:order-2">
                    <Dropdown arrowIcon={false} inline label={<Avatar alt='user settings' rounded />}>
                        <Dropdown.Header>
                            <span className="block text-sm font-bold">John Doe</span>
                            <span className="block truncate text-sm font-medium">John@gmail.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item className="font-bold">
                            <span className="pr-2 text-green-700"><FaUserCircle /></span> Profile
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="font-bold">
                            <span className="pr-2 text-red-600"><AiOutlineLogout /></span>Sign Out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link active={path === '/'} as={'div'}>
                        <Link to='/'>Home</Link>
                    </Navbar.Link>
                    {path === '/' ? (
                        <>
                            <Navbar.Link as={'div'}>
                                <ScrollLink to='features' smooth={true} duration={500}>
                                    Features
                                </ScrollLink>
                            </Navbar.Link>
                            <Navbar.Link as={'div'}>
                                <ScrollLink to='contributors' smooth={true} duration={500}>
                                    Contributors
                                </ScrollLink>
                            </Navbar.Link>
                            <Navbar.Link as={'div'}>
                                <ScrollLink to='contacts' smooth={true} duration={500}>
                                    Contacts
                                </ScrollLink>
                            </Navbar.Link>
                        </>
                    ) : (
                        <>
                            <Navbar.Link as={'div'}>
                                <Link to='/#features'>
                                    Features
                                </Link>
                            </Navbar.Link>
                            <Navbar.Link as={'div'}>
                                <Link to='/#contributors'>
                                    Contributors
                                </Link>
                            </Navbar.Link>
                            <Navbar.Link as={'div'}>
                                <Link to='/#contacts'>
                                    Contacts
                                </Link>
                            </Navbar.Link>
                        </>
                    )}
                    <Navbar.Link active={path === '/about'} as={'div'}>
                        <Link to='/about'>About</Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === '/dashboard'} as={'div'}>
                        <Link to='/dashboard'>Dashboard</Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === '/sign-up'} as={'div'}>
                        <Link to='/sign-up'>Sign Up</Link>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;
