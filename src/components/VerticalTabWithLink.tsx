import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, Tab, Container, Box } from '@mui/material';
import { appLinks } from '../data/data';

interface TabComponentProps {
    initialTab: number;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Container maxWidth='lg'>
                    {children}
                </Container>
            )}
        </div>
    );
}

export function TabComponent({ initialTab }: TabComponentProps) {
    const [value, setValue] = useState(initialTab);
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        appLinks.map((link, idx) => {
            if (path === link.location) {
                setValue(idx)
            }
        })
    }, [location]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        event.preventDefault()
        setValue(newValue);
        window.history.pushState(null, '', appLinks[newValue].location)
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', justifyContent: 'space-between', minHeight: '80rem' }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs"
                sx={{ borderRight: 1, borderColor: 'divider' }}
                style={{ minWidth: '200px' }}
            >
                {appLinks.map((link, idx) =>
                    link.displayName && <Tab key={idx} label={link.displayName} component={Link} to={link.location} sx={{ alignItems: 'flex-start' }} />
                )}
            </Tabs>
            {
                appLinks.map((link, idx) =>
                    <TabPanel key={idx} value={value} index={idx}>
                        {link.component}
                    </TabPanel>
                )
            }
        </Box>

    );
}
