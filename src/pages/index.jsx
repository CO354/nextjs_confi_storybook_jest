import Head from 'next/head';
import P from 'prop-types';
import { styled } from 'styled-components';
import config from '../config';
import { mapData } from '../api/map-data';
import { Home } from '../templates/Home';
// import Head from 'next/head';
export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  const raw = await fetch(config.url + config.defaultSlug);
  const json = await raw.json();
  const data = mapData(json)[0];
  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.object,
};
