import React from 'react'
import styled from 'styled-components'
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import EmailIcon from '@mui/icons-material/Email';
// import HomeIcon from '@mui/icons-material/Home';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';


const Footer = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <FooterItem>
                    <h1>EasyWeb.</h1>
                    <ContactItem>
                        <span><HomeOutlinedIcon /></span>
                        <span>Montreal,Quebce,Canada</span>
                    </ContactItem>
                    <ContactItem>
                        <span><PhoneOutlinedIcon /></span>
                        <span>514-555-****</span>
                    </ContactItem>
                    <ContactItem>
                        <span><EmailOutlinedIcon /></span>
                        <span>evan**@gmail.com</span>
                    </ContactItem>
                </FooterItem>
                <FooterItem>
                    <h3>Finding</h3>
                    <p>find clothes</p>
                    <p>find computers</p>
                    <p>find watches</p>
                </FooterItem>
                <FooterItem>
                    <h3>Information</h3>
                    <p>About US</p>
                    <p>Delivery information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Copndition</p>
                </FooterItem>
                <FooterItem>
                    <h3>Follow me</h3>
                    <div>
                        <FacebookIcon />
                        <TwitterIcon />
                        <LinkedInIcon />
                        <InstagramIcon />
                    </div>
                    <div>
                        <h3>Newsletter</h3>
                        <form>
                            <input type="email" name="email" placeholder="Your email..." />
                        </form>
                    </div>
                </FooterItem>
            </FooterContainer>
        </FooterSection>
    )
}

export default Footer

const FooterSection = styled.footer `
    /* position: fixed;
    bottom:0; */
    width: 100%;
    background-color: #F5F5F5;
    margin-top:30px;
    padding:30px 0;
    
    h3{
        margin-bottom: 15px;
    }
    form{
        input{
            padding:7px;
        }
    }
`

const FooterContainer = styled.div `
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    align-items: start;
    max-width: 1200px;
    width:90%;
    margin:auto;

    @media screen and (min-width: 900px) {
        grid-template-columns: repeat(4, 1fr);
    }
    
`
const FooterItem = styled.div `

    
`
const ContactItem = styled.p `
    display:flex;
    align-items: center;
    
`


