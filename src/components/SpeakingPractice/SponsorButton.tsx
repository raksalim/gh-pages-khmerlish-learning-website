import { Button } from '@mui/material';
import React from 'react';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';


export const SponsorButton: React.FC = () => (
    <Button variant='outlined' style={{ textTransform: 'none' }} href="/sponsor">
        <VolunteerActivismIcon style={{ marginRight: '5px' }} />
        Sponsor Khmerlish
    </Button>
)
