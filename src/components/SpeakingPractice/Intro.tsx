import React from "react";
import SliderScreenshot from '/logo/SliderScreenshot.png';

export const Intro: React.FC = () => {
    const isMobile = window.matchMedia('(max-width: 800px)').matches;

    return (
        <div style={{ width: '100%', height: isMobile ? '50vh' : '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h3 className="hanuman-title">Speaking Practice</h3>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', height: 'auto', marginTop: 'auto' }}>
                <img
                    src="/logo/Khmerlish_Transparent.png"
                    alt="Khmerlish Logo"
                    style={{ width: isMobile ? '50%' : '15%' }}
                />
            </div>
            <p className="hanuman-paragraph">Lets get started!</p>
            <p className="hanuman-paragraph">Side to move through levels</p>
            <img
                src={SliderScreenshot}
                alt="Slider Screenshot"
                style={{
                    width: isMobile ? '70%' : '20%',
                    borderRadius: 12,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.15)',

                }}
            />
        </div>
    );
};