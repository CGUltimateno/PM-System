import { Button } from "flowbite-react"
import heroImg from "../assets/images/hero-img.png"
import '../styles.css'
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className='custom-bg  md:h-dvh bg-center flex flex-col justify-center items-center px-4 overflow-hidden'>
            <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl">
                <div className="flex-1 w-full md:w-1/2 p-4 md:p-8 text-center">
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 text-slate-700 drop-shadow-xl">
                        Welcome To PM System
                    </h3>
                    <p className="mb-6 text-2xl md:text-xl my-10 leading-6 max-sm:text-sm drop-shadow-lg lg:text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque necessitatibus vel magni a perspiciatis, repudiandae numquam pariatur, iusto incidunt, facilis distinctio quis explicabo! Expedita in nostrum explicabo saepe ex est quos,
                    </p>
                    <Link to='/sign-up'>
                        <Button className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-700 mx-auto w-1/3 mt-3" outline>
                            Sign Up
                        </Button>
                    </Link>
                </div>
                <div className="flex-1 w-full md:w-1/2 p-4 md:p-8 border-10 max-sm:hidden">
                    <img src={heroImg} alt="hero img" className="w-full h-full max-w-md mx-auto" />
                </div>
            </div>
        </div >
    )
}

export default Hero
