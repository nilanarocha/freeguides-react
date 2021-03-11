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
    <Grid h="200px" templateRows="repeat(4, 1fr)">
      <GridItem>{americanexpress}</GridItem>
      <GridItem>{mastercard}</GridItem>
      <GridItem>{visa}</GridItem>
    </Grid>
  );
}

export default Icons;
