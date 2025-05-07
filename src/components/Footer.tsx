import styled from 'styled-components';
import khmerlishLogo from '../../public/logo/Khmerlish_Transparent.png';
import tiktokLogo from '../../public/logo/tiktok-logo.webp';
import youtubeLogo from '../../public/logo/youtube-logo.svg';
import khmerlishLogoTransparent from '../../public/logo/Khmerlish logo transparent.png';

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
            <div>
                {year} © Copyright {companyName}
            </div>
            <div>
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
            </div>
        </FooterContainer>
    )
}

export default Footer