import { Stack, Icon, Text, Badge, Box, Link } from '@chakra-ui/react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { ClaimVerdictPreview } from '../atoms/ClaimVerdictPreview';

export const ClaimHeader = ({ status, factchecker, badges }) => (
  <Stack
    direction="column"
    justify="flex-start"
    align="flex-start"
    spacing="4px"
  >
    <Stack
      direction="column"
      justify="flex-start"
      align="flex-start"
      spacing="4px"
    >
      <Stack
        direction="row"
        justify="space-between"
        align="center"
        spacing="10px"
        width="678px"
        maxWidth="100%"
      >
        <ClaimVerdictPreview status={status} />
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
            spacing="8px"
          >
            {badges.map(badge => (
              <Badge>{badge}</Badge>
            ))}
          </Stack>
          <Icon as={BsBoxArrowUpRight} />
        </Stack>
      </Stack>
    </Stack>
    {status === 'not-checked' ? null : (
      <Text
        fontFamily="Inter"
        lineHeight="1.33"
        fontWeight="regular"
        fontSize="12px"
        color="#414243"
      >
        <span>Checked by </span>
        <Link color="#2B6CB0">{factchecker}</Link>
        <Box as="span"> </Box>
      </Text>
    )}
  </Stack>
);
