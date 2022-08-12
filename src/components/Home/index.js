import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
//import { CCard,CCardImage,CCardBody,CCardTitle,CCardText,CButton } from '@coreui/react'
//import LogoTitle from '../../assets/images/logo-w.png'
//import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'
import Card from '../Card'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['','A','r', 'a' , 'v', 'i', 'n', 'd']
    const jobArray = ['E ','n','g','i','n','e','e','r','','!!']

    useEffect(() => {
           
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={ `${letterClass} _12`}>Hey</span>
                <span className={ `${letterClass} _12`}>,,</span>
                <span className={ `${letterClass} _12`}>T</span>
                <span className={ `${letterClass} _12`}>h</span>
                <span className={ `${letterClass} _12`}>e</span>
                <span className={ `${letterClass} _12`}>r</span>
                <span className={ `${letterClass} _12`}>e</span>

                <br/>
                <span className={ `${letterClass} _13`}>I</span> 
                <span className={ `${letterClass} _14`}>'m</span> 
                {/*<img src={LogoTitle} alt="developer"/>*/}
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={21}/>
                </h1>

                <h2>Full Stack Web and App Developer !!</h2>
                
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Card />    

        
            {/*<Logo />*/}
        </div>
        <Loader type='ball-beat' />
        </>
        
    );
}

export default Home
