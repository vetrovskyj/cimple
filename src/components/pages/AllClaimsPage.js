import { Stack, Box, Text, Icon } from '@chakra-ui/react';
import {
  BsInfoCircle,
} from 'react-icons/bs';
import { Claim } from '../UI/organisms/Claim';
import { UserProfile } from '../UI/molecules/UserProfile';
import claims from '../../mocks/claims.json';

export const AllClaimsPage = () => (
  <Stack
    direction="column"
    justify="flex-start"
    align="flex-start"
    spacing="0px"
  >
    <Stack
      paddingX="202px"
      paddingY="32px"
      direction="column"
      justify="flex-start"
      align="center"
      spacing="32px"
      overflow="hidden"
      background="#F7FAFC"
    >
      <Stack
        direction="row"
        justify="space-between"
        align="center"
        spacing="805px"
        width="1132px"
        maxWidth="100%"
      >
        <Box width="160px" height="43px" />
        <UserProfile />
      </Stack>
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
          Verified claims overview
        </Text>
      </Stack>
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
        {claims.map(claim => (
          <Stack
            key={claim.id}
            direction="column"
            justify="flex-start"
            align="flex-start"
            spacing="16px"
          >
            <Claim status={claim.status} badges={claim.badges} factchecker={claim.factchecker} text={claim.text} metadata={claim.metadata} />
          </Stack>
        ))}
      </Stack>
    </Stack>
  </Stack>
);
