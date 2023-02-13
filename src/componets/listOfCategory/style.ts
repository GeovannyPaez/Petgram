import styled, { css } from "styled-components";
import { IListRender } from ".";
import { animationBlur, keyFrame, skeletonStyle } from "../../styles/animaftion";

export const List = styled.ul<IListRender>`
    display: flex;
    width: 100%;
    overflow: scroll;
    list-style: none;
    ::-webkit-scrollbar {// elimina la barra de scroll
    display: none;
    }
    ${props => props.fixed && css`{
      animation: .3s ${keyFrame} ease-in;
      position: fixed;
      left: 0;
      right: 0;
      margin: 0 auto;
      border-radius: 60px;
      max-width: 400px;
      z-index: 1;
      background-color: lightgrey;
      top: 0px;
      padding: 5px;
      transform: scale(.5);
    
    }
    `}
`

export const ItemList = styled.li`
 
 padding: 0 8px;

`


export const ContainerCategorySkeleton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CategoryImage = styled.div<{light:boolean}>`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    ${
        props => css`
            ${skeletonStyle(props.light)}
        `
    }
`;

export const CategoryTitle = styled.div<{light:boolean}>`
    width: 26px;
    height: 15px;
    margin-top: 8px;
    ${
        props => css`
            ${skeletonStyle(props.light)}
        `
    }
`;
