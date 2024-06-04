import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Stack,
  Text,
  Button,
  Icon
} from '@chakra-ui/react';
import {
  BsPlusCircle,
  BsX
} from 'react-icons/bs';
import claims from '../../mocks/claims.json';
import { LoggedInPagesTemplate } from '../templates/LoggedInPagesTemplate';
import { Claim } from '../UI/organisms/Claim';
import { ExpertsPanel } from '../UI/organisms/ExpertsPanel';
import { EvidencePanel } from '../UI/organisms/EvidencePanel';
import { RelatedClaimsPanel } from '../UI/organisms/RelatedClaimsPanel';
import { ResultSuggested } from '../UI/molecules/ResultSuggested';

export const EvidenceRetrievalPage = () => {
  const { id } = useParams();

  const selectedClaim = claims.find(claim => claim.id === Number(id));

  console.log(selectedClaim);

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
          <Text
            fontFamily="Inter"
            lineHeight="1.2"
            fontWeight="bold"
            fontSize="30px"
            color="#000000"
            flex="1"
          >
            Evidence retrieval
          </Text>
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
        <Stack    direction="column"
        justify="flex-start"
        align="center"
        spacing="16px"
        width="748px"
        maxWidth="100%">
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
          <ExpertsPanel />
          <EvidencePanel />
        </Stack>
        <RelatedClaimsPanel />  
        <ResultSuggested claimId={selectedClaim.id} />
      </Stack>
      </Stack>
    </LoggedInPagesTemplate>
  );
};
