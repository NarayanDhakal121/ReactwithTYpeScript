import * as React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  InputGroup,
  InputLeftElement,
  Input
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const GroupBy: React.FC = () => {
  return (
   <>
    <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input type="text" placeholder="Search by Doctors" />
          <Input type="text" placeholder="Search by Location" />
        </InputGroup>
        <Box mt={4}>
          <Text color="white">You may be looking for</Text>
          <Flex mt={2}>
            <Button variant="outline" colorScheme='blue' mr={4}>Dentist</Button>
            <Button variant="outline" colorScheme='blue' mr={4}>Cardiologist</Button>
            <Button variant="outline" colorScheme='blue' mr={4}>Dermatologists</Button>
            <Button variant="outline" colorScheme='blue' mr={4}>Family Physicians</Button>
            <Button variant="outline" colorScheme='blue'>More</Button>
          </Flex>
        </Box>
     
   </>
       
  );
};

export default GroupBy;
