import { Stack, Icon, Text } from '@chakra-ui/react';
import { BsBook, BsNewspaper, BsBookmarkPlus, BsBookmarkFill } from 'react-icons/bs';
import { ReactComponent as BsGlobe2 } from '../../../assets/icons/BsGlobe2.svg';

export const EvidenceRecord = ({ id, title, date, author, text, type, onEvidenceSelectionToggle, isSelectedEvidence }) => (
  <Stack
    direction="row"
    justify="flex-start"
    align="center"
    spacing="12px"
    width="296px"
    maxWidth="100%"
    paddingY="16px"
    _notLast={{ borderBottom: '1px', borderColor: '#E2E8F0' }}
    _first={{ paddingTop: '0px' }}
  >
    <Stack
      direction="column"
      justify="flex-start"
      align="flex-start"
      spacing="8px"
    >
      <Stack
        direction="row"
        justify="space-between"
        align="flex-start"
        spacing="8px"
        alignSelf="stretch"
      >
        <Stack
          direction="column"
          justify="flex-start"
          align="flex-start"
          spacing="0px"
        >
          <Stack
            direction="row"
            justify="flex-start"
            align="center"
            spacing="4px"
          >
            {type === 'Journal' ? <Icon as={BsNewspaper} w="12px" h="12px" color="#38A169" /> : type === 'Book' ? <Icon as={BsBook} w="12px" h="12px" color="#38A169" /> : <BsGlobe2 w="12px" h="12px" />}
            <Text
              fontFamily="Inter"
              lineHeight="1.33"
              fontSize="12px"
              fontWeight="semibold"
              color="#000000"
            >
              {title}
            </Text>
          </Stack>
          <Stack
            direction="row"
            justify="flex-start"
            align="flex-start"
            spacing="8px"
          >
            <Text
              fontFamily="Inter"
              lineHeight="1.33"
              fontWeight="regular"
              fontSize="12px"
              color="#414243"
              noOfLines={1}
              minWidth="fit-content"
            >
              {date}
            </Text>
            <Text
              fontFamily="Inter"
              lineHeight="1.33"
              fontWeight="regular"
              fontSize="12px"
              color="#414243"
              noOfLines={1}
            >
              {author}
            </Text>
          </Stack>
        </Stack>
        <Icon
          as={isSelectedEvidence ? BsBookmarkFill : BsBookmarkPlus}
          color="#ECC94B"
          strokeWidth="0.5px"
          onClick={() => onEvidenceSelectionToggle(id)}
        />
      </Stack>
      <Text
        fontFamily="Inter"
        lineHeight="1.33"
        fontSize="12px"
        color="#000000"
        width="296px"
        maxWidth="100%"
        noOfLines={3}
      >
        {text}
      </Text>
    </Stack>
  </Stack>
);
