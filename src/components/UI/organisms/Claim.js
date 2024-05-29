import { Stack, Text } from '@chakra-ui/react';
import { ClaimMetadata } from '../molecules/ClaimMetadata';
import { ClaimHeader } from '../molecules/ClaimHeader';

export const Claim = ({ status, text, badges, metadata, factchecker, id }) => (
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
    <ClaimHeader status={status} factchecker={factchecker} badges={badges} />
    <Stack
      direction="row"
      justify="flex-start"
      align="flex-start"
      spacing="16px"
      alignSelf="stretch"
    >
      <Text
        fontFamily="Inter"
        lineHeight="1.33"
        fontWeight="regular"
        fontSize="12px"
        color="#000000"
        width="678px"
        maxWidth="100%"
      >
        {text}
      </Text>
    </Stack>
    <ClaimMetadata metadata={metadata} status={status} id={id} />
  </Stack>
);
