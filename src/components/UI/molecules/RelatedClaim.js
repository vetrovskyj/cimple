import { Stack, Text } from '@chakra-ui/react';
import { ClaimHeader } from './ClaimHeader';
import { ClaimMetadata } from './ClaimMetadata';

export const RelatedClaim = ({
  status,
  text,
  badges,
  metadata,
  factchecker,
  id,
  isSelectedRelatedClaims,
  onRelatedClaimsSelectionToggle,
  related
}) => (
  <Stack
    paddingY="16px"
    _notLast={{ borderBottom: '1px', borderColor: '#E2E8F0' }}
    _first={{ paddingTop: '0px' }}
    width="100%"
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
        maxWidth="100%"
        noOfLines={3}
      >
        {text}
      </Text>
    </Stack>
    <ClaimMetadata metadata={metadata} status={status} id={id} related={related} onRelatedClaimsSelectionToggle={onRelatedClaimsSelectionToggle} isSelectedRelatedClaims={isSelectedRelatedClaims} />
  </Stack>
);
