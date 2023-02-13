import styled from 'styled-components';
import {NavLink} from 'react-router-dom'
import { animationBlur, keyFrame } from '../../styles/animaftion';
export const Nav= styled.nav`
    position: fixed;
    height: 40px;
    bottom: 0;
    /* min-width: 320px; */
    width: 100%;
    max-width: 500px;
    z-index: 1;
    background: #fcfcfc;
    list-style: none;
    text-decoration: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: grey 1px solid;


`
export const Anchor = styled(NavLink)`
    color: grey;
    position: relative;
    &.active {
        color:black;
        &:after{
            content: '•';
            animation: .3s ${keyFrame} ease;
            position:absolute ;
            transform: translateX(-20.5px);
            font-size: 20px;
            line-height: 40px;
            bottom: -14px;
        }
    }

`