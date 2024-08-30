const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      user1: process.env.CYPRESS_USER1,
      password1: process.env.CYPRESS_PASSWORD1,
      user2: process.env.CYPRESS_USER2,
      password2: process.env.CYPRESS_PASSWORD2,
    },
  },
});
