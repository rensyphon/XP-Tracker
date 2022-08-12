//TODO: refactor

import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_GAME = gql`
  mutation saveGame($addGame: savedGame!) {
    saveGame(addGame: $addGame) {
      _id
      username
      email
      gameCount
      savedGames {
        authors
        description
        gameId
        image
        link
        title
      }
    }
  }
`;

export const REMOVE_GAME = gql`
mutation removeGame($gameId: ID!) {
    removeGame(gameId: $gameId) {
      username
      email
      gameCount
      savedGames {
        authors
        description
        gameId
        image
        link
        title
      }
    } 
  }
`;
