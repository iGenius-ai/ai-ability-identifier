// Chakra imports
import {
  Box,
  Text,
  Button,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import IconBox from "components/icons/IconBox";
import { MdGroups } from "react-icons/md";
import React from "react";
export default function WeeklyRevenue(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <IconBox
          w='56px'
          h='56px'
          bg={boxBg}
          icon={
            <Icon w='32px' h='32px' as={MdGroups} color={brandColor} />
          }
        />
      </Flex>

      <Box h='240px' mt='auto'>
      <Flex flexDirection='column'>
          <Text
            color={textColor}
            fontSize='30px'
            textAlign='center'
            fontWeight='700'
            lineHeight='100%'>
            Discord Community
          </Text>
          <Flex align='center' mb='20px'>
            <Text
              color='gray.400'
              fontSize='xl'
              fontWeight='500'
              textAlign='center'
              mt='4px'
              me='12px'>
              Ready for a community like no other? Join us on Discord today! 
              Connect, learn, and have a blast with like-minded enthusiasts.
            </Text>
          </Flex>
          <Flex w='100%' justifyContent='center' >
            <Button
              me='100%'
              margin='0'
              w='180px'
              minW='150px'
              mt={{ base: "20px", "2xl": "auto" }}
              variant='brand'
              fontWeight='500'>
              Connect with us
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Card>
  );
}
