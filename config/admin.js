module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6d05144d91da483f887e66b73771c916'),
  },
});
