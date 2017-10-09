const fs = require('fs')
const dirname = './surfpoints'

const surfpoints = []

fs.readdir(dirname, (err, files) => {
  console.log(files.length)
  if (err) {
    console.error(err)
  }

  files.forEach((filename, i) => {
    fs.readFile(`${dirname}/${filename}`, 'utf-8', (err, file) => {
      if(err){
        console.error(err)
      }

      surfpoints.push(JSON.parse(file))

      if (i === files.length - 1){
        console.log('au pau')
        fs.writeFile('./surfpoints.json', JSON.stringify({"surfpoints": surfpoints}, null, 2), (err) => {
          if (err){
            console.error(err)
          }
          console.log('json written')
        })
      }
    })
  })
})

