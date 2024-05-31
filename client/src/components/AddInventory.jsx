import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, Button } from 'flowbite-react';

const AddInventory = () => {

    return (
        <section className='flex justify-center  w-full max-w-md mx-auto my-10'>
            <form className='space-y-4 w-full'>
                <TextInput
                    type='text'
                    placeholder='Item Name'
                    required
                />
                <TextInput
                    type='number'
                    placeholder='Quantity'

                    required
                />
                <TextInput
                    type='date'
                    placeholder='Date'
                    required
                />
                <Button type='submit'>Add Inventory</Button>
            </form>
        </section>
    );
};

export default AddInventory;