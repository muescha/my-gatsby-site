import * as React from "react";

interface GreetingProps {
    name: string
}

const Greeting = (props: GreetingProps) => {
    return (
        <p>Hi {props.name}</p>
    )
}

export default Greeting
