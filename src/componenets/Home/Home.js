
import React, { useState } from 'react';
import './Home.css';
import fackData from '../../Data/FackData.json';
import HomeContent from '../HomeContent/HomeContent';
import Menu from '../menu/menu';

const Home = () => {
const [gari, setGari] = useState(fackData);
    return (
        <div className="Home_body_bg">
            <Menu></Menu>
            <div className="Home-_body">
            {
                gari.map(gari => <HomeContent  trns={gari}></HomeContent>)
            }
            </div>
        </div>
    );
};

export default Home;