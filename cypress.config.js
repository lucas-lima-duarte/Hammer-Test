const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const { Client } = require('pg')

module.exports = defineConfig({

  e2e: {

    async setupNodeEvents(on, config) {

      on("task", {
        async Query(query){
          const client = new Client({
            user: "postgres",
            password: "",
            host: "",
            database: "postgres",
            ssl: false,
            port: 5432
          })
          await client.connect()
          const res = await client.query(query)
          await client.end()
          return res.rows;
        }
      })

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)]
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;

    },
    specPattern:  'cypress/features/**/*.{feature,spec.ts}',
    viewportHeight: 800,
    viewportWidth: 1280,
    responseTimeout: 60000 
  },
});
