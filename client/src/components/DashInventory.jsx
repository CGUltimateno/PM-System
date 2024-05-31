import { Button, TextInput } from 'flowbite-react';
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const DashInventory = () => {

    const navigate = useNavigate();

    return (
        <section className='w-full'>
            <div className='flex justify-between items-center w-full my-4 px-10 max-sm:flex-col max-sm:gap-3'>
                <Button className='mr-4 max-sm:mt-5' onClick={() => navigate('/dashboard?tab=add-inventory')}>
                    Add Record
                </Button>
                <form className='flex mr-4 max-sm:mt-5'>
                    <TextInput type='text' className=' mr-3' />
                    <Button type='submit' className='flex-none'><IoIosSearch /></Button>
                </form>
            </div>
            <div className='overflow-x-auto px-10'>
                <table className='w-full text-sm text-left text-gray-500'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                        <tr>
                            <th className='px-6 py-3'>Item Name</th>
                            <th className='px-6 py-3'>Quantity</th>
                            <th className='px-6 py-3'>Expiration Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className='bg-white border-b'>
                            <td className='px-6 py-4'>name</td>
                            <td className='px-6 py-4'>Quantity</td>
                            <td className='px-6 py-4'>date</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default DashInventory;
