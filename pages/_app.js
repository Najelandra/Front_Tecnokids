import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import "../styles/styles.css"
import 'react-html5-camera-photo/build/css/index.css';
import Head from 'next/head'

import React from 'react';

function MyApp({Component, pageProps}) {
    return (
        <div>
            <Head>
                <title>
                    Tecnokids
                </title>
                <meta name="description" content="Tecnokids"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps}/>
        </div>
    )
}

export default MyApp
