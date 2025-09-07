const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = 5000;

mongoose.connect('mongodb+srv://abest82_db_user:CVDe7prEmXJJOgGK@cluster0.2vwu18g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`Server is running on port ${port}`));