import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";
import { Box, Container } from "theme-ui";

const MySlice = ({ slice }) => (
  <Box bg="pink">
    <Container sx={{ textAlign: "center" }} variant="slice">
      <RichText render={slice.primary.title} />
      <RichText render={slice.primary.description} />
    </Container>
  </Box>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
