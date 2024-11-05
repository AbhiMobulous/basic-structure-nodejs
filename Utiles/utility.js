// Utility function to send response
const sendResponse = (res, { data = null, message = 'Operation completed', status = 'success', statusCode = 200 }) => {
    res.status(statusCode).json({
        status: status,
        message: message,
        data: data
    });
};

module.exports = sendResponse;