import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'
import axios from 'axios'

const Home = () => {

    const checkoutHandler = async (amount) => {

        const {data} = await axios.post('http://localhost:4002/api/checkout', {
            amount
        })

        console.log(data);
    }

    return (
        <>
            <Box>
                <Stack direction={['column', 'row']}>
                    <Card amount={5000} img={'https://images.unsplash.com/photo-1627822607447-d0008523a517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJjJTIwY2FyfGVufDB8fDB8fHww'} checkoutHandler={checkoutHandler} />

                    <Card amount={6000} img={'https://images.unsplash.com/photo-1624902106166-5e8170eeaa2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJjJTIwY2FyfGVufDB8fDB8fHww'} checkoutHandler={checkoutHandler} />
                </Stack>
            </Box>
        </>
    )
}

export default Home