import * as React from "react";

interface GreetingProps {
    name: string
}

export const Greeting = (props: GreetingProps) => {
    return (
        <p>Hi {props.name}</p>
    )
};