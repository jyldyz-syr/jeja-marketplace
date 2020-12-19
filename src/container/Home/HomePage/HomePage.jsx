import React from 'react';
import HeroBlock from '../HeroBlock/HeroBlock';
import SideBar from '../Sidebar/Sidebar';
import ProdcuctItems from '../ProductItems/ProductItems';
import PromoBlock from '../PromoBlock/PromoBlock';
import CTABlock from '../CTABlock/CTABlock';
import Advantages from '../Advantages/Advantages';

const HomePage = () => {
    return (
        <div>
            <HeroBlock/>
            <Advantages />
            <SideBar/>
            <ProdcuctItems/>
            <PromoBlock/>
            <CTABlock/>
        </div>
    );
};

export default HomePage;