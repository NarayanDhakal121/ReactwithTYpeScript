import React from 'react';
import { Box, Flex, Card, CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react';

const Specialist = () => {
  return (
    <Box bg="#D9D9D9" minHeight="50vh" mt="20" p="8" textAlign="center">
      <Flex justifyContent="space-around" color='#D9D9D9'>
        <Card maxW='sm' mb={8} mr={4}>
          <CardBody>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Dr Ram Shah</Heading>
              <Text>mmbs</Text>
            </Stack>
          </CardBody>
        </Card>

        <Card maxW='sm' mb={8} mr={4}>
          <CardBody>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Dr Ram Shah</Heading>
              <Text>mmbs</Text>
            </Stack>
          </CardBody>
        </Card>

        <Card maxW='sm' mb={8} mr={4}>
          <CardBody>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Dr Ram Shah</Heading>
              <Text>mmbs</Text>
            </Stack>
          </CardBody>
        </Card>

        <Card maxW='sm' mb={8}>
          <CardBody>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Dr Ram Shah</Heading>
              <Text>mmbs</Text>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
};

export default Specialist;
