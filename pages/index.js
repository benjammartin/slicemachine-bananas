import { Client } from '../prismic';
import SliceZone from 'next-slicezone';

import resolver from '../sm-resolver.js';
import Layout from '../modules/layout';

const Index = ({ slices, layout }) => (
  <Layout layout={layout}>
    <SliceZone slices={slices} resolver={resolver} />
  </Layout>
);

export const getStaticProps = async () => {
  const client = Client();
  const slices = (await client.getSingle('homepage')) || {};
  const menu = (await client.getSingle('layout')) || {};
  return { props: { slices: slices.data.body, layout: menu } };
};
export default Index;
