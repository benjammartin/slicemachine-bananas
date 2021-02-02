import { Client } from "../prismic";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";
import { Box, Container } from "theme-ui";

const Index = (props) => <SliceZone {...props} resolver={resolver} />;

export const getStaticProps = useGetStaticProps({
  client: Client(),
  queryType: "single",
  type: "homepage",
});

export default Index;
