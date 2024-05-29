import { Stack, Icon, Text } from '@chakra-ui/react';
import { BsCheckCircle, BsQuestionCircle, BsXCircle, BsPencil } from 'react-icons/bs'; 
import { ReactComponent as WipIcon } from '../../../assets/icons/wip.svg';

export const ClaimVerdictPreview = ({ status }) => {

    let iconComponent;
    let verdictText;
    let verdictColor;
  
    if (status === "true") {
      iconComponent = <Icon as={BsCheckCircle} />;
      verdictText = "True";
      verdictColor = "#319795";
    } else if (status === "false") {
      iconComponent = <Icon as={BsXCircle} />;
      verdictText = "False";
      verdictColor = "#AC1212";
    } else if (status === "wip") {
      iconComponent = <WipIcon />;
      verdictText = "Currently being checked";
      verdictColor = "#2B6CB0";
    } else if (status === "not-checked") {
      iconComponent = <Icon as={BsQuestionCircle} />;
      verdictText = "Not checked";
      verdictColor = "#ECC94B";
    } else if (status === "selected") {
      iconComponent = <Icon as={BsPencil} />;
      verdictText = "Selected claim";
      verdictColor = "#2B6CB0";
    } else {
      iconComponent = null;
    }

  return (
    <Stack direction="row" justify="flex-start" align="center" spacing="8px">
      {iconComponent}
      <Text
        fontFamily="Inter"
        lineHeight="1.43"
        fontWeight="semibold"
        fontSize="14px"
        color={verdictColor}
      >
        {verdictText}
      </Text>
    </Stack>
  );
};
