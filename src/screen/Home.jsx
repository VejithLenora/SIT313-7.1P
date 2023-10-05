import React from "react";
import TopNavigation from "../TopNavigation";
import HeaderImage from "../HeaderImage";
import FeaturedFreelancers from "../FeaturedFreelancers";
import EmailRegistration from "../EmailRegistration";
import FooterSection from "../FooterSection";
import FreelancerListComponent from './../FreelancerList';
import CustomerListComponent from './../FeaturedCustomersList';


const Home = () => {
    return(
        //<div style={{overflow:'auto'}}>
        <>
            <HeaderImage />
            <FeaturedFreelancers />
            <FreelancerListComponent /> 
            <CustomerListComponent />
            <EmailRegistration />
            <FooterSection />
        </>
    )
}
//            <TopNavigation />

export default Home;
 