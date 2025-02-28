module.exports = {
    // Other configurations...
    devServer: {
      setupMiddlewares: (middlewares, devServer) => {
        // Custom middleware logic
        // You can access devServer here and add any necessary middleware
        // Example:
        // middlewares.unshift(/* your middleware here */);
  
        // Return the middlewares array
        return middlewares;
      },
      // Other devServer options
    },
  };
  