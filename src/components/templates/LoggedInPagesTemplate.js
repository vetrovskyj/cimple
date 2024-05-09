import { Stack } from '@chakra-ui/react';
import { UserProfile } from '../UI/molecules/UserProfile';
import { ReactComponent as Logo } from '../../assets/logo/logo.svg';
import '../../assets/styles/styles.scss';

export const LoggedInPagesTemplate = ({children}) => (
  <Stack
    direction="column"
    justify="flex-start"
    align="flex-start"
    spacing="0px"
  >
    <Stack
      paddingX="202px"
      paddingY="32px"
      direction="column"
      justify="flex-start"
      align="center"
      spacing="32px"
      overflow="hidden"
      background="#F7FAFC"
      width="100%"
    >
      <Stack
        direction="row"
        justify="space-between"
        align="center"
        width="100%"
      >
        <Logo alt="Cimple logo" className="logo" />
        <UserProfile />
      </Stack>
      {children}
    </Stack>
  </Stack>
);
