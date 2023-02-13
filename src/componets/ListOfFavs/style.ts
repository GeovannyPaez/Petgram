import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerPhotoFavs = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3px;
    align-items: center;
`
export const LinkFav = styled(Link)`
   
    min-width: 100px;
    max-width: 120px;
    height: 100px;
    padding: 3px;

    /* height: 200px; */
    
    border-radius: 8px;
    box-shadow: 0px 0px 3px 4px rgba(0,0,0,0.08);
-webkit-box-shadow: 0px 0px 3px 4px rgba(0,0,0,0.08);
-moz-box-shadow: 0px 0px 3px 4px rgba(0,0,0,0.08);
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    
    
`