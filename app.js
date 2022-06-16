const express = require('express');
const app = express();
//above lines to setup express js.
//adding or making available controller operations in this file so that we get everything that is stored in this module.
const todocontroller = require('./controllers/todocontroller');
//now going to set ejs for template engine.
app.set('view engine', 'ejs');
//now we want to be able to serve static files so we use express middleware called express static.
// app.use('/assets', express.static('./public'));
//so from above in assets folder it is going to map to the static file .
//but the above code will make it path or route specific.
//to not to make it route-specific use -->
app.use(express.static('./public'));
//now add a port no. here app listens to port no. 3000
//controllers
todocontroller(app); //through this we return the functions from controllers.
app.listen(3000);
console.log('You are listening to port 3000.')