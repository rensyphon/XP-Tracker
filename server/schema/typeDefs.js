//TODO: refactor
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
  }

  type Game {
    gameId: ID!
    description: String!
    title: String!
    genre: String!
    reviews: [Review]!
  }

  type Review {
    _id: ID
    reviewText: String
    reviewAuthor: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    games(username: String!): [Game]
    game(gameId: ID!): Game
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addGame(description: String!, title: String!, genre: String!): Game
    addReview(gameId: ID!, reviewText: String!) Game
    removeReview(gameId: ID!, reviewId: ID!): Game
  }
`;

module.exports = typeDefs;