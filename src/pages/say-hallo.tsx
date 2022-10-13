import * as React from "react";
import type { HeadFC } from "gatsby"
import { Greeting } from "../components/greeting"

const SayHelloPage = () => {
    return (
        <main>
            <Greeting name={"abc"}></Greeting>
            <Greeting name={"def"}></Greeting>
        </main>
    );
};

export default SayHelloPage;

export const Head: HeadFC  = () => <>
    <title>Say Hello Page</title>
    <meta name="description" content="It's me
    " />
</>