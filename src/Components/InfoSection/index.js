import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../GlobalStyles';
import { InfoSec, InfoColum , InfoRow, TextWrapper, Heading ,Subtitle  } from './InfoElements';


const InfoSection = ({primary, lightBg, imgStart, LightText, lightTopLine, lightTextDesc, buttonLable, description, headline, TopLine}) => {
  return (
    <>
    <InfoSec lightBg={lightBg}>
        <Container>
            <InfoRow imgStart={imgStart}>
                <InfoColum>
                    <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{TopLine}</TopLine>
                        <Heading lightText={LightText}>{headline}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        <Link to='/sign-up'>
                            <Button big ontBig primary={primary}>
                                {buttonLable}
                            </Button>
                        </Link>
                    </TextWrapper>
                </InfoColum>
            </InfoRow>
        </Container>
    </InfoSec>
    </>
  )
}

export default InfoSection;