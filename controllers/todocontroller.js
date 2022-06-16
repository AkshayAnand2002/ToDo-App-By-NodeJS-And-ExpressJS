//creation of routes and views for todo list can be done through controller so that work does get messy if we do everything in 1 file.  
let data = [{ item: 'Feed the Dog' }, { item: 'Learn Node JS' }, { item: 'Go Shopping' }];
const bodyParser = require('body-parser'); //to access the data sent to us in the post request.
const urlencodedParser = bodyParser.urlencoded({ extended: false }); //middleware that we want to run in the postrequest.
module.exports = (app) => {
    //now creating routes.i.e making handlers for different requests we are going to get. we will also need handlers for post requests.
    app.get('/todo', (req, res) => {
        res.render('todo', { todos: data });
        //passing the 2nd parameter which is an object whcih gets passed to the view that we render it.
        //above data passed into view with property name todo.
    });
    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body); //for adding a new data we required to the array.
        res.json(data); //send this data directly to front-end.
    });
    //to let users delete items from the list we need to handle a delete request.
    // app.delete('/todo/:item', (req, res) => {
    //     data = data.filter((todo) => todo.item.replace(/ /g, "-") !== req.params.item);
    //     //for deletion in this program use this line of code 
    //     //using a method called filter on data .
    //     //we are firing functions and cycling through these objects and each one will be referenced as todo.
    //     //The above statement returns true or false and if it is true then the item remains in the array.
    //     //if false then the item comes out of the array.
    //     res.json(data);
    // });
}; //calling modules which can be imported in app.js file.
//parameter app passed in function above.