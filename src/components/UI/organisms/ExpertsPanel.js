import { Stack, Text } from '@chakra-ui/react';
import { ExpertProfile } from '../molecules/ExpertProfile';
import experts from '../../../mocks/experts.json';

export const ExpertsPanel = () => (
  <Stack
    direction="column"
    justify="flex-start"
    align="flex-start"
    spacing="16px"
    flex="1"
    alignSelf="stretch"
  >
    <Stack
      paddingX="35px"
      paddingY="25px"
      borderRadius="12px"
      direction="column"
      justify="flex-start"
      align="flex-start"
      spacing="16px"
      overflow="hidden"
      flex="1"
      alignSelf="stretch"
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
            Experts in the field of the claim
          </Text>
        </Stack>
      </Stack>
      <Stack
        direction="column"
        justify="flex-start"
        align="flex-start"
        spacing="0"
        alignSelf="stretch"
      >
        {experts.map(expert => (
          <ExpertProfile firstName={expert.firstName} lastName={expert.lastName} email={expert.email} place={expert.place} />
        ))}
      </Stack>
    </Stack>
  </Stack>
);
