import React from 'react'
import styled from 'styled-components'
import magicTrick from "./../../assets/magic trick.svg"
import clock from "./../../assets/clock.svg"
import mainIdea from "./../../assets/main idea.svg"
import writeReview from "./../../assets/write review.svg"
import originalContent from "./../../assets/original content.svg"
import moneyBack from "./../../assets/money back guarantee.svg"
export default function Features({isMobile}) {

    const FeatureContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:${isMobile?"0":"10rem"};
    flex-wrap:wrap;
    gap:1rem;
    `
    const LogoContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:cetner;
    gap:${isMobile?'15px':'31px'};
    width:${isMobile?'':'40%'};
    padding:${isMobile?'20px':''};
    `
    const Logo = styled.div`
   border-radius:9999px;
   border:2px solid black;
   width:fit-content;   
   display:flex;
   padding:15px;
   align-items:center;
   justify-content:center;
  `
    const BlueText = styled.mark`
    background-color:inherit;
    color:#568AB6;
    `
    const GreenText = styled.mark`
    background-color:inherit;
    color:#6EAE8D;
    `

    const GoldenText = styled.mark`
    background-color:inherit;
    color:#EACA6A;
    `
    const BoldText = styled.mark`
    background-color:inherit;
    font-weight:bold;
    `

    const StyledP=styled.p`
    font-size:${isMobile?'12px':''};
    `

    const items = [
        {
            icon: magicTrick,
            text: (<StyledP  ><BoldText>It’s</BoldText> <BlueText>no magic, just AI</BlueText><BoldText> and loads of hard work.</BoldText><br /> EasyWrite will always produce 100% unique copy. </StyledP>),
        },
        {
            icon: clock,
            text: (<StyledP  ><GreenText>Write an essay in seconds.</GreenText> No more endless hours<br /> at the library studying and reseraching.  </StyledP>)
        },
        {
            icon:mainIdea,
            text:(<StyledP>Use easywrite as a <GoldenText>source of inspiration</GoldenText> or to<br/> learn about new topics. The potential is limitless.</StyledP>)
        },
        {
            icon:writeReview,
            text:(<StyledP><BlueText>Have fun!</BlueText> Write in a word, generate a story,<br/> your imagination is the limit.</StyledP>)
        },
        {
            icon:moneyBack,
            text:<StyledP>Easywrite is  <GreenText>100% free to use</GreenText> and made for <br/>everyone. So go go go spread the news.</StyledP>
        },
        {
            icon:originalContent,
            text:(<StyledP>EasyWrite generates <GoldenText>100% unique copy.</GoldenText> Every<br/> piece of copy it produces is absolutely original.</StyledP>)
        }
    ];

    return (
        <FeatureContainer>
            {
                items.map(
                    (item, index) => {
                      return <LogoContainer key={index}>
                            <Logo>
                                <img src={item.icon} width="100%" height='100%' />
                            </Logo>
                            {item.text}
                        </LogoContainer>
                    }
                )
            }
        </FeatureContainer>
    )
}