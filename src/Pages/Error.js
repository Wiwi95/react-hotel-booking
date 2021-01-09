import React from 'react'
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import defaultBcg from '../images/defaultBcg.jpeg';

export default function Error() {
    return (
        <Hero hero="defaultHero">
            <Banner title="404" subtitle="Page not found">
                <Link className="btn-primary" to='/'>
                    Return Home
                </Link>
            </Banner>  
        </Hero>
    )
}
