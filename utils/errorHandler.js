/**
 * Custom error handler
 */
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Handle errors in a consistent way
 */
const handleError = (err, res) => {
  const { statusCode = 500, message } = err;
  
  res.status(statusCode).json({
    status: err.status || 'error',
    message: message || 'An unexpected error occurred'
  });
};

module.exports = {
  AppError,
  handleError
};