import React from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Text, Button, Icon, Box } from '@chakra-ui/react';
import { BsPlusCircle, BsX } from 'react-icons/bs';
import claims from '../../mocks/claims.json';
import { LoggedInPagesTemplate } from '../templates/LoggedInPagesTemplate';
import { Claim } from '../UI/organisms/Claim';
import { SelectedRelatedClaimsPanel } from '../UI/organisms/SelectedRelatedClaimsPanel';
import { SelectedEvidencePanel } from '../UI/organisms/SelectedEvidencePanel ';
import { ResultPanel } from '../UI/organisms/ResultPanel';

export const SummarizationPage = () => {
  const { id } = useParams();

  const selectedClaim = claims.find(claim => claim.id === Number(id));

  return (
    <LoggedInPagesTemplate>
      <Stack
        direction="column"
        justify="flex-start"
        align="center"
        spacing="32px"
        width="748px"
        maxWidth="100%"
      >
        <Stack
          direction="row"
          justify="center"
          align="center"
          spacing="16px"
          width="748px"
          maxWidth="100%"
        >
          <Stack
            direction="column"
            justify="center"
            align="flex-start"
            spacing="0px"
            flex="1"
          >
            <Text
              fontFamily="Inter"
              lineHeight="1.2"
              fontWeight="bold"
              fontSize="30px"
              color="#000000"
              width="388px"
              maxWidth="100%"
            >
              Summarization
            </Text>
            <Stack
              direction="row"
              justify="flex-start"
              align="center"
              spacing="4px"
            >
              <Text
                fontFamily="Inter"
                lineHeight="1.78"
                fontWeight="regular"
                fontSize="9px"
                color="#414243"
              >
                <Box as="span">
                  Evidence retrieval {"> "} 
                </Box>
                <Box as="span" color="#2B6CB0">
                  Summarization
                </Box>
              </Text>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            justify="flex-end"
            align="center"
            spacing="8px"
          >
            <Button
              rightIcon={<Icon as={BsPlusCircle} />}
              size="sm"
              variant="solid"
              colorScheme="blue"
            >
              Invite
            </Button>
            <Button
              rightIcon={<Icon as={BsX} />}
              size="sm"
              variant="outline"
              colorScheme="blue"
            >
              Unassign this claim
            </Button>
          </Stack>
        </Stack>
        <Stack
          direction="column"
          justify="flex-start"
          align="center"
          spacing="16px"
          width="748px"
          maxWidth="100%"
        >
          <Stack
            direction="column"
            justify="flex-start"
            align="flex-start"
            spacing="16px"
          >
            {selectedClaim ? (
              <Claim
                status={'selected'}
                text={selectedClaim.text}
                badges={selectedClaim.badges}
                metadata={selectedClaim.metadata}
                id={selectedClaim.id}
              />
            ) : (
              <Text>Claim not found</Text>
            )}
          </Stack>
          <Stack
            direction="row"
            justify="center"
            align="flex-start"
            spacing="16px"
            alignSelf="stretch"
          >
            <SelectedRelatedClaimsPanel />
            <SelectedEvidencePanel />
          </Stack>
          <ResultPanel />
        </Stack>
      </Stack>
    </LoggedInPagesTemplate>
  );
};
