const express = require('express')
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config()
const connectDB = require('./config/dbConnections');
const app = express();
const port = process.env.PORT || 3000;
connectDB();


//app.use(express.static('public'));
app.use(express.json());
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/logs', require('./routes/logRoutes'));
app.use('/api/tracker', require('./routes/trackerRoutes'));
app.use('/api/journal', require('./routes/journalRoutes'));
app.use('/api/tips', require('./routes/tipsRoutes'));
app.use('/api/resources', require('./routes/resourcesRoutes'));
app.use('/api/community', require('./routes/communityRoutes')); 
app.use('/api/crisis', require('./routes/crisisRoutes'));
app.use('/api/progress', require('./routes/progressRoutes'));

//app.use(require('./routes/publicRoutes')); FOR STATIC FILES , UI

app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});