const port = 80;
const express = require('express') 
const app = express();
const ejs = require('ejs')
const path = require('path')




app.engine('html', ejs.renderFile)
app.set('view engine', 'html')
app.use(express.static('client'))
app.use(express.static(path.join(__dirname, 'client')));

let user = 'unauthorized'

app.get('/', (req, res) => { 
  if (req.query.user && req.query.user === 'authorized') {
    res.render('index')
  }
  else {
    res.send('401! Unauthorized').end()
  }
  
});

app.get('/morning', (req, res) => { 
  if (req.query.user && req.query.user === 'authorized') {
    res.render('../client/morning')
  }
  else {
    res.send('401! Unauthorized').end()
  }
  
});

app.get('/afternoon', (req, res) => { 
  if (req.query.user && req.query.user === 'authorized') {
    res.render('../client/afternoon')
  }
  else {
    res.send('401! Unauthorized').end()
  }
  
});

app.get('/evening', (req, res) => { 
  if (req.query.user && req.query.user === 'authorized') {
    res.render('../client/evening')
  }
  else {
    res.send('401! Unauthorized').end()
  }
  
});


app.listen(port, () => { 
  console.log('ok on ' + port)
});