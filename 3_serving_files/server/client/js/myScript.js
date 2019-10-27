$(document).ready( async function() {
  try {
    function index() {
      alert('Hello!')
    }


    $('.morning').on('click', function() {
      window.location.replace('morning')
    })

    $('.afternoon').on('click', function() {
      window.location.replace('afternoon')
    })

    $('.evening').on('click', function() {
      window.location.replace('evening')
    })

    $('.back').on('click', function() {
      console.log('clicked!!')
      window.location.replace('/')
    })

    $('.submit').on('click', function() {
      alert('submitted!!')
    })


    if ($('.container').attr('id') === 'index') {
      index()
    }
    else if ($('.container').attr('id') === 'morning') {
      alert('Good Morning')
    }
    else if ($('.container').attr('id') === 'afternoon') {
      alert('Good Afternoon')
    }
    else if ($('.container').attr('id') === 'evening') {
      alert('Good Evening')
    }
  }
  catch(err) {
    console.error('ERROR!!: ', err)
  }
  finally{
    console.log('success!')
  }
})