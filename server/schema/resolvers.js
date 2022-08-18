//TODO: refactor

const { AuthenticationError } = require('apollo-server-express');
const { Game } = require('../models/Game');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        return userData;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, {username, email, password}) => {
      const user = await User.create({username, email, password});
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    // add games or remove game?
    saveGame: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user.Game},
          { $addToSet: { savedGames: input } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
    // this addGame resolver works but it doesnt have any login authentication functionality
    // addGame: async (parent, { description, title, genre }) => {
    //   return Game.create({ description, title, genre});
    //   },
     addGame: async (parent, { description, title, genre }, context) => {
       if (context.user) {
         const newGame = await Game.create({
           description,
           title,
           genre
         });

         return newGame;
       }
       throw new AuthenticationError('You need to be logged in!');
     },

      removeGame: async (parent, { gameId }) => {
        return Game.findOneAndDelete({ _id: gameId});
      },

     //removeSavedGame: async (parent, args, context) => {
     //  if (context.user) {
    //     const updatedUser = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { savedGames: { gameId: args.gameId } } },
    //       { new: true }
    //     );
    //     return updatedUser;
    //   }
    //   throw new AuthenticationError('You need to be logged in!')
    // },

    addReview: async (parent, { gameId, reviewText }, context) => {
      if (context.user) {
        return Game.findByIdAndUpdate(
          {_id: gameId },
          {
            $addToSet: {
              review: { reviewText, reviewAuthor: context.user.username },   
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

     removeReview: async (parent, args, context) => {
       if (context.user){
         const updatedGame = await Game.findOneAndUpdate(
           {_id: context.gameId },
          { $pull: { review: { _id: args.reviewId } } },
          { new: true }
       );
       return updatedGame;
      }
       throw new AuthenticationError('You need to be logged in!')
     },
  },
};

module.exports = resolvers;