import { Stack, Text, Icon, Link as ChakraLink } from '@chakra-ui/react';
import { BsPersonPlus, BsBookmarkPlus, BsBookmarkFill } from 'react-icons/bs';
import { route } from '../../../routesDefinition';
import { Link } from 'react-router-dom';

export const ClaimMetadata = ({ status, metadata, id, related, isSelectedRelatedClaims, onRelatedClaimsSelectionToggle }) => (
  <Stack
    direction="row"
    justify="space-between"
    align="flex-end"
    spacing="12px"
    alignSelf="stretch"
  >
    <Stack
      direction="column"
      justify="flex-start"
      align="flex-start"
      spacing="4px"
    >
      <Stack
        direction="row"
        justify="flex-start"
        align="flex-start"
        spacing="4px"
      >
        <Text
          fontFamily="Inter"
          lineHeight="1.33"
          fontWeight="regular"
          fontSize="12px"
          color="#414243"
        >
          Author:
        </Text>
        <Text
          fontFamily="Inter"
          lineHeight="1.33"
          fontWeight="semibold"
          fontSize="12px"
          color="#000000"
        >
          {metadata.author}
        </Text>
      </Stack>
      <Stack
        direction="row"
        justify="flex-start"
        align="flex-start"
        spacing="4px"
      >
        <Text
          fontFamily="Inter"
          lineHeight="1.33"
          fontWeight="regular"
          fontSize="12px"
          color="#414243"
        >
          Source:
        </Text>
        <Text
          fontFamily="Inter"
          lineHeight="1.33"
          fontWeight="semibold"
          fontSize="12px"
          color="#000000"
        >
          {metadata.source}
        </Text>
      </Stack>
      <Stack
        direction="row"
        justify="flex-start"
        align="flex-start"
        spacing="4px"
      >
        <Text
          fontFamily="Inter"
          lineHeight="1.33"
          fontWeight="regular"
          fontSize="12px"
          color="#414243"
        >
          Date of the statement:
        </Text>
        <Text
          fontFamily="Inter"
          lineHeight="1.33"
          fontWeight="semibold"
          fontSize="12px"
          color="#000000"
        >
          {metadata.date}
        </Text>
      </Stack>
    </Stack>
    {related ? (
      <Icon
        as={isSelectedRelatedClaims ? BsBookmarkFill : BsBookmarkPlus}
        color="#ECC94B"
        strokeWidth="0.5px"
        onClick={() => onRelatedClaimsSelectionToggle(id)}
      />
    ) : status === 'not-checked' || status === 'wip' ? (
      <ChakraLink
        as={Link}
        to={route.evidenceRetrieval(id)}
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
      >
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="16px"
        >
          <Stack
            direction="row"
            justify="flex-start"
            align="flex-start"
            spacing="16px"
          >
            <Stack
              direction="row"
              justify="center"
              align="center"
              spacing="8px"
            >
              <Icon as={BsPersonPlus} />
              <Text
                fontFamily="Inter"
                lineHeight="1.43"
                fontWeight="semibold"
                fontSize="14px"
                color="#2B6CB0"
              >
                {status === 'wip' ? 'Join' : 'Assign'}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </ChakraLink>
    ) : null}
  </Stack>
);
