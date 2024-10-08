import Link from "next/link";
import Head from "next/head";
import Script from 'next/script';
import Layout from "../../components/layout";

const FirstPost = () => {
    const outputScriptLoadMessage = () => {
        console.log(`script loaded correctly, window.FB has been populated`)
    }
    // return <h1>First Post.</h1>
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={outputScriptLoadMessage()}
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    )
}

export default FirstPost;