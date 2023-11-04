import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import express from 'express';

export async function initServer(){
    const app = express();

    app.use(bodyParser.json());

    const graphQLserver = new ApolloServer({
        typeDefs: `
            type Query {
                sayHello: String
                sayHelloToMe(name: String!): String
            }
        `,
        resolvers: {
            Query: {
                sayHello: () => `Hello from GraphQL Server`,
                sayHelloToMe: (parent: any, {name}:{name:String}) => `Hey ${name}`
            },
        },
    });

    await graphQLserver.start();

    app.use("/graphql", expressMiddleware(graphQLserver));

    return app
}