import { useState } from 'react';
import { Sidebar, Menu, MenuItem, menuClasses, sidebarClasses } from 'react-pro-sidebar';
import { Header } from './Header';
import { Link } from 'react-router-dom';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export default function SideNav() {
    const [toggled, setToggled] = useState(false);

    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <Sidebar
                onBackdropClick={() => setToggled(false)}
                toggled={toggled}
                breakPoint="always"

                className='sidenav'
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        background: 'linear-gradient(50deg,rgba(254, 233, 233, 0.85) 0%, rgba(222, 246, 255, 0.649) 15%, rgba(222, 246, 255, 0.649) 30%, rgba(255, 249, 224, 0.85) 100%)',
                        backdropFilter: 'blur(9px)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                        width: '250px',
                        transitionDuration: '500ms',
                        opacity: 0.95, // add a bit more transparency,
                    },
                    ['.' + menuClasses.button]: {
                        '&:hover': {
                            background: 'rgba(255, 255, 255, 0.656)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                        },
                    },
                }}
                rtl
            >
                <Menu>
                    <MenuItem icon={<RecordVoiceOverIcon />} component={<Link to="/" />} onClick={() => { setToggled(!toggled) }}>Speaking</MenuItem>
                    <MenuItem icon={<AutoStoriesIcon />} component={<Link to="/readingPractice" />} onClick={() => { setToggled(!toggled) }}>Reading</MenuItem>
                    <MenuItem icon={<VolunteerActivismIcon />} component={<Link to="/sponsor" />} onClick={() => { setToggled(!toggled) }}>Sponsor</MenuItem>
                </Menu>
            </Sidebar >
            <Header isToggled={toggled} setToggled={setToggled} />
        </div >
    );
}