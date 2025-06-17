import { useState } from 'react';
import { Sidebar, Menu, MenuItem, menuClasses, sidebarClasses } from 'react-pro-sidebar';
import { Header } from './Header';
import { Link } from 'react-router-dom';
import LoginAmplifyAuth from '@/pages/LoginAmplifyAuth';

type SideNavProps = {
    userEmail: string | boolean;
    setUserEmail: (email: string | boolean) => void;
};
export default function SideNav({ userEmail, setUserEmail }: SideNavProps) {
    const [toggled, setToggled] = useState(false);
    const isMobile = window.matchMedia('(max-width: 800px)').matches;

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
                        width: isMobile
                            ? (!userEmail && toggled) ? '130%' : '250px'
                            : (!userEmail && toggled)
                                ? '500px'
                                : userEmail
                                    ? '250px'
                                    : '250px',
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
                            <LoginAmplifyAuth isNested userEmail={userEmail} setUserEmail={setUserEmail} />
                    }
                </Menu>
            </Sidebar >
            <Header isToggled={toggled} setToggled={setToggled} />
        </div >
    );
}