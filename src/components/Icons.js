import React from 'react';
import { Grid, GridItem, Badge } from '@chakra-ui/react';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcAmex } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const visa = <FontAwesomeIcon icon={faCcVisa} />;
const mastercard = <FontAwesomeIcon icon={faCcMastercard} />;
const americanexpress = <FontAwesomeIcon icon={faCcAmex} />;

function Icons() {
  return (
    <Grid padding="15px" mt="10px" mb="30px" spacing={3} templateColumns="repeat(4, 1fr)">
      <GridItem padding="15px">
        <Badge
          variant="outline"
          colorScheme="gray"
          color="#818181"
          bg="#ffff"
          fontSize="0.70em"
          position="relative"
        >
          Powered by Stripe
        </Badge>
      </GridItem>

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
