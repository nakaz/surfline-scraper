var osmosis = require('osmosis')

let locations = []

osmosis
  // .get('http://www.surfline.com/surf-cams-and-reports/')
  //   .follow('table a[title]@href')
  .get('http://www.surfline.com/surf-report/pacific-northwest_2082/map/')
    .follow('table tr td div a[href]@href')
    .find('meta[property=og:region]@content')
    .set('region')
    .find('meta[property=og:country-name]@content')
    .set('continent')
    .find('.subnav-name:nth-child(2) a@title')
    .set('locality')
    .find('meta[property=og:locality]@content')
    .set('location')
    .find('link[rel=canonical]@href')
    .set('link')
    .data(function(d) {
      locations.push(d)
    })
    .log(console.log)
    .error(console.log)
    .debug(console.log)
    .done(function(){
      console.log(locations)
    })
