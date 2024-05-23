import { Stack } from '@chakra-ui/react';
import '../../assets/styles/styles.scss';
import { Sidebar } from '../UI/organisms/Sidebar';

export const LoggedInPagesTemplate = ({ children }) => (
  <Stack direction="row" spacing="0px">
    <Sidebar />
    <Stack
      direction="column"
      justify="flex-start"
      align="flex-start"
      spacing="0px"
      width="100%"
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
        {children}
      </Stack>
    </Stack>
  </Stack>
);
