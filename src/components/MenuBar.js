import React from 'react';
import { Menu, Flex, MenuItem, MenuList, IconButton, MenuButton } from '@chakra-ui/react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const bars = <FontAwesomeIcon icon={faBars} />;

function MenuBar() {
  return (
    <Flex>
      <Menu>
        <MenuButton mt={30} ml={30} as={IconButton} color="#BBBBC0" size="md" variant="outline">
          {bars}
        </MenuButton>
        <MenuList>
          <MenuItem>Statistics</MenuItem>
          <MenuItem>Payment</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default MenuBar;
