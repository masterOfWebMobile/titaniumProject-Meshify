// Generated by CoffeeScript 1.6.2
exports.setMarkersWithCenter = function(map, latiarray, longiarray) {
  var delta, i, lgDiff, ltDiff, maxLati, maxLongi, minLati, minLongi, totalLati, totalLongi, total_locations;

  if (latiarray.length !== longiarray.length) {
    return;
  }
  total_locations = latiarray.length;
  minLongi = null;
  minLati = null;
  maxLongi = null;
  maxLati = null;
  totalLongi = 0.0;
  totalLati = 0.0;
  i = 0;
  while (i < total_locations) {
    if ((minLati == null) || minLati > latiarray[i]) {
      minLati = latiarray[i];
    }
    if ((minLongi == null) || minLongi > longiarray[i]) {
      minLongi = longiarray[i];
    }
    if ((maxLati == null) || maxLati < latiarray[i]) {
      maxLati = latiarray[i];
    }
    if ((maxLongi == null) || maxLongi < longiarray[i]) {
      maxLongi = longiarray[i];
    }
    i++;
  }
  ltDiff = maxLati - minLati;
  lgDiff = maxLongi - minLongi;
  delta = (ltDiff > lgDiff ? ltDiff : lgDiff);
  if (delta > 178) {
    delta = 80;
    map.setLocation({
      animate: true,
      latitude: 29.76429,
      longitude: -95.38370,
      latitudeDelta: delta,
      longitudeDelta: delta
    });
  } else {
    if (total_locations > 0 && delta > 0) {
      map.setLocation({
        animate: true,
        latitude: (maxLati + minLati) / 2,
        longitude: (maxLongi + minLongi) / 2,
        latitudeDelta: delta + 1,
        longitudeDelta: delta + 1 
      });
    }
  }
};