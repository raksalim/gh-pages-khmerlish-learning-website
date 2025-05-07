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
            <div>
                {year} © Copyright {companyName}
            </div>
            <div>
                <a href="https://www.tiktok.com/@khmerlish" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/public/logo/tiktok-logo.webp"
                        alt="TikTok"
                        style={{ width: '30px', height: '30px', marginLeft: '10px' }}
                    />
                </a>
                <a href="https://www.youtube.com/@khmerlish_yt" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/public/logo/youtube-logo.svg"
                        alt="TikTok"
                        style={{ width: '30px', height: '30px', marginLeft: '10px' }}
                    />
                </a>
                <a href="https://www.khmerlish.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/public/logo/Khmerlish logo transparent.png"
                        alt="TikTok"
                        style={{ width: '30px', height: '30px', marginLeft: '10px' }}
                    />
                </a>
            </div>
        </FooterContainer>
    )
}

export default Footer