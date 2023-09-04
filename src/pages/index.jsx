import Head from 'next/head';
import P from 'prop-types';
import { styled } from 'styled-components';
import config from '../config';
import { mapData } from '../api/map-data';
import { Home } from '../templates/Home';
import { loadPages } from '../api/load-pages';
// import Head from 'next/head';
export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {

  let data = null

  try {
   data = await loadPages('aqui_slug_da_pagina')
  } catch (e) {
    if(!data || !data.length)
    return {
      notFound: true
    }
  }


  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.object,
};
