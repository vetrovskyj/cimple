import { Stack, Text, Icon } from '@chakra-ui/react';
import { BsStar } from 'react-icons/bs';
import { AvatarAtom } from '../atoms/AvatarAtom';
import users from '../../../mocks/users.json';

const user = users.find(user => user.id === 1);

export const UserProfile = () => (
  <Stack direction="row" justify="flex-start" align="center" spacing="12px">
    <AvatarAtom firstName={user.firstName} lastName={user.lastName} />
    <Stack
      direction="column"
      justify="flex-start"
      align="flex-start"
      spacing="0px"
    >
      <Text
        fontFamily="Inter"
        lineHeight="1.5"
        fontWeight="regular"
        fontSize="16px"
        color="#000000"
        textAlign="center"
      >
        {user.firstName + ' ' + user.lastName}
      </Text>
      <Text
        fontFamily="Inter"
        lineHeight="1.33"
        fontWeight="regular"
        fontSize="12px"
        color="#414243"
        textAlign="center"
      >
        {user.role}
      </Text>
    </Stack>
  </Stack>
);
