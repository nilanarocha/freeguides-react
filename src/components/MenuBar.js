import React from 'react';
import { Menu, MenuItem, MenuList, IconButton, MenuButton, Center } from '@chakra-ui/react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const bars = <FontAwesomeIcon icon={faBars} />;

function MenuBar() {
  return (
    <Menu>
      <MenuButton mt={30} ml={30} as={IconButton} color="#BBBBC0" size="md" variant="outline">
        {bars}
      </MenuButton>
      <Center>
        <MenuList>
          <MenuItem>Statistics</MenuItem>
          <MenuItem>Payment</MenuItem>
        </MenuList>
      </Center>
    </Menu>
  );
}

export default MenuBar;
