import React from 'react';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const Sponsor: React.FC = () => {
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <h2 className='hanuman-title' style={{ textAlign: 'center' }}>Sponsor Khmerlish <VolunteerActivismIcon /></h2>
            <h3 className='hanuman-body' style={{ textAlign: 'center' }}>Thank you for considering sponsoring our project!</h3>
            <h4 className='hanuman-body' style={{ textAlign: 'center' }}>(Refresh if you don't see a PayPal link)</h4>
            <div style={{ minWidth: '80vw', margin: 'auto' }}>
                <div id="paypal-container-TV2K9L7JSS5FA"></div>
            </div>
        </div>
    );
};

export default Sponsor;