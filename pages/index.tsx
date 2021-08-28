import React, { useState } from "react";
import { Button, Htag, P, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { GetStaticProps } from "next";
import { MenuItem } from "../interfaces/menu.interface";

function Home( { menu }: HomeProps ): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  
  return (<>
            <Htag tag='h1'>Текст</Htag>
            <Htag tag='h2'>Текст</Htag>
            <Htag tag='h3'>Текст</Htag>
            <Button apearence='primery' arrow='right'>Кнопка</Button>
            <Button apearence='ghost' arrow='down'>Кнопка</Button>
            <P>Параграф базового размера</P>
            <P size='mid'>Параграф среднего размера</P>
            <P size='big'>Параграф большого размера</P>
            <Tag size='s'>Ghost</Tag>
            <Tag size='m' color='grey'>10</Tag>
            <Tag size='m' color='green'>-10 000 P</Tag>
            <Tag size='m' color='red'>hh.ru</Tag>
            <Tag size='s' color='primery'>primery</Tag>
            <Tag size='s' color='primery' href='#'>with href</Tag>
            <Rating rating={4} />
            <Rating rating={rating} isEditeble setRaiting={setRating} />
        </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory});

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}