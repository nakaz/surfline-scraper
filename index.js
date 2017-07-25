var osmosis = require('osmosis')

osmosis
  .get('http://www.surfline.com/surf-cams-and-reports/')
    .find('a[title]')
    .set('region')
    .follow('@href')
    .find('table tr td div strong')
    .set('county')
    .find('table div a[href]@href')
    .set('link')
    .data(function(d) {
      console.log(d)
    })
    .log(console.log)
    .error(console.log)
    .debug(console.log)
