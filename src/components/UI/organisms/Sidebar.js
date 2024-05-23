import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link as ChakraLink,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { BsHouse, BsCompass, BsList } from 'react-icons/bs';
import { ReactComponent as Logo } from '../../../assets/logo/logo.svg';
import { UserProfile } from '../molecules/UserProfile';
import { route } from '../../../routesDefinition';
import { Link } from 'react-router-dom';

const LinkItems = [
  { name: 'All Claims', icon: BsHouse, href: route.claimsOverview() },
  { name: 'Claim Finder', icon: BsCompass, href: route.claimsDetection() },
];

export const Sidebar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack minH="100vh" direction="column" alignItems="center">
      <SidebarContent
        onClose={onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </Stack>
  );
};

function SidebarContent({ onClose, ...rest }) {
  const sidebarClass = useBreakpointValue({
    base: null,
    md: 'sidebar-content',
  });
  return (
    <Stack
      className={sidebarClass}
      bg={useColorModeValue('white', 'gray.900')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      direction="column"
      justifyContent="space-between"
      {...rest}
      paddingY="32px"
    >
      <Stack spacing="32px">
        <Flex alignItems="center" justifyContent="space-between">
          <Logo alt="Cimple logo" className="logo" />
          <CloseButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onClose}
          />
        </Flex>
        <Stack spacing={0}>
          {LinkItems.map(link => (
            <NavItem key={link.name} icon={link.icon} link={link.href}>
              {link.name}
            </NavItem>
          ))}
        </Stack>
      </Stack>
      <UserProfile />
    </Stack>
  );
}

function NavItem({ icon, link, children, ...rest }) {
  return (
    <ChakraLink
      as={Link}
      to={link}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        mx="-16px"
        p="16px"
        align="center"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#2B6CB0',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            strokeWidth="0.3px"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </ChakraLink>
  );
}

function MobileNav({ onOpen, ...rest }) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<BsList />}
      />
      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
}
