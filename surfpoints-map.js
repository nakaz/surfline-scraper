const fs = require('fs')

fs.readFile('./surfpoints.json', 'utf-8', (err, file) => {
  if(err){
    console.error(err)
  }

  function restructerJSON(){
    return JSON.parse(file).surfpoints.map(({region, continent, locality, location, link}) => {
      return {
        region,
        continent,
        locality,
        location,
        spot_id: Number(link.match(/(\d+)(?!.*\d)/g)[0])
      }
    })
  }

  fs.writeFile('./surfpoints-complete.json', JSON.stringify(restructerJSON(), null, 2).replace(/\//g, ' '), (err) => {
    if (err){
      console.error(err)
    }
    console.log('json written')
  })
})



