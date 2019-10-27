const port = 80;
const express = require('express') 
const app = express();
const ejs = require('ejs')
const path = require('path')




app.engine('html', ejs.renderFile)
app.set('view engine', 'html')
app.use(express.static('client'))
app.use(express.static(path.join(__dirname, 'client')));


app.get('/', (req, res) => { 
  res.render('index')
});

app.get('/morning', (req, res) => { 
  res.render('../client/morning')
});

app.get('/afternoon', (req, res) => { 
  res.render('../client/afternoon')
});

app.get('/evening', (req, res) => { 
  res.render('../client/evening')
});


app.listen(port, () => { 
  console.log('ok on ' + port)
});