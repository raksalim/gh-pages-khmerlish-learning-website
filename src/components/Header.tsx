import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Button } from '@mui/material';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20px 10px 10px 20px;
    color: #eea333;
    font-size: 30px;
    width: 100%;
`;

export function Header({ isToggled, setToggled }: { isToggled?: boolean; setToggled: (toggled: boolean) => void }) {
    const companyName = "khmerlish"
    return (
        <HeaderContainer>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}>
                <img src={`${import.meta.env.BASE_URL}logo/Khmerlish_Transparent.png`} alt="Khmerlish Logo" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                <span
                    style={{ cursor: 'pointer', marginTop: '7px', marginLeft: '-7px' }}
                    className='hanuman-title'

                > {companyName}
                </span>
            </Link>
            <Button onClick={() => setToggled(!isToggled)}>
                <DensityMediumIcon style={{ color: 'rgba( 238, 162, 51, 100%)' }} />
            </Button>
        </HeaderContainer>
    )
}