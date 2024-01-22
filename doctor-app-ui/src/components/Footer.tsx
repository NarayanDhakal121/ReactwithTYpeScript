import React from 'react'
import { IconButton, Flex, Stack, Text, Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <>
      <Box bg="#738CE2AD" color="white" p={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Stack spacing={4} direction="column" align="start">
            <Text fontSize="lg" fontWeight="bold">About us:</Text>
            <Text fontSize="md" fontWeight="bold">Email: myemail@gmail.com</Text>
            <Text fontSize="md" fontWeight="bold">Mobile: +91 98xxxxxx10</Text>
          </Stack>
        </Flex>
      </Box>
    </>
  )
}

export default Footer;
