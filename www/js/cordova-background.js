import {
  id
} from './userId';
var idtostring = String(id);
import onError from './geolocationUpdate';

var geolocationOptions = {
  enableHighAccuracy: true,
}

module.exports = {
  background: function () {
    // Get Location
    cordova.plugins.locationServices.geolocation.getCurrentPosition(showPosition,
      onError,
      geolocationOptions);

    function showPosition(position) {
      // find user by userId
      db.collection('geolocation').where('userId', '==', idtostring).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          const userId = doc.id;
          // update location 
          db.collection('geolocation').doc(userId).update({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        });
      });
    }
  }
}