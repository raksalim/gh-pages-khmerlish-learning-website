import React from 'react';

type SponsorKhmerlishButtonProps = {
    isShowing: boolean;
}

const SponsorKhmerlishButton: React.FC<SponsorKhmerlishButtonProps> = ({ isShowing }) => {
    return (
        <>
            <div style={{
                opacity: isShowing ? 1 : 0,
                height: isShowing ? 'auto' : 0,
                overflow: 'hidden',
                transition: 'opacity 0.8s, width 0.5s',
                width: '100%',
            }}>
                <div id="paypal-container-TV2K9L7JSS5FA"><br /></div>
            </div>
        </>
    )
};

export default SponsorKhmerlishButton;