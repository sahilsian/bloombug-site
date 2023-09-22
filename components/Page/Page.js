import { MainMenu } from '../MainMenu'
import { BlockRenderer } from "../BlockRenderer"
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react';
import { ParallaxProvider } from 'react-scroll-parallax';

export const Page = (props) => {
    const router = useRouter()
    return (
        <div className={`font-heading`}>
            <Head>
                <title>{props.seo.title}</title>
                <meta name='description' content={props.seo.metaDesc}></meta>
            </Head>
            <MainMenu items={props.mainMenuItems} callToActionLabel={props.callToActionLabel} callToActionDestination={props.callToActionDestination}></MainMenu>
            <Analytics></Analytics>
            <ParallaxProvider>
            <BlockRenderer items={props.mainMenuItems} blocks={props.blocks}></BlockRenderer>
            </ParallaxProvider>
         
        </div>
    )
}