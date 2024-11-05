import React from 'react';
import { Table, Card, CardBody, Row, Col } from 'reactstrap';
import SendMessageForm from './SendMessageForm';
import './ChatRoom.css';

const ChatRoom = ({ messages, sendMessage }) => {
    return (
        <div>
            <h1>Chat Room</h1>
            <div>
                <Table className='text-dark'>
                    {messages.map((msg, index) => (
                        <tr className='message-row' key={index}>
                            <td className='message-content'>
                                <Card className="message-card">
                                    <CardBody>
                                        <Row>
                                            <Col xs="auto">
                                                <div className="profile-pic"></div>
                                            </Col>
                                            <Col>
                                                <div className="message-text">
                                                    <strong>{msg.username}:</strong> {msg.msg}
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </td>
                        </tr>
                    ))}
                </Table>
            </div>
            <div className='m-5'>
                <SendMessageForm sendMessage={sendMessage} />
            </div>
        </div>
    );
}

export default ChatRoom;
