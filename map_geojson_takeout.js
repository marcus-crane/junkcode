const fs = require('fs')

takeoutMap = JSON.parse(fs.readFileSync('Location\ History.json'))

locations = takeoutMap.locations

let features = []

for (let location of locations) {
  features.push({
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [location.latitudeE7, location.longitudeE7],
    },
    "properties": {
      "title": "Item",
      "icon": "monument"
    }
  })
}

geojsonBase = {
  "id": "points",
  "type": "symbol",
  "source": {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": features
    }
  },
  "layout": {
    "icon-image": "{icon}-15",
    "text-field": "{title}",
    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    "text-offset": [0, 0.6],
    "text-anchor": "top"
  }
}

fs.writeFileSync("takeout.geojson", JSON.stringify(geojsonBase))
