import React, { useState } from 'react';
import {
  Stack,
  Text,
  Icon,
  Tabs,
  Tab,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightAddon,
} from '@chakra-ui/react';
import { BsInfoCircle, BsSearch } from 'react-icons/bs';
import { ReactComponent as BsCamera } from '../../assets/icons/BsCamera.svg';
import { Claim } from '../UI/organisms/Claim';
import claims from '../../mocks/claims.json';
import { LoggedInPagesTemplate } from '../templates/LoggedInPagesTemplate';

export const ArticleClaimsPage = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const filteredClaims = selectedTabIndex === 1
    ? claims.filter(claim => claim.status === 'not-checked')
    : claims;

  return (
    <LoggedInPagesTemplate>
      <Stack
        direction="row"
        justify="flex-start"
        align="flex-start"
        spacing="32px"
        width="748px"
        maxWidth="100%"
      >
        <Text
          fontFamily="Inter"
          lineHeight="1.2"
          fontWeight="bold"
          fontSize="30px"
          color="#000000"
          flex="1"
        >
          Claims detection
        </Text>
        <Tabs
          display="flex"
          variant="soft-rounded"
          justifyContent="end"
          size="sm"
          width="364px"
          height="32px"
          maxWidth="100%"
          index={selectedTabIndex}
          onChange={index => setSelectedTabIndex(index)}
        >
          <Tab color="#2B6CB0" _selected={{ bg: "#2B6CB0", color: "white" }} borderRadius="6px">All claims</Tab>
          <Tab color="#2B6CB0" _selected={{ bg: "#2B6CB0", color: "white" }} borderRadius="6px">Not checked</Tab>
        </Tabs>
      </Stack>
      <InputGroup
        m="auto"
        justify="flex-start"
        align="flex-start"
        spacing="32px"
        width="748px"
        maxWidth="100%"
        size="xs"
        flex="1"
        alignSelf="stretch"
      >
        <Input
          placeholder="e.g. https://www.novinky.cz/clanek/volby-prezidenta-debata-duel-pavel-babis-40420910"
          size="xs"
          variant="outline"
          isInvalid={false}
          isDisabled={false}
        />
        <InputLeftElement>
          <Icon as={BsSearch} />
        </InputLeftElement>
        <InputRightAddon background="gray.100">
          <BsCamera />
        </InputRightAddon>
      </InputGroup>
      <Stack
        direction="column"
        justify="flex-start"
        align="flex-start"
        spacing="16px"
      >
        <Stack
          direction="row"
          justify="space-between"
          align="flex-start"
          spacing="16px"
          width="748px"
          maxWidth="100%"
        >
          <Stack
            direction="row"
            justify="flex-start"
            align="center"
            spacing="4px"
          />
          <Stack
            direction="row"
            justify="flex-start"
            align="center"
            spacing="4px"
          >
            <Icon as={BsInfoCircle} />
            <Text
              fontFamily="Inter"
              lineHeight="1.33"
              fontWeight="regular"
              fontSize="12px"
              color="#718096"
            >
              What do badges mean?
            </Text>
          </Stack>
        </Stack>
        {filteredClaims.map(claim => (
          <Stack
            key={claim.id}
            direction="column"
            justify="flex-start"
            align="flex-start"
            spacing="16px"
          >
            <Claim
              id={claim.id}
              status={claim.status}
              badges={claim.badges}
              factchecker={claim.factchecker}
              text={claim.text}
              metadata={claim.metadata}
            />
          </Stack>
        ))}
      </Stack>
    </LoggedInPagesTemplate>
  );
};
