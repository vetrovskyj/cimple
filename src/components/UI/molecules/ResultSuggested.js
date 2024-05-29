import { Stack, Text, Button, Icon, Link as ChakraLink } from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';
import { route } from '../../../routesDefinition';
import { Link } from 'react-router-dom';

export const ResultSuggested = ({ claimId }) => (
  <Stack
    paddingX="35px"
    paddingY="25px"
    borderRadius="12px"
    direction="column"
    justify="flex-start"
    align="flex-start"
    spacing="16px"
    overflow="hidden"
    width="748px"
    maxWidth="100%"
    background="#FFFFFF"
  >
    <Stack direction="row" justify="flex-start" align="center" spacing="10px">
      <Stack direction="row" justify="flex-start" align="center" spacing="8px">
        <Text
          fontFamily="Inter"
          lineHeight="1.43"
          fontWeight="semibold"
          fontSize="14px"
          color="#2B6CB0"
        >
          Result of automatic fact-check
        </Text>
      </Stack>
    </Stack>
    <Stack
      direction="row"
      justify="space-between"
      align="center"
      spacing="16px"
      alignSelf="stretch"
    >
      <Stack
        direction="column"
        justify="flex-start"
        align="flex-start"
        spacing="8px"
      >
        <Stack
          direction="row"
          justify="flex-start"
          align="center"
          spacing="12px"
        >
          <Stack
            direction="row"
            justify="flex-start"
            align="flex-end"
            spacing="4px"
          >
            <Text
              fontFamily="Inter"
              lineHeight="1"
              fontWeight="regular"
              fontSize="12px"
              color="#414243"
            >
              Automatically assigned verdict:
            </Text>
            <Text
              fontFamily="Inter"
              lineHeight="1"
              fontWeight="semibold"
              fontSize="14px"
              color="#AC1212"
            >
              False
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <ChakraLink
        as={Link}
        to={route.summarization(claimId)}
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
      >
        <Button
          rightIcon={<Icon as={BsArrowRight} />}
          size="sm"
          variant="solid"
          colorScheme="blue"
        >
          Write explanation
        </Button>
      </ChakraLink>
    </Stack>
  </Stack>
);
