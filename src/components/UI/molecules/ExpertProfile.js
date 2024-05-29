import { Stack, Text, Box } from '@chakra-ui/react';
import { AvatarAtom } from '../atoms/AvatarAtom';

export const ExpertProfile = ({ firstName, lastName, email, place }) => (
  <Stack
    direction="row"
    justify="flex-start"
    align="center"
    spacing="12px"
    width="296px"
    maxWidth="100%"
    paddingY="16px"
    _notLast={{borderBottom: "1px", borderColor: "#E2E8F0"}}
    _first={{ paddingTop: '0px' }}
  >
    <AvatarAtom
      firstName={firstName}
      lastName={lastName}
      src=" "
      size="md"
      width="48px"
      height="48px"
    />
    <Stack
      direction="column"
      justify="flex-start"
      align="flex-start"
      spacing="0px"
    >
      <Stack direction="row" justify="flex-start" align="center" spacing="6px">
        <Text
          fontFamily="Inter"
          lineHeight="1.33"
          fontWeight="semibold"
          fontSize="12px"
          color="#000000"
          textAlign="center"
        >
          {firstName + ' ' + lastName}
        </Text>
      </Stack>
      <Text
        fontFamily="Inter"
        lineHeight="1.33"
        fontWeight="regular"
        fontSize="12px"
        color="#414243"
        textAlign="center"
      >
        {email}
      </Text>
      <Text
        fontFamily="Inter"
        lineHeight="1.33"
        fontWeight="regular"
        fontSize="12px"
        color="#414243"
        textAlign="center"
      >
        {place}
      </Text>
    </Stack>
  </Stack>
);
