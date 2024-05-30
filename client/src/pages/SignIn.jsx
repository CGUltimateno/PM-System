import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { DB_CONFIG } from "../constants/index.jsx";

const SignIn = () => {
    const handleSignIn = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        const response = await fetch(`${DB_CONFIG.API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        if (!response.ok) {
            // handle error
            console.log('Sign in failed');
        } else {
            // handle success
            console.log('Sign in successful');
        }
    };

    return (
        <section className="h-dvh flex justify-center items-center">
            <form className="flex max-w-md flex-col gap-4 w-full px-8 mx-auto" onSubmit={handleSignIn}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="username" value="Username" />
                    </div>
                    <TextInput id="username" type="username" placeholder="" required/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Password" />
                    </div>
                    <TextInput id="password" type="password" required placeholder=""/>
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