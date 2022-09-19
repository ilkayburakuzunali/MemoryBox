import React from 'react';
import {Card, Button} from 'react-bootstrap'
import moment from "moment";
import {LinkContainer} from 'react-router-bootstrap'
import {MdModeEdit, MdDelete} from "react-icons/md";
import {deleteMemory} from "../axios/index.js";


const Memory = ({memory}) => {

    return (
        <Card className='rounded py-3 my-2' style={{width: '18rem'}}>
            <Card.Img variant="top" src={memory.image}/>
            <Card.Body>
                <Card.Title style={{color:'darkblue'}}>{memory.title}</Card.Title>
                <Card.Text>
                    {memory.content}
                </Card.Text>
                <Card.Title className='pb-2'>
                <span style={{color:'darkblue'}}>
                    Yazar:
                </span>
                    {memory.creator}
                </Card.Title>
                <Card.Subtitle className='pb-2'>{moment(memory.createdAt).fromNow()}</Card.Subtitle>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer style={{display: 'flex', justifyContent: 'space-between'}} className='bg-white pb-0'>
                <LinkContainer to={`/update/${memory._id}`} style={{cursor: 'pointer'}}>
                    <MdModeEdit size={23} color='blue'>

                    </MdModeEdit>
                </LinkContainer>
                <MdDelete size={25} color='red' style={{cursor: 'pointer'}} onClick={()=> deleteMemory(memory._id)}></MdDelete>
            </Card.Footer>
        </Card>
    )
}
export default Memory;