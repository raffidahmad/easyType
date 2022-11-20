import React from 'react'
import styled from 'styled-components'
import img1 from "./../../assets/Rectangle 43.svg"
import img2 from "./../../assets/Rectangle 46.svg"
export default function Social({isMobile}) {

    const SocialContainer=styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    margin-top:5rem;
    gap:${isMobile?'1rem':"0.7rem"}
    `

    return (
    <SocialContainer>
      <img src={img1} width={isMobile?"90%":'20%'}   alt="" />
      <img src={img2} width={isMobile?"90%":'20%'}  alt="" />
      <img src={img1} width={isMobile?"90%":'20%'}  alt="" />
      <img src={img2} width={isMobile?"90%":'20%'} alt="" />
    </SocialContainer>
  )
}