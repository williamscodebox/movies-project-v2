const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((error) => {
    res.status(500).json({ message: error.message });
  });
};

// Why the code below is better:

// More flexible: Allows a global error handler to determine how to respond based on the error type.

// Less redundant: No need to explicitly handle response formatting inside the async wrapper.

// Cleaner code: Uses next(error) for better middleware chaining.

// const asyncHandler = (fn) => (req, res, next) => {
//     Promise.resolve(fn(req, res, next))
//         .catch(next); // Pass errors to centralized error middleware
// };

export default asyncHandler;
