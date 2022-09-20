import React, {useState} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const AuthScreen = () => {

    const [login, setLogin] = useState(true)

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

                                : <Form className='align-content-center mt-3'>
                                    <h1 className='text-center mb-3'>Kayıt Ol</h1>

                                    <Form.Group style={{display: 'flex'}}>
                                        <Form.Control
                                            type='text'
                                            placeholder='Adınız'
                                            className='me-2'>
                                        </Form.Control>

                                        <Form.Control
                                            type='text'
                                            placeholder='Soyadınız'
                                            className='ml-2'>
                                        </Form.Control>
                                    </Form.Group>

                                    <div className='d-grid mt-2'>
                                        <Form.Group>
                                            <Form.Label>E-Mail</Form.Label>
                                            <Form.Control
                                                type='email'
                                                placeholder='Email adresinizi girin'>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>


                                    <div className='d-grid mt-2'>
                                        <Form.Group>
                                            <Form.Label>Şifre</Form.Label>
                                            <Form.Control
                                                type='password'
                                                placeholder='Şifrenizi girin'>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>


                                    <div className='d-grid mt-2'>
                                        <Form.Group>
                                            <Form.Label>Şifrenizi doğrulayın</Form.Label>
                                            <Form.Control
                                                type='password'
                                                placeholder='Şifrenizi doğrulayın'>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>


                                    <div className='d-grid mt-3'>
                                        <Button type='submit' variant='primary'>Kayıt Ol</Button>
                                    </div>

                                    <div className='d-grid mt-2'>
                                        <Form.Text as='large' className='text-center'>
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