// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        Your Information
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        I am a backend developer, proficient in all backend programming languages - I guess.
        I can wear many hats - or just one. Contact me for any of your backend needs. I've got
        you covered.
      </Text>
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='Education'
          value='University of Benin'
        />
        <Information
          boxShadow={cardShadow}
          title='Languages'
          value='English, French'
        />
        <Information
          boxShadow={cardShadow}
          title='Department'
          value='Software Engineering'
        />
        <Information
          boxShadow={cardShadow}
          title='Work History'
          value='Hakorld, AI Ability'
        />
        <Information
          boxShadow={cardShadow}
          title='Organization'
          value='Hakorld Web Inc.'
        />
        <Information
          boxShadow={cardShadow}
          title='Birthday'
          value='14 August'
        />
      </SimpleGrid>
    </Card>
  );
}
