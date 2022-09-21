import React, {useState} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import Message from "../components/Message";
import {useNavigate} from "react-router-dom";

import {signup} from "../actions/userActions.js";
import {useDispatch, useSelector} from "react-redux";

const AuthScreen = () => {
    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    let navigate = useNavigate()

    const userState = useSelector(state => state.user)
    const {error} = userState

    const [form, setForm] = useState(initialFormData)
    const [login, setLogin] = useState(true)

    const dispatch = useDispatch()

    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} md={6}>
                        {
                            login ?
                                <Form className='align-content-center mt-3'>
                                    <h1 className='text-center mb-3'>Giriş Yap</h1>

                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type='email'
                                            placeholder='Email adresinizi girin'>
                                        </Form.Control>
                                    </Form.Group>

                                    <div className='d-grid mt-3'>
                                        <Form.Group>
                                            <Form.Label>Şifre</Form.Label>
                                            <Form.Control
                                                type='password'
                                                placeholder='Şifrenizi girin'>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>

                                    <div className='d-grid mt-3'>
                                        <Button type='submit' variant='primary'>Giriş Yap</Button>
                                    </div>

                                    <div className='d-grid mt-2'>
                                        <Form.Text as='large' className='text-center'>
                                            Henüz bir hesabın yok mu? {' '}
                                            <span onClick={(e) => setLogin(!login)}
                                                  style={{fontWeight: 'bold', cursor: 'pointer'}}>
                                        Hesap oluştur
                                        </span>
                                        </Form.Text>
                                    </div>

                                </Form>

                                : <Form onSubmit={(e) => {
                                    e.preventDefault()

                                    if (!login) {
                                        dispatch(signup(form, navigate))
                                    }
                                }}
                                        className='align-content-center mt-3'>
                                    <h1 className='text-center mb-3'>Kayıt Ol</h1>
                                    {error && <Message>{error}</Message>}
                                    <Form.Group style={{display: 'flex'}}>
                                        <Form.Control
                                            type='text'
                                            placeholder='Adınız'
                                            className='me-2'
                                            onChange={(e) =>
                                                setForm({...form, firstName: e.target.value})}>
                                        </Form.Control>

                                        <Form.Control
                                            type='text'
                                            placeholder='Soyadınız'
                                            className='ml-2'
                                            onChange={(e) =>
                                                setForm({...form, lastName: e.target.value})}>
                                        </Form.Control>
                                    </Form.Group>

                                    <div className='d-grid mt-2'>
                                        <Form.Group>
                                            <Form.Label>E-Mail</Form.Label>
                                            <Form.Control
                                                type='email'
                                                placeholder='Email adresinizi girin'
                                                onChange={(e) =>
                                                    setForm({...form, email: e.target.value})}>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>


                                    <div className='d-grid mt-2'>
                                        <Form.Group>
                                            <Form.Label>Şifre</Form.Label>
                                            <Form.Control
                                                type='password'
                                                placeholder='Şifrenizi girin'
                                                onChange={(e) =>
                                                    setForm({...form, password: e.target.value})}>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>


                                    <div className='d-grid mt-2'>
                                        <Form.Group>
                                            <Form.Label>Şifrenizi doğrulayın</Form.Label>
                                            <Form.Control
                                                type='password'
                                                placeholder='Şifrenizi doğrulayın'
                                                onChange={(e) =>
                                                    setForm({...form, confirmPassword: e.target.value})}>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>


                                    <div className='d-grid mt-3'>
                                        <Button type='submit' variant='primary'>Kayıt Ol</Button>
                                    </div>

                                    <div className='d-grid mt-2'>
                                        <Form.Text as='Large' className='text-center'>
                                            Zaten bir hesabınız var mı?{' '}
                                            <span onClick={(e) => setLogin(!login)}
                                                  style={{fontWeight: 'bold', cursor: 'pointer'}}>
                                        Giriş yapın
                                    </span>
                                        </Form.Text>
                                    </div>

                                </Form>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default AuthScreen;