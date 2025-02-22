import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding: 40px 20px 40px 20px;
  color: #FFA51F;
  font-size: 30px;
`;

function Header() {
    const companyName = "khmerlish"

    return (
        <HeaderContainer>
            {companyName}
        </HeaderContainer>
    )
}

export default Header