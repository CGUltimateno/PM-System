import { footerLinks } from '../constants/index';
import { Link } from 'react-router-dom';
import { Footer } from 'flowbite-react';


const FooterCom = () => {
    return (
        <Footer container={true} className="bg-gray-800 text-white py-6 flex flex-col">
            <div className="w-full flex flex-col md:flex-row justify-between items-center">
                <div className='flex-1'>
                    <Link to='/' className=" self-center whitespace-nowrap text-sm sm-text-2xl font-bold leading-10 tracking-wide">
                        <span>PM </span><span className="text-white px-2 py-1 rounded bg-gradient-to-r from-green-400 via-blue-500 to-purple-700"> System</span>
                    </Link>
                </div>
                <div className="flex space-x-4 mb-4 md:mb-0 mr-3 max-md:my-5">
                    {footerLinks
                        .filter(link => link.icon)
                        .map((link, index) => (
                            <a key={index} href={link.href} className="text-white hover:text-gray-400">
                                <link.icon size={24} />
                            </a>
                        ))}
                </div>
                <div className="flex space-x-4 mb-4 md:mb-0">
                    {footerLinks
                        .filter(link => !link.icon)
                        .map((link, index) => (
                            <a key={index} href={link.href} className="text-white hover:text-gray-400">
                                {link.name}
                            </a>
                        ))}
                </div>
            </div>
            <Footer.Divider />
            <Footer.Copyright by="PM System" year={`${new Date().getFullYear()}`} />
        </Footer>
    );
}

export default FooterCom;