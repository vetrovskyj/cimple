import React, { useState, useEffect } from 'react';
import { EvidenceRecord } from '../molecules/EvidenceRecord';
import evidence from '../../../mocks/evidence.json';
import { Stack, Text, Icon } from '@chakra-ui/react';
import { BsArrowsAngleExpand } from 'react-icons/bs';

export const EvidencePanel = () => {
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
    <Stack
      direction="column"
      justify="flex-start"
      align="flex-start"
      spacing="16px"
      flex="1"
      alignSelf="stretch"
    >
      <Stack
        paddingX="35px"
        paddingY="25px"
        borderRadius="12px"
        direction="column"
        justify="flex-start"
        align="flex-start"
        spacing="16px"
        overflow="hidden"
        flex="1"
        alignSelf="stretch"
        background="#FFFFFF"
      >
        <Stack
          direction="row"
          justify="space-between"
          align="flex-start"
          spacing="16px"
          alignSelf="stretch"
        >
          <Stack
            direction="row"
            justify="flex-start"
            align="center"
            spacing="10px"
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
                Evidence
              </Text>
            </Stack>
          </Stack>
          <Icon as={BsArrowsAngleExpand} />
        </Stack>
        <Stack
          direction="column"
          justify="flex-start"
          align="flex-start"
          spacing="0"
          alignSelf="stretch"
        >
          {evidence.map((evidenceItem) => (
            <EvidenceRecord
              key={evidenceItem.id}
              id={evidenceItem.id}
              title={evidenceItem.title}
              date={evidenceItem.date}
              author={evidenceItem.author}
              text={evidenceItem.text}
              type={evidenceItem.type}
              onEvidenceSelectionToggle={handleEvidenceSelectionToggle}
              isSelectedEvidence={selectedEvidence.includes(evidenceItem.id)}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
