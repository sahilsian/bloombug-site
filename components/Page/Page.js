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
                <link rel="icon" type="image/x-icon" href="/favicon/favicon.png"></link>
                <title>{props.seo.title}</title>
                <meta name='description' content={props.seo.metaDesc}></meta>
                
                <meta property="og:url" content={`${router.asPath}`}></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content={props.seo.title}></meta>
                <meta property="og:description" content={props.seo.metaDesc}
                ></meta>
                <meta property="og:image" content={props.seo.opengraphImage.uri || ""}></meta>

                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta property="twitter:domain" content="bloombug.ca"></meta>
                <meta property="twitter:url" content={`${router.asPath}`}></meta>
                <meta name="twitter:title" content={props.seo.metaDesc}></meta>
                <meta name="twitter:description" content={props.seo.metaDesc}></meta>
                <meta name="twitter:image" content={props.seo.opengraphImage.uri || ""}></meta>
            </Head>
            <MainMenu items={props.mainMenuItems} callToActionLabel={props.callToActionLabel} callToActionDestination={props.callToActionDestination}></MainMenu>
            <Analytics></Analytics>
            <ParallaxProvider>
            <BlockRenderer items={props.mainMenuItems} blocks={props.blocks}></BlockRenderer>
            </ParallaxProvider>
         
        </div>
    )
}