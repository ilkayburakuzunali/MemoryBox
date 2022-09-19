import React from 'react';
import UpdateMemory from "../components/UpdateMemory";
import {Container} from "react-bootstrap";

import {useParams} from "react-router-dom";

const UpdateScreen = () => {

    const {id} = useParams()

    return (
        <>
        <Container>
            <UpdateMemory id={id}>

            </UpdateMemory>
        </Container>
        </>
    )
}
export default UpdateScreen;