import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <section className="h-dvh flex justify-center items-center">
            <form className="flex max-w-md flex-col gap-4 w-full px-8 mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="Firstname" value="FirstName" />
                    </div>
                    <TextInput id="firstname" type="text" placeholder="john" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="Lastname" value="lastname" />
                    </div>
                    <TextInput id="lastname" type="textname" placeholder="Doe" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                    </div>
                    <TextInput id="email" type="email" placeholder="name@Company.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput id="password" type="password" required placeholder="********" />
                </div>
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
