const resolvers = {
    Query: {
      helloWorld: () => {
        return 'This worked!';
      }
    }
  };
  
  module.exports = resolvers;