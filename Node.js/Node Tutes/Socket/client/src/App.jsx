import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react'
import { io } from "socket.io-client";

function App() {

    const [message, setMessage] = useState("")

    const socket = useMemo(() => io("http://localhost:3000"), [])

    const handleSubmit = (e) => {
        e.preventDefault()
        socket.emit("message", message)
        setMessage("")
    }

    useEffect(() => {
        socket.on('connect', () => {
            console.log("connected", socket.id);
        })

        socket.on("welcome", (msg) => {
            console.log(msg);
        })
        socket.on("message", (msg) => {
            console.log(msg);
        })

        return () => {
            socket.disconnect()
        }
    }, [])

    return (
        <Container>
            <Typography variant='h1' component="div" gutterBottom>Welcome</Typography>

            <form onSubmit={handleSubmit}>

                <TextField
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                     id='Outline_basic' label="outlined" variant='outlined'/>
                <Button type='submit' variant='contained' color='primary'>Send</Button>

            </form>
        </Container>
    )
}

export default App