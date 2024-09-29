const express = require('express')
const mongoose = require('mongoose')
const mainRouter = require("./routes/user.route")
const cors = require("cors")

require('dotenv').config(); 

const app = express()

const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use('/api',mainRouter)


mongoose
.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(PORT, () =>
    console.log(`DB is connected and server is active at ${PORT}`)
  );
})
.catch((err) => {
  console.log(err);
});
