import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcAmex } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const visa = <FontAwesomeIcon icon={faCcVisa} />;
const mastercard = <FontAwesomeIcon icon={faCcMastercard} />;
const americanexpress = <FontAwesomeIcon icon={faCcAmex} />;

function Icons() {
  return (
    <Grid padding="15px" ml="90px" spacing={2} templateColumns="repeat(3, 1fr)">
      <GridItem fontSize="2rem" color="#818181">
        {visa}
      </GridItem>
      <GridItem fontSize="2rem" color="#818181">
        {mastercard}
      </GridItem>
      <GridItem fontSize="2rem" color="#818181">
        {americanexpress}
      </GridItem>
    </Grid>
  );
}

export default Icons;
