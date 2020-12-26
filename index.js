const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const port = 3000;


const app = express();

// set handle-bar
const hbs = exphbs.create({
    defaultLayout: 'home',
    extname: 'hbs',
    helpers: {
        ifEqual: function (v1, v2, options) {
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        },
        ifGreater: function (v1, v2, options) {
            v1 = parseInt(v1);
            v2 = parseInt(v2);
            
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        }
    }
});

// set body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// set engine
app.engine('hbs', hbs.engine);
app.set('view engine','hbs');

app.use(express.static(__dirname + "/public"));


// homepage
app.use('/', require('./controllers/home.C'));
// category
app.use('/buffet-lau', require('./controllers/buffet-lau.C'));
app.use('/quan-nuoc-view-dep', require('./controllers/quan-nuoc-view-dep.C'));
app.use('/quan-nuoc-doc-sach', require('./controllers/quan-nuoc-doc-sach.C'));
app.use('/quan-nuoc-hen-ho', require('./controllers/quan-nuoc-hen-ho.C'));
app.use('/quan-nuoc-thu-cung', require('./controllers/quan-nuoc-thu-cung.C'));
app.use('/quan-nuoc-yen-tinh', require('./controllers/quan-nuoc-yen-tinh.C'));

app.use('/megustas-coffee', require('./controllers/megustas-coffee.C'));
app.use('/ban-coffee', require('./controllers/ban-coffee.C'));
app.use('/dop-coffee', require('./controllers/dop-coffee.C'));
app.use('/blanc-coffee', require('./controllers/blanc-coffee.C'));
app.use('/small-coffee', require('./controllers/small-coffee.C'));

app.use('/viet-bai', require('./controllers/vietbai.C'));



// // error
// require('./middleware/error')(app);


// run app
app.listen(port,function(){
    console.log(`Server is running on port ${port}`);
});