require('dotenv').config();
const express = require('express');
const multer = require('multer');
const connectDB = require('./config/database');
const { uploadFile } = require('./controllers/cloudinaryController');
const { verifyToken } = require('./middlewares/auth');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.post('/api/upload', verifyToken, upload.single('file'), uploadFile);

// Protected route example
app.get('/api/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Access granted' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

