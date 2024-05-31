import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import DashSideBar from "../components/DashSideBar"
import DashProfile from "../components/DashProfile"
import DashInventory from "../components/DashInventory"
import DashBilling from "../components/DashBilling"
import DashAppoint from "../components/DashAppoint";
import AddInventory from "../components/AddInventory";

const Dashboard = () => {
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
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className='md:w-56'>
                {/* Sidebar */}
                <DashSideBar />
            </div>
            {/* profile... */}
            {tab === 'profile' && <DashProfile />}
            {tab === 'inventory' && <DashInventory />}
            {tab === 'billing' && <DashBilling />}
            {tab === 'appointment' && <DashAppoint />}
            {tab === 'add-inventory' && <AddInventory />}
        </div>
    )
}

export default Dashboard