const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT || 4000);

//Middlesware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res, next)=>{
    next();
});

app.use(require('./routes/index.routes'));


app.listen(app.get('port'), ()=> console.log(`Runnin on port ${app.get('port')}`))