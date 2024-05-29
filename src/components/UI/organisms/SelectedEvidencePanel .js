import React, { useEffect, useState } from 'react';
import { EvidenceRecord } from '../molecules/EvidenceRecord';
import evidence from '../../../mocks/evidence.json';
import {
  Stack,
  Text,
  AccordionIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';

export const SelectedEvidencePanel = () => {
  const [selectedEvidence, setSelectedEvidence] = useState([]);

  useEffect(() => {
    const storedEvidence = JSON.parse(localStorage.getItem('selectedEvidence')) || [];
    setSelectedEvidence(storedEvidence);
  }, []);

  const handleEvidenceSelectionToggle = (id) => {
    setSelectedEvidence((prevSelectedEvidence) => {
      const updatedEvidence = prevSelectedEvidence.includes(id)
        ? prevSelectedEvidence.filter((recordId) => recordId !== id)
        : [...prevSelectedEvidence, id];
      
      localStorage.setItem('selectedEvidence', JSON.stringify(updatedEvidence));
      return updatedEvidence;
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
          _expanded={{ paddingBottom: "16px" }}
          _hover={{backgroundColor: "none"}}
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
                Selected evidence
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
          {evidence
            .filter((evidenceItem) => selectedEvidence.includes(evidenceItem.id))
            .map((evidenceItem) => (
              <EvidenceRecord
                key={evidenceItem.id}
                id={evidenceItem.id}
                title={evidenceItem.title}
                date={evidenceItem.date}
                author={evidenceItem.author}
                text={evidenceItem.text}
                type={evidenceItem.type}
                onEvidenceSelectionToggle={handleEvidenceSelectionToggle}
                isSelectedEvidence={true}
              />
            ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
