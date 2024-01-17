import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react'
import { io } from "socket.io-client";

function App() {

    const [message, setMessage] = useState("")
    const [room, setRoom] = useState([])
    const [socketId, setSocketId] = useState("")
    const [allMessage, setAllMessage] = useState([])

    const socket = useMemo(() => io("http://localhost:3000"), [])

    const handleSubmit = (e) => {
        e.preventDefault()
        socket.emit("message", {message, room})
        setMessage("")
    }

    console.log(allMessage);

    useEffect(() => {
        socket.on('connect', () => {
            setSocketId(socket.id)
            console.log("connected", socket.id);
        })

        socket.on("welcome", (msg) => {
            console.log(msg);
        })
        socket.on("message", (msg) => {
            console.log(msg);
            setAllMessage((message) => [...message, msg])
        })

        return () => {
            socket.disconnect()
        }
    }, [])

    return (
        <Container>
            <Typography variant='h1' component="div" gutterBottom>Welcome</Typography>
            <Typography variant='h6' component="div" gutterBottom>{socketId}</Typography>

            <form onSubmit={handleSubmit}>

                <TextField
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id='Outline_basic' label="outlined" variant='outlined' />
                <TextField
                    // value={room}
                    onChange={(e) => setRoom([...room, e.target.value, socketId])}
                    id='Outline_basic' label="roomId" variant='outlined' />
                <Button type='submit' variant='contained' color='primary'>Send</Button>

            </form>

            <Stack>
                {
                    allMessage.map((ele, id) => (
                        <p key={id}>{ele}</p>
                    ))
                }
            </Stack>
        </Container>
    )
}

export default App