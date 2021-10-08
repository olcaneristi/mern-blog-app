import React from 'react';
import { chakra, useColorModeValue, Flex, Button, Link } from '@chakra-ui/react';
import Logo from '../images/Logo';
import AddPostForm from './AddPostForm';
import { useDisclosure } from '@chakra-ui/hooks';

const Header = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <chakra.header bg={bg} w="full" px={5} py={1} shadow="md" mx="auto">
        <Flex align="center" justify="space-between" mx="auto" maxW="1420px">
          <Flex>
            <chakra.a href={'/'} title="Choc Home Page" display="flex" alignItems="center">
              <Logo />
            </chakra.a>
          </Flex>
          <Flex align="center">
            <Link
              display="block"
              color={useColorModeValue('gray.800', 'white')}
              fontWeight="bold"
              fontSize="lg"
              href={'/posts'}
              px={2}
              py={1}
              rounded={'md'}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
              }}
            >
              Posts
            </Link>
            <Button ml="10" colorScheme="teal" size="sm" onClick={onOpen}>
              New Post
            </Button>
          </Flex>
        </Flex>
      </chakra.header>

      <AddPostForm isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
