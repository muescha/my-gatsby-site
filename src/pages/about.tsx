import * as React from "react";
import type { HeadFC } from "gatsby"
import Layout from "../components/layout";

const AboutPage = () => {
    return (
        <Layout pageTitle={"About Page"}>
            <p>Hi there - i am here.</p>
        </Layout>
    );
};
export default AboutPage;

export const Head: HeadFC  = () => <>
    <title>About Me Page</title>
    <meta name="description" content="It's me
    " />
</>