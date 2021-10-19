module.exports = {
  plugins: ["@snowpack/plugin-dotenv"],
  devOptions: {
    number: process.env.PORT || 3000,
  },
};
