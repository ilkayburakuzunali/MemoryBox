import React, {useEffect, useState} from 'react';
import ReactFileBase64 from 'react-file-base64'
import {Form, Button} from 'react-bootstrap'
import {useNavigate} from "react-router-dom";
import {fetchMemory} from "../axios/index.js";
import {updateMemory} from "../actions/memoryActions";
import {useDispatch} from "react-redux";

const UpdateMemory = ({id}) => {
    const dispatch = useDispatch()
    const [memoryData, setMemoryData] = useState({
        title: '',
        content: '',
        creator: '',
        image: '',
    })

    useEffect(() => {
        const getMemory = async () => {
            const {data} = await fetchMemory(id)
            setMemoryData(data)
        }
        getMemory()
    }, [id])

    let navigate = useNavigate()

    return (
        <Form onSubmit={(e) => {
            e.preventDefault()
            dispatch(updateMemory(id,memoryData))
            navigate('/')
        }}
        >
            <Form.Group>
                <h1>Güncelle</h1>
            </Form.Group>

            <Form.Group>
                <Form.Label>Başlık</Form.Label>
                <Form.Control
                    name='title'
                    type='text'
                    onChange={(e) =>
                        setMemoryData({...memoryData, title: e.target.value})
                    }
                    value={memoryData.title}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Yazar</Form.Label>
                <Form.Control
                    name='creator'
                    type='text'
                    onChange={(e) =>
                        setMemoryData({...memoryData, creator: e.target.value})
                    }
                    value={memoryData.creator}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Anı içeriği</Form.Label>
                <Form.Control
                    name='content'
                    type='text'
                    as='textarea'
                    rows={3}
                    onChange={(e) =>
                        setMemoryData({...memoryData, content: e.target.value})
                    }
                    value={memoryData.content}
                >
                </Form.Control>
            </Form.Group>

            <div className="d-gird gap-2 my-2">
                <Form.Group>
                    <ReactFileBase64
                        type='file'
                        multiple={false}
                        onDone={({base64}) => {
                            setMemoryData({...memoryData, image: base64})
                        }}
                        value={memoryData.image}
                    >
                    </ReactFileBase64>
                </Form.Group>
            </div>


            <div className="d-grid gap-2">
                <Button type='submit' variant='primary'>
                    Gönder
                </Button>
            </div>

        </Form>
    )
}
export default UpdateMemory;