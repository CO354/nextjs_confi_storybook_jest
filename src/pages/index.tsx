import Home from '../templates/Home';
import { loadPages } from '../api/load-pages';
import { GetStaticProps } from 'next';
const a = 6;
export type IndexProps = {
  data: [];
};

export default function Index({ data = null }: IndexProps) {
  return <Home data={data} />;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  let data = null;

  try {
    data = await loadPages('aqui_slug_da_pagina');
  } catch (e) {
    if (!data || !data.length)
      return {
        notFound: true,
      };
  }

  return {
    props: {
      data,
    },
  };
};
