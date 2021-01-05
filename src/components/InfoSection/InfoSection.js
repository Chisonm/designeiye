import React from 'react'
import { Link } from "react-router-dom";
import { Button, Container } from '../../globalStyles'
import {InfoSec,InfoColumn,InfoRow,TextWrapper,Headline,Subtitle,TopLine,ImgWrapper,Img} from "./InfoSection.elements";


const InfoSection = ({start,img,alt,lightBg,imgStart,lightText,lightTextDesc,lightTopLine,headline,buttonLabel,descripion,topLine,primary}) => {
    return (
        <>
           <InfoSec lightBg={lightBg}>
              <Container>
                  <InfoRow imgStart={imgStart}>
                      <InfoColumn>
                          <TextWrapper>
                               <TopLine lightTopLine={lightTopLine}>
                                    {topLine}
                               </TopLine>
                               <Headline lightText={lightText}>
                                    {headline}
                               </Headline>
                               <Subtitle lightTextDesc={lightTextDesc}>
                                    {descripion}
                               </Subtitle>
                               <Link to="/sign-up">
                                   <Button big fontBig primary={primary}>
                                       {buttonLabel}
                                   </Button>
                               </Link>
                          </TextWrapper>
                      </InfoColumn>
                      <InfoColumn>
                          <ImgWrapper start={start}>
                              <Img src={img} alt={alt}/>
                          </ImgWrapper>
                      </InfoColumn>
                  </InfoRow>
              </Container>
           </InfoSec> 
        </>
    )
}

export default InfoSection
