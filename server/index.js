const { ApolloServer, gql } = require('apollo-server');

const books = [
    {
      title: 'The Awakening',
      author: {
          name: 'abc',
          books: ['first','second']
      },
      isbn: 123
    },
    {
      title: 'City of Glass',
      author: {
        name: 'def',
        books: ['first','second']
    },
    isbn: 456
    },
  ];

const typeDefs = gql`
  type Book {
    title: String
    author: Author
    isbn: Int
  }

  type Author {
      name: String
      books: [String]
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
    Query: {
      books: () => books,
    },
  };

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
});
  
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });