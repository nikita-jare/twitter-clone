import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import express from 'express';
import {User} from "./user"

export async function initServer(){
    const app = express();

    app.use(bodyParser.json());

    const graphQLserver = new ApolloServer({
        typeDefs: `
            ${User.types}
            type Query {
                ${User.queries}
            }
        `,
        resolvers: {
            Query: {
                ...User.resolvers.queries,
            },
        },
    });

    await graphQLserver.start();

    app.use("/graphql", expressMiddleware(graphQLserver));

    return app
}