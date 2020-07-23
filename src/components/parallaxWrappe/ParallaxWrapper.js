import React from "react";
import {ParallaxBanner, ParallaxProvider} from "react-scroll-parallax/cjs";
import './ParallaxWrapper.css';

const ParallaxWrapper = () =>
        <ParallaxProvider>
            <ParallaxBanner
                className="header"
                layers={[
                    {
                        image: 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                        amount: 0.4,
                    }
                ]}
                style={{
                    transition: '1s',
                    height: '100vh'
                }}
            >
                <h1>Your most liked colors <br/> in one place</h1>
            </ParallaxBanner>
        </ParallaxProvider>


export default ParallaxWrapper;