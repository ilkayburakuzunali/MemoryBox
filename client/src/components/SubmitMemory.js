import React, {useState} from 'react';
import ReactFileBase64 from 'react-file-base64'
import {Form, Button} from 'react-bootstrap'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createMemory} from "../actions/memoryActions";


const SubmitMemory = () => {

    const [memoryData, setMemoryData] = useState({
        title: '',
        content: '',
        creator: '',
        image: '',
    })

    let navigate = useNavigate()

    const dispatch = useDispatch()

    return (
        <Form onSubmit={(e) => {
            e.preventDefault()

            dispatch(createMemory(memoryData))

            navigate('/')
        }}
        >
            <Form.Group>
                <h1>Bir anı oluştur</h1>
            </Form.Group>

            <Form.Group>
                <Form.Label>Başlık</Form.Label>
                <Form.Control
                    name='title'
                    type='text'
                    onChange={(e) =>
                        setMemoryData({...memoryData, title: e.target.value})
                    }
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
export default SubmitMemory;