import { List, ListItem, Icon,Flex, Box, Text, Image, Input, VStack } from "@chakra-ui/react";
import { FaSearch , FaMapMarkerAlt } from 'react-icons/fa';
import './Section.css'

const MainSection: React.FC = () => {
  return (
    <VStack spacing={6} align="start" mt='100px'> 
      <Text fontSize="2xl" fontWeight="bold">
      <span> Find the right </span> <span> Doctor Right at your</span>  <span>fingertips</span>
      </Text>
          <Flex  align="center"  mr='auto' ml='12' gap='1'>
          <Icon as={FaSearch} boxSize={9}  p={2} color='#5430A8' size='10' />
           <Flex align="center" mr='auto' ml='10'>
              <Box  bg='#CFD5E1' p='5' borderRadius='20'  alignItems='center' w='400px'>
              <Flex align="center" gap='5'>
              <Input placeholder="Search Nearest hospital" borderRadius='full' _placeholder={{ color: '#000000', fontWeight:'semi-bold' }}/>
              <Icon as={FaSearch} boxSize={6} color='#D0C4C4'/>
             </Flex>
          </Box>
       </Flex>
      <Flex>
      </Flex>
          </Flex>
          <Text color='#00000069' fontSize='13' lineHeight='1.2'>
  <List spacing={3}>
    <ListItem as='span'>
      <Box as="span" css={{ '::before': { content: '" ."' } }}>
        We are here to hear and heal your health <ListItem>problems</ListItem>
      </Box>
    </ListItem>
    <ListItem as='span'>
      <Box as="span" css={{ '::before': { content: '" . "' } }}>
        It is not only about the money
      </Box>
    </ListItem>
    <ListItem as='span'>
      <Box as="span" css={{ '::before': { content: '" ."' } }}>
        More than just treating patients
      </Box>
    </ListItem>
  </List>
</Text>
       <Flex justifyContent={'flex'}>
        <Text>Top rated primary care physicians</Text>
       </Flex>
    </VStack>
  );
};

export default MainSection;
