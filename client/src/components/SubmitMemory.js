import React from 'react';
import ReactFileBase64 from 'react-file-base64'
import {Form, Button} from 'react-bootstrap'

const SubmitMemory = () => {

    return (
        <Form>
            <Form.Group>
                <h1>Bir anı oluştur</h1>
            </Form.Group>

            <Form.Group>
                <Form.Label>Başlık</Form.Label>
                <Form.Control name='title' type='text'></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Yazar</Form.Label>
                <Form.Control name='author' type='text'></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Anı içeriği</Form.Label>
                <Form.Control name='content' type='text' as='textarea' rows={3}></Form.Control>
            </Form.Group>

            <div className="d-gird gap-2 my-2">
                <Form.Group>
                    <ReactFileBase64 type='file' multiple={false} onDone={() => {}}>

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