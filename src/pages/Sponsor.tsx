import PayPalButton from '../components/PayPalButton';
import React from 'react';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Button } from '@mui/material';

const Sponsor: React.FC = () => {
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <h2 className='hanuman-title' style={{ textAlign: 'center' }}>Sponsor Khmerlish <VolunteerActivismIcon /></h2>
            <h3 className='hanuman-body' style={{ textAlign: 'center' }}>Thank you for your consideration!</h3>
            <div style={{ minWidth: '80vw', margin: 'auto' }}>
                <PayPalButton />
            </div>
            <h4 className='hanuman-body' style={{ textAlign: 'center' }}>(Refresh or use{' '}
                <Button
                    variant='outlined'
                    color='warning'
                    component="a"
                    href="https://www.khmerlish.com/#:~:text=or-,Every%20bit%20helps!,-BUT%20ONLY%20TIP"
                    target="_blank"
                    rel="noopener noreferrer"
                    size='small'
                >
                    <span>Squarespace</span>
                </Button> if PayPal link is not showing)</h4>
        </div >
    );
};

export default Sponsor;