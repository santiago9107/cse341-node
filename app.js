const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes =  require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { use } = require('./routes/admin');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((rer, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'Views', '404.html'))
});

app.listen(3000);
