import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <section className="h-dvh flex justify-center items-center">
            <form className="flex max-w-md flex-col gap-4 w-full px-8 mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="name@company.com"
                        required
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput
                        id="password"
                        type="password"
                        required
                        placeholder="*********"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit">Sign In</Button>
                <div className="flex flex-row gap-2 text-center justify-center mt-3">
                    <p className="text-sm text-slate-900">Don't have an account?</p>
                    <Link to='/sign-up' className="text-sm text-green-500 font-bold">Sign Up</Link>
                </div>
            </form>
        </section>
    );
};

export default SignIn;
