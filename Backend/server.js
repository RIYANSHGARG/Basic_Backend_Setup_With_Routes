const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const { connect } = require("mongoose");

// config
dotenv.config({ path: "Backend/config/config.env" })

// Connecting Database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server is Working on http://localhost:${process.env.PORT}`);
})