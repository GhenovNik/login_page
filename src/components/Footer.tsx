import styled from 'styled-components';


const StyledFooter = styled.footer`
  width: 100%;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(32, 58, 96);;
  text-align: center;
  color: white;
`;

const Footer = () => (
    <StyledFooter id='footer'>
        <p className='p--white'>
            © {(new Date()).getUTCFullYear()} Rock Paper Coin
        </p>
    </StyledFooter>
);

export default Footer;