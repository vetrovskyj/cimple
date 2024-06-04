import {
  Stack,
  Text,
  Button,
  Icon,
  Box,
  Select,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { BsArrowRight, BsArrowClockwise } from "react-icons/bs";
import { route } from "../../../routesDefinition";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { PopoverForm } from "../molecules/SumSettingsPopover";

export const ResultPanel = ({ claimId }) => {
  const [summarizationValue, setSummarizationValue] = useState("");
  const [explanationValue, setExplanationValue] = useState("");
  const [resultValue, setResultValue] = useState("unverifiable");

  const handleResultChange = (event) => {
    setResultValue(event.target.value);
  };
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
        spacing="16px"
        w="100%"
      >
        <Stack
          direction="column"
          justify="flex-start"
          align="flex-start"
          spacing="8px"
          w="100%"
        >
          <Text
            fontFamily="Inter"
            lineHeight="1.33"
            fontWeight="semibold"
            fontSize="12px"
            color="#000000"
          >
            Explanation
          </Text>
          <Box width="100%">
            <ReactQuill
              width="100%"
              theme="snow"
              value={explanationValue}
              onChange={setExplanationValue}
            />
          </Box>
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
            justifyContent="space-between"
            w="100%"
            alignItems="center"
          >
            <Stack
              direction="row"
              justify="flex-start"
              align="flex-start"
              spacing="8px"
              alignItems="center"
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
            <PopoverForm />
          </Stack>
          <Box width="100%">
            <ReactQuill
              width="100%"
              theme="snow"
              value={summarizationValue}
              onChange={setSummarizationValue}
            />
          </Box>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justify="space-between"
        align="baseline"
        spacing="16px"
        alignSelf="stretch"
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
            align="center"
            spacing="4px"
          >
            <Text
              fontFamily="Inter"
              lineHeight="1.33"
              fontWeight="regular"
              fontSize="12px"
              color="#414243"
            >
              Verdict:
            </Text>
            <Select
              onChange={handleResultChange}
              value={resultValue}
              size="xs"
              bg={
                resultValue === "true"
                  ? "#319795"
                  : resultValue === "false"
                  ? "#AC1212"
                  : "#ECC94B"
              }
              border="none"
              borderRadius="4px"
              color="white"
            >
              <option value="true">True</option>
              <option value="false">False</option>
              <option value="unverifiable">Unverifiable</option>
            </Select>
          </Stack>
        </Stack>
        <ChakraLink
          as={Link}
          to={route.summarization(claimId)}
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
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
