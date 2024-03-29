import React, {useState, useEffect} from 'react';
import Memory from "../components/Memory";
import {useDispatch, useSelector} from "react-redux";
import {fetchMemories} from '../actions/memoryActions'
import {Spinner, Row, Col} from "react-bootstrap";

const HomeScreen = () => {

    const dispatch = useDispatch()
    const memories = useSelector((state) => state.memories)

    useEffect(() => {
        //Memories bos ise fetchMemories()
        if (!memories[0]){
            dispatch(fetchMemories())
        }
    }, [dispatch])



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