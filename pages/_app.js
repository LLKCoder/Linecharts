import React from 'react'
import Head from 'next/head'
import App from 'next/app'
import 'antd/dist/antd.css'

class MyApp extends App {
    render () {
        const  { Component, pageProps } = this.props
        return (
            <div>
                <Head>
                    <meta httpEquiv='X-UA-Compati' content="IE=edge"></meta>
                    <meta httpEquiv='content-language' content="ja"></meta>
                    <title>LineCharts</title>
                    <link rel="icon" type="imgae/x-icon"></link>
                </Head>
                <Component {...pageProps} />
            </div>
        )
    }
}

export default MyApp