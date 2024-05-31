import { Button, Label, TextInput, Select } from "flowbite-react";
import { Link } from "react-router-dom";

const DashProfile = () => {
    return (
        <section className="flex flex-col justify-center items-center mx-auto w-full">
            <div>
                <h3 className="text-xl leading-3 font-bold">Profile</h3>
            </div>
            <form className="flex max-w-md flex-col gap-4 w-full px-8 mx-auto">
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
                    <TextInput id="username" type="text" placeholder="" disabled />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Email Address" />
                    </div>
                    <TextInput id="email" type="email" placeholder="Enter your Email" disabled />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Password" />
                    </div>
                    <TextInput id="password" type="password" required placeholder="" />
                </div>

                <Button type="submit">Update</Button>
            </form>
        </section>
    )
}

export default DashProfile