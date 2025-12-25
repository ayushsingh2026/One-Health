let express = require('express')
const app = express()
const dotenv = require('dotenv')
const morgan = require('morgan')

const connectDB = require("./config/db");

dotenv.config()

connectDB()


app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "OneHealth Backend API is running 🚀"
  });
});

app.use("/api/v1/patient", require("./routes/patientRoutes"));

const port = process.env.PORT

app.listen(port, ()=>{
  console.log(
    `Server connected ${process.env.NODE_MODE} on port ${process.env.PORT}`
  )
})
