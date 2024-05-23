import { Stack, Text, Icon, Heading } from '@chakra-ui/react';
import { BsInfoCircle } from 'react-icons/bs';
import { Claim } from '../UI/organisms/Claim';
import claims from '../../mocks/claims.json';
import { LoggedInPagesTemplate } from '../templates/LoggedInPagesTemplate';

export const AllClaimsPage = () => (
  <LoggedInPagesTemplate>
    <Stack
      direction="row"
      justify="flex-start"
      align="flex-start"
      spacing="32px"
      width="748px"
      maxWidth="100%"
    >
      <Heading
        fontFamily="Inter"
        lineHeight="1.2"
        fontWeight="bold"
        fontSize="30px"
        color="#000000"
        flex="1"
      >
        Verified claims overview
      </Heading>
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
