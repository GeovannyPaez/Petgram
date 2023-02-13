import styled from "styled-components";
import { animationBlur,keyFrame } from "../../styles/animaftion";


export const ImgWrapper=  styled.div`

border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;

`
export const Img = styled.img`
    animation: .7s ${keyFrame} ease-in-out;
    box-shadow: 0 10px 14px rgba( 0, 0, 0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top:0;
    width: 100%;
    /* padding: 8px; */
    border-radius: 20px;
`

export const Button =styled.button`
    margin-top: 4px;
    background-color: white;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;

`
export const  Article = styled.article`
    min-height: 200px;
    padding: 10px;
`