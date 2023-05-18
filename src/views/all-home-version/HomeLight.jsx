import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home from "../../components/Home";
import About from "../../components/about/AboutMain";
import Portfolio from "../../components/portfolio/PortfolioCreative";
import News from "../../components/News";
import ServiceMain from "../../components/service/ServiceMain";
import Contact from "../../components/contact/Contact";
import CopyRight from "../../components/CopyRight";
import PageTitle from "../../components/PageTitle";
import HamburgerMenuButton from "../../modal-menu/NewHamburgerMenuButton";

const HomeLight = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkModeEnabled", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [tabIndex, setTabIndex] = useState(0);


  const [isOpen, setIsOpen] = useState(true);





  return (
    <>
       
    <HamburgerMenuButton  
        tabIndex={tabIndex} setTabIndex={setTabIndex} 
        // onClick={toggleModal} 
        isOpen={isOpen} setIsOpen={setIsOpen} />
    
        <PageTitle title="Home Regular" />
        {/* End page title for seo */}

        <button className="theme-switcher-label" onClick={toggleDarkMode}>
            {isDarkMode ? (
            <>
                <FaSun />
            </>
            ) : (
            <>
                <FaMoon />
            </>
            )}
        </button>

        <Tabs defaultIndex={0}
            selectedIndex={tabIndex} 
            onSelect={(index, lastIndex) => { 
                setTabIndex(index);
                console.log("▶ Tab Click",index);
                console.log("x last",lastIndex);
                }} 
        >
            <TabList style={{ visibility: 'hidden' }}>
            {/* START LEFT MENU CONTENT */}
            <div className="leftpart">
                <div className="leftpart_inner">
                <div className="logo">
                    <Link className="navbar-brand" to="/">
                    <img src="/assets/img/logo/dark.png" alt="brand" />
                    </Link>
                </div>
                {/* END LOGO */}

                <div className="menu">
                    <ul>
                    <Tab>
                        <img
                        className="svg"
                        src="/assets/img/svg/home-run.svg"
                        alt="homerun"
                        />
                        <span className="menu_content">Home</span>
                    </Tab>
                    <Tab>
                        <img
                        className="svg"
                        src="/assets/img/svg/avatar.svg"
                        alt="avatar"
                        />
                        <span className="menu_content">About</span>
                    </Tab>
                    {/* <Tab>
                        <img
                        className="svg"
                        src="/assets/img/svg/setting.svg"
                        alt="avatar"
                        />
                        <span className="menu_content">Service</span>
                    </Tab> */}
                    <Tab>
                        <img
                        className="svg"
                        src="/assets/img/svg/briefcase.svg"
                        alt="briefcase"
                        />
                        <span className="menu_content">Portfolio</span>
                    </Tab>
                    {/* <Tab>
                        <img
                        className="svg"
                        src="/assets/img/svg/paper.svg"
                        alt="paper"
                        />
                        <span className="menu_content">News</span>
                    </Tab> */}
                    <Tab>
                        <img
                        className="svg"
                        src="/assets/img/svg/mail.svg"
                        alt="mail"
                        />
                        <span className="menu_content"> Contact</span>
                    </Tab>
                    </ul>
                </div>
                {/* END MENU */}

                <CopyRight />
                {/* END COPYRIGHT */}
                </div>
            </div>
            {/* END LEFT MENU CONTENT */}
            </TabList>
            {/* END SIDEBAR TABLIST */}

            {/* START RIGHT PART CONTENT */}
            <div className="rightpart">
            <div className="rightpart_in">
                <div className="tokyo_tm_section">
                <TabPanel>
                    <div data-aos="fade-right" data-aos-duration="1200">
                    <Home />
                    </div>
                </TabPanel>
                {/* END HOME MENU TAB CONTENT */}

                <TabPanel>
                    <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                    >
                    <About setTabIndex={setTabIndex} />
                    </div>
                </TabPanel>
                {/* END ABOUT MENU TAB CONTENT */}

                {/* <TabPanel>
                    <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                    >
                    <ServiceMain />
                    </div>
                </TabPanel> */}
                {/* END ABOUT MENU TAB CONTENT */}

                <TabPanel>
                    <Portfolio />
                </TabPanel>
                {/* END PORTFOLIO MENU TAB CONTENT */}

                {/* <TabPanel>
                    <News />
                </TabPanel> */}
                {/* END NEWS MENU TAB CONTENT */}

                <TabPanel>
                    <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                    >
                    <Contact />
                    </div>
                </TabPanel>
                {/* END CONTACT MENU TAB CONTENT */}
                </div>
            </div>
            </div>
            {/* END RIGHT PART CONTENT */}
        </Tabs>
        {/* END TABS */}
        <div className="footer-container" style={{ 
            zIndex: '99999999999999999999999',
            // backgroundColor: 'blue', marginTop: 0, marginBottom: 0, 
            // position: 'relative',
            position: "absolute",
            width: "100%",
            top: 'auto',
            left: 0,
            bottom: 0,
            color: "rgba(100, 100, 100, 1)",
            // color: "rgba(117, 255, 255, 1)",
            textAlign: "center",
            backgroundColor: "rgba(206, 212, 218, 1)",
            lineHeight: "10px",
            height: "30px",
            position: "fixed",
            display: "block"
        
    }}
    ><br /><p className="footer-text">
        zaprojektowane przez: 
        <a target="_blank" rel="noopener noreferrer" 
        // href="tel:665-243-926">	665-243-926</a>meetco.dev
        href="https://meetco.dev/">	meetco.dev</a>
        </p> </div>
        </>
    );
};

export default HomeLight;
