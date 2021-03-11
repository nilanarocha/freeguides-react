import React from 'react';
import { Menu, Flex, MenuItem, MenuList, IconButton, MenuButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MenuBar() {
  return (
    <Flex>
      <Menu>
        <MenuButton
          mt={30}
          ml={30}
          as={IconButton}
          icon={<FontAwesomeIcon icon={['far', 'faBars']} />}
          size="md"
          variant="outline"
        />
        <MenuList>
          <MenuItem>Statistics</MenuItem>
          <MenuItem>Payment</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default MenuBar;
