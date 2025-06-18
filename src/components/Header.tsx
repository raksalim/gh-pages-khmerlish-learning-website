import styled from 'styled-components';
import khmerlishLogo from '/logo/Khmerlish_Transparent.png';

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
    const companyName = "ខ្មែរlish"

    return (
        <HeaderContainer>
            <span
                style={{ cursor: 'pointer' }}
                onClick={() => window.location.href = '/'}
                className='hanuman-title'
            > {companyName}
            </span>
            <img
                src={khmerlishLogo}
                alt="Khmerlish Logo"
                style={{ width: '50px', height: '50px', margin: '10px' }}
                onClick={() => setToggled(!isToggled)}
            />
        </HeaderContainer>
    )
}