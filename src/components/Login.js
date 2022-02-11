import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
            <CTA>
                <CTALogo src="/images/cta-logo-one.svg" />
                <SignUp>
                 GET ALL THREE
                </SignUp>
                <Description>
                  Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
                           As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />

            </CTA>
            
    </Container>
  )
}

const Container=styled.div`
    position:relative;  
    height:calc(100vh - 70px);
    display:flex;
    align-items:center;
    justify-content:center;
    &:before{
        background-position:top;
        background-size:cover;
        background-image:url("/images/login-background.jpg");
        background-repeat:no-repeat;
        position:absolute;
        content:"";
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
    }

`


const CTA=styled.div`
    max-width:650px;
    paddimg: 80px 40px;
    width:70%;
    dislplay:flex;
`
const CTALogo=styled.img`
   

`

const SignUp=styled.button`
 display:flex;
 background:rgb(17, 60, 207);
 color:white;
 border:none;
 border-radius:4px;
 width:100%; 
 padding:17px 0;
 align-items:center;
 justify-content:center;
 cursor:pointer;
 transition: all 250ms; 
 letter-spacing:1.5px;
 font-weight: bold;
 font-size:18px;
 &:hover{
   background:#0483ee;
 }

`


const Description=styled.div`
   margin-top:16px;
   color:rgb(249,249,249);
   font-size:15px;
   line-height:1.4;
   text-align:center;

`
const CTALogoTwo=styled.img`
  width:100%;
  margin-top:30px;
`
export default Login
