import { Link, useLocation } from "react-router-dom"
import { Avatar, Dropdown, Navbar } from "flowbite-react"
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import logo from "../assets/images/logo.png"

const Header = () => {
    const path = useLocation().pathname;

    return (
        <header className="border-b-2">
            <Navbar fluid rounded className="container mx-auto">
                <Link to='/' className=" self-center whitespace-nowrap text-sm sm-text-2xl font-bold leading-10 tracking-wide">
                    <span>PM </span><span className="text-white px-2 py-1 rounded bg-gradient-to-r from-green-400 via-blue-500 to-purple-700"> System</span>
                </Link>
                <div className="flex gap-2 md:order-2">
                    <Dropdown className="" arrowIcon={false} inline label={<Avatar alt='user settings' rounded />}>
                        <Dropdown.Header>
                            <span className="block text-sm font-bold">John Doe</span>
                            <span className="block truncate text-sm font-medium">John@gmail.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item className="font-bold">
                            <span className="pr-2 text-green-700"><FaUserCircle /></span>  Profile
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
                        <Link to='/about'>
                            Home
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === '/about'} as={'div'}>
                        <Link to='/about'>
                            About
                        </Link>
                    </Navbar.Link>

                    <Navbar.Link active={path === '/dashboard'} as={'div'}>
                        <Link to='/dashboard' >
                            Dashboard
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === '/sign-up'} as={'div'}>
                        <Link to='/sign-up'>
                            Login
                        </Link>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar >
        </header >
    )
}

export default Header