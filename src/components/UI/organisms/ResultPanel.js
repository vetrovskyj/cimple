import {
  Stack,
  Text,
  Button,
  Icon,
  Box,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { BsArrowRight, BsArrowClockwise } from 'react-icons/bs';
import { route } from '../../../routesDefinition';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

export const ResultPanel = ({ claimId }) => {
  const [value, setValue] = useState('');
  return (
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
            Final verdict and explanation
          </Text>
        </Stack>
      </Stack>
      <Stack
        direction="column"
        justify="flex-start"
        align="flex-start"
        spacing="8px"
        w="100%"
      >
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="8px"
        >
          <Text
            fontFamily="Inter"
            lineHeight="1.33"
            fontWeight="semibold"
            fontSize="12px"
            color="#000000"
          >
            Summarization
          </Text>
          <Icon as={BsArrowClockwise} />
        </Stack>
        <Box width="100%"><ReactQuill width="100%" theme="snow" value={value} onChange={setValue} /></Box>
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
};
