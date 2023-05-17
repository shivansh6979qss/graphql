const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const app = express();
const connectDB = require("./db/db");
const PORT = process.env.PORT;
const colors = require("colors");
const schema = require("./schema/schema");

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`APP RUNNING ON ${PORT}`);
});
