// Chakra imports
import {
  Button,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
// Assets
import Nft1 from "assets/img/nfts/Nft1.png";

export default function TotalSpent(props) {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card
      justifyContent='center'
      align='center'
      direction='column'
      w='100%'
      mb='0px'
      bgImage={Nft1}
      bgSize='cover'
      {...rest}>
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          borderRadius: 'inherit',
          backgroundColor: 'rgba(0, 0, 0, 0.15)'
        }}
      />
      <Flex w='100%' flexDirection={{ base: "column", lg: "row" }} zIndex='1' >
        <Flex flexDirection='column'>
          <Text
            color={textColor}
            fontSize='30px'
            textAlign='center'
            fontWeight='700'
            lineHeight='100%'>
            Create a digital token
          </Text>
          <Flex align='center' mb='20px'>
            <Text
              color='white'
              fontSize='xl'
              fontWeight='500'
              textAlign='center'
              mt='4px'
              me='12px'>
              Get creative with digital tokens! Create your own in a few easy 
              steps and unlock endless possibilities. Start now! 
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
              Create token
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
