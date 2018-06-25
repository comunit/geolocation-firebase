import { id } from './userId';
var idtostring = String(id);
module.exports = {
  background: function() {
    // Get Location
    navigator.geolocation.getCurrentPosition(showPosition);
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