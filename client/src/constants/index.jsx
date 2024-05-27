import { Avatar } from 'flowbite-react';
import avatar1 from '../assets/images/pic-person-01.jpg'
import avatar2 from '../assets/images/pic-person-02.jpg'
import avatar3 from '../assets/images/pic-person-03.jpg'

import { FaClipboardList, FaUserShield, FaSearch, FaChartLine, FaMobileAlt, FaDatabase } from 'react-icons/fa';

export const features = [
    {
        icon: <FaClipboardList />,
        title: "Comprehensive Records",
        description: "Maintain complete and accurate patient records with ease, including medical history, medications, and treatment plans."
    },
    {
        icon: <FaUserShield />,
        title: "Data Security",
        description: "Ensure patient data is secure with robust encryption and access controls."
    },
    {
        icon: <FaSearch />,
        title: "Easy Search",
        description: "Quickly find patient records with an efficient search and filtering system."
    },
    {
        icon: <FaChartLine />,
        title: "Analytics",
        description: "Gain insights from patient data with built-in analytics and reporting tools."
    },
    {
        icon: <FaMobileAlt />,
        title: "Mobile Access",
        description: "Access patient records on the go with our mobile-friendly interface."
    },
    {
        icon: <FaDatabase />,
        title: "Data Backup",
        description: "Automatic data backup to prevent loss of critical patient information."
    },
];

export const contributors = [
    {
        name: "Alice Johnson",
        role: "Frontend Developer",
        description: "Alice is a skilled frontend developer, experience in React and Vue.js.",
        imageUrl: avatar1
    },
    {
        name: "Bob Smith",
        role: "Frontend Developer",
        description: "Bob specializes in UI/UX design and has a passion for creating intuitive user interfaces.",
        imageUrl: avatar2
    },
    {
        name: "Carol White",
        role: "Frontend Developer",
        description: "Carol has a strong background in JavaScript and loves to work on performance optimization.",
        imageUrl: avatar3
    },
    {
        name: "Dave Brown",
        role: "Backend Developer",
        description: "Dave is an expert in backend technologies, including Node.js and databases.",
        imageUrl: avatar2
    },
];


