import React from 'react';
import { chakra, useColorModeValue, Flex, Button } from '@chakra-ui/react';
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
            <chakra.a href="/posts" title="Choc Home Page" display="flex" alignItems="center">
              <Logo />
            </chakra.a>
          </Flex>
          <Button colorScheme="teal" size="sm" onClick={onOpen}>
            New Post
          </Button>
        </Flex>
      </chakra.header>

      <AddPostForm isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
