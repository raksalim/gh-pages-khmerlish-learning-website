import styled from 'styled-components';

const FooterContainer = styled.div`
  padding: 40px 20px 40px 20px;
  font-size: 12px;
  text-align: center;
`;

function Footer() {
    const companyName = "khmerlish"
    const date = new Date();
    const year = date.getFullYear();

    return (
        <FooterContainer>
            {year} © Copyright {companyName}
        </FooterContainer>
    )
}

export default Footer