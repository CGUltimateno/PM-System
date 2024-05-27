import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Contributors from '../components/Contributors'

const Home = () => {
    return (
        <section id='home'>
            <Hero />
            <Features />
            <Contributors />
        </section>
    )
}

export default Home