import React, { Component } from 'react';
import styled from 'styled-components'
import fitso from '../assets/fitso.png'
import fitso1 from '../assets/fitso1.jpg'
import fitso2 from '../assets/fitso2.png'
import fitsoo from '../assets/fitsoo.png'

class CardImage extends Component {
    render() {
        return (
            <ParentDiv>
                <Title>
                    <img src={fitsoo} />
                </Title>

                <HalfDivv>
                <TextDiv>
                    Avail 10 days unlimited sports sessions worth 
                </TextDiv>

                <PriceDiv>
                    <Text>
                        300
                    </Text>
                    <Textt>
                        3000
                    </Textt>
                    <Texttt>
                        45% off
                    </Texttt>
                </PriceDiv>
                </HalfDivv>

            </ParentDiv>
        );
    }
}

export default CardImage;

const ParentDiv = styled.div`
    margin: 24px;
    display: flex;
    flex-direction: column;
    height: 260px;
    width: 212px;
    background-color: #326a68;
    border-radius: 8px;
    background-image: url(${fitso});
    background-repeat: no-repeat;
    background-size: 204px 152px;

   
`

const HalfDivv = styled.div`
    margin-top: 85px;
    opacity: 0.53;
    border-radius: 5px;
    background-color: rgba(216, 216, 216, 0.54);
`

const Title = styled.div`
    text-align: left;
    margin-left: 10px;

    & img {
        margin-top: 14px;
        width: 66px;
        height: 15px;
    }
`

const TextDiv = styled.div`
    display: flex;
    font-family: OpenSans;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #ffffff;
    text-align: left;
    margin-top: 40px;
    margin-left: 12px;
`

const PriceDiv = styled.div`
    display: flex;
    flex-direcion: row;
    align-items: center;
`

const Text = styled.p`
    font-family: OpenSans;
    font-size: 20px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.67px;
    color: #ffffff;
    padding-left: 12px;
    padding-right: 12px;
`

const Textt = styled.p`
    font-family: OpenSans;
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.17px;
    color: #e8e8e8;
    padding-left: 12px;
    padding-right: 12px;
`

const Texttt = styled.p`
    font-family: OpenSans;
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.17px;
    color: #ffffff;
    padding-left: 12px;
    padding-right: 12px;
`