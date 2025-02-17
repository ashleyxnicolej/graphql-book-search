import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';
import { authMiddleware } from './utils/auth';
import { typeDefs, resolvers } from './schemas';

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`🌍 Now listening on localhost:${PORT}`);
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});