import React, { useEffect, useState } from 'react';
import { RelatedClaim } from '../molecules/RelatedClaim';
import relatedClaims from '../../../mocks/relatedClaims.json';
import {
  Stack,
  Text,
  AccordionIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';

export const SelectedRelatedClaimsPanel = () => {
  const [selectedRelatedClaims, setSelectedRelatedClaims] = useState([]);
  console.log(relatedClaims);
  console.log(selectedRelatedClaims);

  useEffect(() => {
    const storedRelatedClaims =
      JSON.parse(localStorage.getItem('selectedRelatedClaims')) || [];
    setSelectedRelatedClaims(storedRelatedClaims);
  }, []);

  const handleRelatedClaimsSelectionToggle = id => {
    setSelectedRelatedClaims(prevSelectedRelatedClaims => {
      const updatedRelatedClaims = prevSelectedRelatedClaims.includes(id)
        ? prevSelectedRelatedClaims.filter(recordId => recordId !== id)
        : [...prevSelectedRelatedClaims, id];

      localStorage.setItem(
        'selectedRelatedClaims',
        JSON.stringify(updatedRelatedClaims)
      );
      return updatedRelatedClaims;
    });
  };

  return (
    <Accordion
      direction="column"
      justify="flex-start"
      align="flex-start"
      spacing="16px"
      flex="1"
      alignSelf="stretch"
      allowMultiple
    >
      <AccordionItem
        paddingX="35px"
        paddingBottom="25px"
        paddingTop="9px"
        borderRadius="12px"
        direction="column"
        justify="flex-start"
        align="flex-start"
        spacing="16px"
        overflow="hidden"
        flex="1"
        alignSelf="stretch"
        background="#FFFFFF"
        border="none"
      >
        <AccordionButton
          direction="row"
          justify="space-between"
          align="flex-start"
          spacing="16px"
          alignSelf="stretch"
          paddingX="0px"
          paddingTop="16px"
          paddingBottom="0px"
          _expanded={{ paddingBottom: '16px' }}
          _hover={{ backgroundColor: 'none' }}
        >
          <Stack
            direction="row"
            justify="flex-start"
            align="center"
            spacing="10px"
            flex="1"
          >
            <Stack
              direction="row"
              justify="flex-start"
              align="center"
              spacing="8px"
            >
              <Text
                fontFamily="Inter"
                lineHeight="1.43"
                fontWeight="semibold"
                fontSize="14px"
                color="#2B6CB0"
              >
                Selected related claims
              </Text>
            </Stack>
          </Stack>
          <AccordionIcon color="#2B6CB0" />
        </AccordionButton>
        <AccordionPanel
          direction="column"
          justify="flex-start"
          align="flex-start"
          spacing="0"
          alignSelf="stretch"
          padding="0px"
        >
          {relatedClaims
            .filter(relatedClaim =>
              selectedRelatedClaims.includes(relatedClaim.id)
            )
            .map(relatedClaim => (
              <RelatedClaim
                key={relatedClaim.id}
                id={relatedClaim.id}
                status={relatedClaim.status}
                badges={relatedClaim.badges}
                factchecker={relatedClaim.factchecker}
                text={relatedClaim.text}
                metadata={relatedClaim.metadata}
                related={relatedClaim.related}
                onRelatedClaimsSelectionToggle={
                  handleRelatedClaimsSelectionToggle
                }
                isSelectedRelatedClaims={true}
              />
            ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
