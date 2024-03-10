import { Box, Heading, VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {

    const searcQuery = useSearchParams()[0]
    const refNo = searcQuery.get('refrence')

    return (
        <Box>
            <VStack h={'100vh'} justifyContent={'center'}>
                <Heading textTransform={'uppercase'}>Order Successfull</Heading>
                <Text>Ref. No. {refNo}</Text>
                <Link to='/'>
                    <Button>Continue Shopping</Button>
                </Link>
            </VStack>
        </Box>
    )
}

export default PaymentSuccess