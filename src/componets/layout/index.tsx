import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { Div, Subtitle, Title } from './style';
interface PropsLayout {
    children: React.ReactElement;
    title: string,
    subtitle: string,
    show?: {
        title?: boolean,
        subTitle?: boolean
    }
}
export const Layout: FC<PropsLayout> = ({ title, subtitle, show={title:false,subTitle:false}, children }) => {
    return (
        <>
            <Helmet>
                <title>{title} | Petgram</title>
                <meta name='description' content={subtitle} />
            </Helmet>
            <Div>
                {show?.title && <Title>{title}</Title>}
                {show?.subTitle && <Subtitle>{subtitle}</Subtitle>}
                {children}
            </Div>
        </>
    )
}
