import styled from "styled-components";

export const Form = styled.form` 
    padding: 16px;
`
export const H2 = styled.h2`
    text-align:  center;
    color:  #8d00ff;
    padding: 6px;
`
export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 8px;
    padding: 8px 4px;
    display: block;
    width: 100%;
    &[disabled]{
        opacity: .4;
    }
`

export const Button = styled.button` 
    background: #8d00ff;
    border-radius: 3px;
    color: #fff;
    height: 32px;
    display: block;
    width: 100%;
    text-align:  center;
    &[disabled]{
        opacity: .4;
    }
`
export const Span = styled.span`
    color:  red ;
    text-align: center;
    display: block;
`