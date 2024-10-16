const express = require('express');
const cors = require('cors');
const fileRoutes = require('./routes/fileRoutes');
const dotenv = require('dotenv');
const path = require('path'); 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// Routes
app.use('/api/files', fileRoutes);

// Route to serve the EJS page
app.get('/', (req, res) => {
  res.render('upload');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
