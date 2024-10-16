'use client';

import { useTina } from "tinacms/dist/react";
import { Blocks } from "../../components/blocks";

export default function ClientPage(props) {
  const { data } = useTina({...props});
  
  return (
    <main>
        <Blocks {...data?.page} />
    </main>
  )
}