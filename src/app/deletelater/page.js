import React from "react";
import client from "../../../tina/__generated__/client";
import ClientPage from "./client-page";

export default async function Page() {
    const response = await client.queries.creationConnection();
    const creations = response.data?.creationConnection.edges.map((creation) => ({
        title: creation.node.title,
        game: creation.node.game,
        type: creation.node.type,
        status: creation.node.status,
        tagline: creation.node.tagline,
        description: creation.node.description,
        art: {
            box: creation.node.box,
            cover: creation.node.cover
        }
    }));
    //console.log(creations);

    return (
        <ClientPage creations={creations}></ClientPage>
    );
}