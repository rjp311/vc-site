import React from "react";
import client from "../../../tina/__generated__/client";
import ClientPage from "./client-page";

import { notFound } from 'next/navigation';

export default async function Page({ params }) {
    let filename = params.filename.join('/')

    if (!params.filename) {
        notFound();
    }

    let data
    try {
        data = await client.queries.page({
            relativePath: `/${filename}.md`,
        });
    } catch (e) {
        notFound();
    }

    if (!data || data.errors?.length > 0) {
        notFound();
    }

    return (
        <ClientPage {...data}></ClientPage>
    );
}

export async function generateMetadata({ params }) {
    const filename = params.filename?.join('/');

    if (!filename) {
        return {
            title: "Sorry, we couldn't find what you're looking for!"
        }
    }

    let page
    try {
        page = await client.queries.page({
            relativePath: `/${filename}.md`,
        });
    } catch (e) {
        return {
            title: "Sorry, we couldn't find what you're looking for!"
        }
    }

    if (filename == 'home') {
        return {
            title: {
                absolute: page.data?.page.meta_title,
            },
            description: page.data?.page.meta_desc
        }
    }
    
    const meta = {
        title: page.data?.page.meta_title,
        description: page.data?.page.meta_desc
    }

    return meta;
}

export async function generateStaticParams() {
    const pages = await client.queries.pageConnection();
    const paths = pages.data?.pageConnection.edges.map((edge) => ({
        filename: edge.node._sys.breadcrumbs,
    }));

    return paths || [];
}