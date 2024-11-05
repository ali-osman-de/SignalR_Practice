import React from 'react'
import { Table } from 'reactstrap'

const MessagesContainer = ({ messages }) => {
    return (

        <Table className='text-dark'>
            <tbody className='text-secondary'>
                {messages.map((msg, index) => {
                    <tr className='text-secondary' key={index}>
                        <td className='text-secondary'>
                            {msg.msg} - {msg.username}
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>


    )
}

export default MessagesContainer