import { EvidenceRecord } from '../molecules/EvidenceRecord';
import evidence from '../../../mocks/evidence.json';

import { Stack, Text, Icon, Box } from '@chakra-ui/react'
import {
  BsArrowsAngleExpand,
  BsBook,
  BsGlobe2,
  BsNewspaper,
} from 'react-icons/bs'

export const EvidencePanel = () => (
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
        {evidence.map(evidence => (
          <EvidenceRecord title={evidence.title} date={evidence.date} author={evidence.author} text={evidence.text} type={evidence.type} />
        ))}
      </Stack>
    </Stack>
  </Stack>
);
