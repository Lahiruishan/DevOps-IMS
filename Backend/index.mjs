import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000' // Allow only your frontend URL
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Sample route to check if server is working
app.get("/", (req, res) => res.send("Server is ready"));

// Define the server port
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
