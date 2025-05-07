import styled from 'styled-components';
import khmerlishLogo from '/logo/Khmerlish_Transparent.png';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  padding: 40px 20px 40px 20px;
  color: #eea333;
  font-size: 30px;
`;

function Header() {
    const companyName = "ខ្មែរlish"

    return (
        <HeaderContainer>
            {companyName}
            <img
                src={khmerlishLogo}
                alt="Khmerlish Logo"
                style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        </HeaderContainer>
    )
}

export default Header