import React from "react";
import { Title } from "./styles";

const Typography = (props) => {
    const {children} = props;
    return(
        <>
            <Title>
                {children}
            </Title>
        </>
    )
}

export default Typography;