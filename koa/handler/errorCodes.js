const errorCodes = {
  40101: {
    reason: "NoUser",
    message: "User doesn't exists. Please check your credentials.",
  },
  40102: {
    reason: "InvalidPassword",
    message: "Invalid password. Please try again.",
  },
  40125: {
    reason: "PasswordValidationError",
    message: "Wrong password.",
  },
  40401: {
    reason: "NotFound",
    message: "User not found",
  },
  40901: {
    reason: "ConflictAuthUser",
    message: "User is already exists",
  },
  50001: {
    reason: "UnknownError",
    message: "An unknown error occurred.",
  },
};

module.exports = { errorCodes };
