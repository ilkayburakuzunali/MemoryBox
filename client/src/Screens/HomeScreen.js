import React, {useState, useEffect} from 'react';
import Memory from "../components/Memory";
import {fetchMemories} from "../axios/index.js";
import {Spinner, Row, Col} from "react-bootstrap";

const HomeScreen = () => {

    const [memories, setMemories] = useState([])

    useEffect(() => {
        const getMemories = async () => {
            const {data} = await fetchMemories()
            console.log(data)
            setMemories(data)
        }
        getMemories()
    }, [])

    return (
        <>
            <h1>Güncel Anılar</h1>
            {!memories.length ? <Spinner animation='border'></Spinner> :
                <Row>
                    {
                        memories.map((memory) => (
                        <Col
                        sm={12}
                        md={6}
                        lg={4}
                        xl={3}
                        className='m-auto'
                        key={memory._id}>
                            <Memory memory={memory}></Memory>

                        </Col>
                        ))
                    }
                </Row>
            }
        </>
    )
}

export default HomeScreen;