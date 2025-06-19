import React from "react";
import PickerButtonScreenshot from '/logo/PickerButtonScreenshot.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VolumeMuteRoundedIcon from '@mui/icons-material/VolumeMuteRounded';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';

export const Tutorial: React.FC = () => {
    const isMobile = window.matchMedia('(max-width: 800px)').matches;

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}></div>
            <div style={{ width: '100%', height: isMobile ? '50vh' : '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                    src={PickerButtonScreenshot}
                    alt="Slider Screenshot"
                    style={{
                        width: isMobile ? '30%' : '15%',
                        borderRadius: 12,
                        boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
                        marginRight: '20px'
                    }}
                />
                <div>
                    <p className="hanuman-paragraph">Choose word(s)</p>
                    <p className="hanuman-paragraph">Click around!</p>
                    <p className="hanuman-paragraph">(you got this!)</p>
                </div>
            </div>
            <div style={{ textAlign: "center", fontSize: "14px" }}>
                <VolumeMuteRoundedIcon />
                <VolumeDownRoundedIcon />
                <VolumeUpRoundedIcon />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <KeyboardArrowDownIcon />
            </div>
        </>
    );
};