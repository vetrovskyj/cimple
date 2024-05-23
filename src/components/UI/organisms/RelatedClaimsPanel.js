import { Stack, Text } from '@chakra-ui/react';
import { RelatedClaim } from '../molecules/RelatedClaim';
import relatedClaims from '../../../mocks/relatedClaims.json';

export const RelatedClaimsPanel = () => (
  <Stack
    direction="row"
    justify="center"
    align="flex-start"
    spacing="16px"
    alignSelf="stretch"
  >
    <Stack
      direction="column"
      justify="flex-start"
      align="flex-start"
      spacing="16px"
      flex="1"
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
        alignSelf="stretch"
        background="#FFFFFF"
      >
        <Stack
          direction="column"
          justify="flex-start"
          align="flex-start"
          spacing="16px"
          alignSelf="stretch"
        >
          <Stack
            direction="column"
            justify="flex-start"
            align="flex-start"
            spacing="0px"
          >
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
                Related claims
              </Text>
            </Stack>
            <Text
              fontFamily="Inter"
              lineHeight="1.33"
              fontWeight="regular"
              fontSize="12px"
              color="#414243"
            >
              Bookmark claims related to your selected statement and fact-check
              all together at once
            </Text>
          </Stack>
          <Stack
            direction="column"
            justify="flex-start"
            align="flex-start"
            spacing="16px"
            alignSelf="stretch"
          >
            {relatedClaims.map(relatedClaim => (
              <RelatedClaim
                id={relatedClaim.id}
                status={relatedClaim.status}
                badges={relatedClaim.badges}
                factchecker={relatedClaim.factchecker}
                text={relatedClaim.text}
                metadata={relatedClaim.metadata}
                related={relatedClaim.related}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
);
