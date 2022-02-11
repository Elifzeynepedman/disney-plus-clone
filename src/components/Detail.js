import React from 'react'
import styled from 'styled-components'
function Detail() {
  return (
    <Container>
      <Background>
          <img src='https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg'></img>
      </Background>
      <Logo>
          <img src='/images/bao-img.png'/>
      </Logo>
      <Controls>
        <PlayBtn>
          <img src='/images/play-icon-black.png'/>
          <span>PLAY</span>

        </PlayBtn>
        <TrailerBtn>
          <img src='/images/play-icon-white.png'/>
          <span>TRAILER</span>
        </TrailerBtn>
        <AddBtn>
          <span>+</span>
        </AddBtn>
        <GroupWatchBtn>
            <img src='/images/group-icon.png'/>
        </GroupWatchBtn>
      </Controls>
      <SubTitle>
          2018 • 7m • Family, Fantasy, Kids, Animation
      </SubTitle>
      <Description>
      A Chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays and smalll forever.
     </Description>
     </Container>
  )
}
const Container=styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position:relative;
overflow:hidden;

`

const Logo=styled.div`
margin-top:-200px;
margin-left:-250px;
margin-bottom:-550px;


`
const Background=styled.div`
   position:fixed;
   top:0;
   left:0;
   bottom:0;
   right:0;
   z-index:-1;
   opacity:0.8;

   img{
       width:100%;
       height:100%;
       object-fit:cover;

   }
`

const Controls=styled.div`
   margin-top:290px;
   display:flex;
`

const PlayBtn=styled.button`
    font-size:10px;
    display:flex;
    align-items:center;
    margin-right:16px;
    border:none;
    padding:0 24px;
    height:46px;
    border-radius:4px;
    background-color:rgb(249,249,249);
    letter-spacing:1.8px;
    cursor:pointer;

    &:hover{
        background:rgb(198,198,198);
    }
   

`
const TrailerBtn=styled(PlayBtn)`
    background:rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    margin-right:16px;
 
`
const AddBtn=styled.button`
    border-radius:50%;
    width: 42px;
    height: 42px;
    background:rgba(0,0,0,0.6);
    border: 3px solid rgb(249,249,249);
    font-size:25px;
    margin-right:16px;
    color:rgb(249,249,249);
    &:hover{
        background:rgb(198,198,198);
    }

`
const GroupWatchBtn=styled.div`
border-radius:50%;
width: 42px;
height: 42px;
background:rgba(0,0,0);
border: 3px solid rgb(249,249,249);
margin-right:10px;
color:rgb(249,249,249);
display:flex;
justify-content:center;
`

const SubTitle=styled.div`
   margin-top:26px;
   color:rgb(249,249,249);
   font-size:15px;
   min-height:20px;
   

`

const Description=styled.div`
   margin-top:16px;
   color:rgb(249,249,249);
   font-size:20px;
   line-height:1.4;
   max-width:700px;
`

export default Detail
