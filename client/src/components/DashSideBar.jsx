import { Sidebar } from 'flowbite-react'
import { HiUser, HiArrowSmRight } from 'react-icons/hi'
import { MdInventory } from "react-icons/md";
import { FaMoneyBill1 } from "react-icons/fa6";
import { BsCalendar3 } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const DashSideBar = () => {
    const location = useLocation();
    const [tab, setTab] = useState('');

    useEffect(() => {
        const urlParam = new URLSearchParams(location.search);
        const tabFromUrl = urlParam.get('tab');
        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [location.search]);

    return (
        <Sidebar className='w-full md:w-56'>
            <Sidebar.Items>
                <Sidebar.ItemGroup className='gap-3'>
                    <Link to='/dashboard?tab=profile'>
                        <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={'Admin'} labelColor='dark' as='div'>
                            Profile
                        </Sidebar.Item>
                    </Link>
                    <Link to='/dashboard?tab=inventory'>
                        <Sidebar.Item active={tab === 'inventory'} icon={MdInventory} labelColor='dark' as='div'>
                            Inventory
                        </Sidebar.Item>
                    </Link>
                    <Link to='/dashboard?tab=billing'>
                        <Sidebar.Item active={tab === 'billing'} icon={FaMoneyBill1} labelColor='dark' as='div'>
                            Billing
                        </Sidebar.Item>
                    </Link>
                    <Link to='/dashboard?tab=appointment'>
                        <Sidebar.Item active={tab === 'appointment'} icon={BsCalendar3} labelColor='dark' as='div'>
                            Appointment
                        </Sidebar.Item>
                    </Link>
                    <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer">
                        Sign Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar >

    )
}

export default DashSideBar