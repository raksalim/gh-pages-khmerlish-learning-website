import styled from 'styled-components';
import tiktokLogo from '/logo/tiktok-logo.webp';
import youtubeLogo from '/logo/youtube-logo.svg';
import khmerlishLogoTransparent from '/logo/Khmerlish logo transparent.png';

const FooterContainer = styled.div`
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
`;

const Flex = styled.div`
  margin: 10px 20px 10px 20px;
  display: flex;
  justify-content: center;
`;

function Footer() {
    const companyName = "khmerlish"
    const date = new Date();
    const year = date.getFullYear();

    return (
        <FooterContainer>
            <Flex>
                <a href="https://www.tiktok.com/@khmerlish" target="_blank" rel="noopener noreferrer">
                    <img
                        src={tiktokLogo}
                        alt="TikTok"
                        style={{ width: '30px' }}
                    />
                </a>
                <a href="https://www.youtube.com/@khmerlish_yt" target="_blank" rel="noopener noreferrer">
                    <img
                        src={youtubeLogo}
                        alt="YouTube"
                        style={{ width: '30px', marginLeft: '10px' }}
                    />
                </a>
                <a href="https://www.khmerlish.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src={khmerlishLogoTransparent}
                        alt="Khmerlish"
                        style={{ width: '30px', marginLeft: '10px' }}
                    />
                </a>
            </Flex>
            <p style={{ fontSize: '14px', marginBottom: '10px' }}>
                {year} © Copyright {companyName} and in using this website you agree to our <a href="https://www.khmerlish.com/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>.
            </p>
        </FooterContainer >
    )
}

export default Footer