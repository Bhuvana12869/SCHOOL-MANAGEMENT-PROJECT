// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const adminRoutes = require('./routes/AdminRoute');
const teacherRoutes = require('./routes/TeacherRoute');
const parentRoutes = require('./routes/ParentRoute');
const studentRoutes = require('./routes/StudentRoute'); // Import student routes
const classRoutes=require('./routes/ClassRoute')
const gradeRoutes=require('./routes/GradeRoute')
const academicRoutes=require('./routes/AcademicRoute')
const staffRoutes=require('./routes/staffRoutes')
const feesRoutes=require('./routes/FeeRoute')
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/Project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err.message);
});

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/admin', adminRoutes);
app.use('/teachers', teacherRoutes);
app.use('/parents', parentRoutes);
app.use('/students', studentRoutes); // Use student routes
app.use('/classes', classRoutes);
app.use('/grades',gradeRoutes);
app.use('/academic',academicRoutes);
app.use('/staff',staffRoutes);
app.use('/fees',feesRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
