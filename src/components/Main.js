import  React from 'react'; 
import Header from './Header/header';
import Body from './body/body';
import Footer from './footer/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './registration/registration';
import Hompage from './Hompage/HomPage';
import About from '../../src/components/Header/Menu/About'
import Contact from '../../src/components/Header/Menu/Contact'
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import UserLanding from './userLanging/userLanding';


const Main = () => {
    return (
        <div>
            <Header/>
                <div className='container'>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Hompage/>} />
                            <Route path="/about" element={<About/>} />
                            <Route path="/contact" element={<Contact/>} />
                            <Route path="/registration" element={<Registration/>} />
                            <Route path="/dashboard" element={<Dashboard/>} />
                            <Route path="/UserLanding" element={<UserLanding/>} />
                            
                        </Routes>
                    </BrowserRouter>
                   
                </div>
            <Footer/>

        </div>
        
    )
}
export default Main