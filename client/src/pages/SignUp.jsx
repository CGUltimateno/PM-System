import { Button, Label, TextInput, Select } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { DB_CONFIG } from "../constants/index.jsx";
import { useState } from 'react';
import { data } from "autoprefixer";

const SignUp = () => {
    const [role, setRole] = useState('');
    const Navigate = useNavigate();
    const handleSignUp = async (event) => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(data); // This will log the data being sent to the backend


        const response = await fetch(`${DB_CONFIG.API_URL}/${role}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                password: password,
                dob: role === 'patients' ? event.target.dob.value : undefined,
                gender: role === 'patients' ? event.target.gender.value : undefined,
                address: role === 'patients' ? event.target.address.value : undefined,
                phone: role === 'patients' ? event.target.phone.value : undefined,
                insuranceInfo: role === 'patients' ? event.target.insuranceInfo.value : undefined,
                specialization: role === 'doctors' ? event.target.specialization.value : undefined,
                schedule: role === 'doctors' ? event.target.schedule.value : undefined,
            }),
        });

        if (!response.ok) {
            // handle error
            console.log('Sign up failed');
        } else {
            // handle success
            console.log('Sign up successful');
            Navigate('/sign-in');
        }
    };
    return (
        <section className="flex justify-center items-center my-5">
            <form className="flex max-w-md flex-col gap-4 w-full px-8 mx-auto" onSubmit={handleSignUp}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="firstName" value="First Name" />
                    </div>
                    <TextInput id="firstName" type="text" placeholder="john" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="lastName" value="Last Name" />
                    </div>
                    <TextInput id="lastName" type="textname" placeholder="Doe" required />
                </div>
                <div>
                    <div className={"mb-2 block"}>
                        <Label htmlFor="username" value="Username" />
                    </div>
                    <TextInput id="username" type="text" placeholder="" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Email Address" />
                    </div>
                    <TextInput id="email" type="email" placeholder="Enter your Email" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Password" />
                    </div>
                    <TextInput id="password" type="password" required placeholder="" />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="role" value="I am a" />
                    </div>
                    <Select id="role" required onChange={(e) => setRole(e.target.value)}>
                        <option value="">Select...</option>
                        <option value="doctors">Doctor</option>
                        <option value="patients">Patient</option>
                    </Select>
                </div>
                {role === 'doctors' && (
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="specialization" value="Specialization" />
                        </div>
                        <TextInput id="specialization" type="text" placeholder="Cardiologist" required />
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="schedule" value="Schedule" />
                            </div>
                            <TextInput id="schedule" type="text" placeholder="Mon-Fri 9am-5pm" required />
                        </div>
                    </div>
                )}
                {role === 'patients' && (
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="dob" value="Date of Birth" />
                        </div>
                        <TextInput id="dob" type="date" required />
                        <div className="mb-2 block">
                            <Label htmlFor="gender" value="Gender" />
                        </div>
                        <Select id="gender" required>
                            <option value="">Select...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Select>
                        <div className="mb-2 block">
                            <Label htmlFor="address" value="Address" />
                        </div>
                        <TextInput id="address" type="text" placeholder="123 Main St" required />
                        <div className="mb-2 block">
                            <Label htmlFor="phone" value="Phone" />
                        </div>
                        <TextInput id="phone" type="text" placeholder="(123) 456-7890" required />
                        <div className="mb-2 block">
                            <Label htmlFor="insuranceInfo" value="Insurance Information" />
                        </div>
                        <TextInput id="insuranceInfo" type="text" placeholder="Insurance Provider" required />
                    </div>
                )}
                <Button type="submit">Submit</Button>
                <div className="flex flex-row gap-2 text-center justify-center mt-3">
                    <p className="text-sm text-slate-900">Already Have An Account?</p>
                    <Link to='/sign-in' className="text-sm text-green-500 font-bold">Sign In</Link>
                </div>
            </form>
        </section>
    );
};

export default SignUp;
