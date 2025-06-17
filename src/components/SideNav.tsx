import { useState } from 'react';
import { Sidebar, Menu, MenuItem, menuClasses, sidebarClasses } from 'react-pro-sidebar';
import { Header } from './Header';
import { Link } from 'react-router-dom';
import LoginAmplifyAuth from '@/pages/LoginAmplifyAuth';

type SideNavProps = {
    userEmail?: string | boolean;
};
export default function SideNav({ userEmail }: SideNavProps) {
    const [toggled, setToggled] = useState(false);
    const isMobile = window.matchMedia('(max-width: 800px)').matches;

    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <Sidebar
                onBackdropClick={() => setToggled(false)}
                toggled={toggled}
                breakPoint="always"
                rtl
                className='sidenav'
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        background: 'rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(9px)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                        width: isMobile
                            ? '100%'
                            : (!userEmail && toggled)
                                ? '500px'
                                : userEmail
                                    ? '250px'
                                    : '250px',
                        transition: 'width .5s ease-in-out',
                    },
                    ['.' + menuClasses.button]: {
                        '&:hover': {
                            background: 'rgba(255, 255, 255, 0.3)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                        },
                    },
                }}
            >
                <Menu>
                    <MenuItem disabled style={{ color: '#939292' }}>{userEmail}</MenuItem>
                    <MenuItem component={<Link to="/" />} onClick={() => { setToggled(!toggled) }}>Home</MenuItem>
                    <MenuItem component={<Link to="/speakingPractice" />} onClick={() => { setToggled(!toggled) }}>Speaking</MenuItem>
                    <MenuItem component={<Link to="/" />} onClick={() => { setToggled(!toggled) }}>Reading</MenuItem>
                    {/* <MenuItem component={<Link to="/documentation" />} onClick={() => { setToggled(!toggled) }}>Entertainment</MenuItem> */}
                    {userEmail
                        ?
                        <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                            <MenuItem component={<Link to="/login" />} onClick={() => { setToggled(!toggled) }}>
                                Sign Out
                            </MenuItem>
                        </div>
                        :
                        <LoginAmplifyAuth isNested />
                    }
                </Menu>
            </Sidebar >
            <Header isToggled={toggled} setToggled={setToggled} />
        </div >
    );
}