module.exports = {
  mount: {
    // directory name: 'build directory'
    public: "/",
    src: "/dist",
  },
  plugins: ["@snowpack/plugin-dotenv"],
  devOptions: {
    number: process.env.PORT || 3000,
  },
};
