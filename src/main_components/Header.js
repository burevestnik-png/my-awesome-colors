import React from "react";
import {ParallaxBanner, ParallaxProvider} from "react-scroll-parallax/cjs";
import './Header.css';

const Header = () =>
        <ParallaxProvider>
            <ParallaxBanner
                className="header"
                layers={[
                    {
                        image: 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                        amount: 0.4,
                    }
                ]}
                // style={{
                //     margin: '300px auto'
                // }}
            >
                <h1>Yours awesome colors</h1>
            </ParallaxBanner>
        </ParallaxProvider>


export default Header;