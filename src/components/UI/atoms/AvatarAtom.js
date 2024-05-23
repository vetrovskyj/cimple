import { Avatar } from '@chakra-ui/react';

export const AvatarAtom = ({ firstName, lastName }) => {
  let fullName = ''
  if (firstName && lastName) {
    fullName = firstName + ' ' + lastName;
  } else {
    console.log('Name not found');
  }
  return (
    <Avatar
      name={fullName}
      src=""
      bg="#BEE3F8"
      color="#414243"
      size="md"
      width="48px"
      height="48px"
    />
  );
};
