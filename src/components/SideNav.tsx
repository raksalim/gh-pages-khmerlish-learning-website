import { Button } from "@mui/material";
import React from "react";
import styled from 'styled-components';
import Home from "../pages/Home";
import { appLinks } from "../App";

const SideNavContainer = styled.div`
    height: 80vh;
    min-width: 200px;
    color: #FFA51F;
    font-size: 30px;
    padding: 10px 20px 40px 20px;
    display: flex;
    align-items: start;
    flex-flow: column wrap;
`;

function SideNav() {

    return (
        <SideNavContainer>
            {appLinks.map((link) =>
                    <Button href={link.location}>{link.displayName}</Button>
            )}
        </SideNavContainer>
    )
}

export default SideNav