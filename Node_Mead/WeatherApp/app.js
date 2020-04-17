const request = require('request');
const url =
  'http://api.weatherstack.com/current?access_key=b506dda0a1448de1740e60bfa1eee5f6&query=Mumbai';

const mapBoxUrl =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/mumbai.json?access_token=pk.eyJ1IjoidmlkaXQwMjEwMCIsImEiOiJjazk0amgwdjUwOXpyM2xueTl1b2p4emI3In0.oR7jVMi2zbjLj08xB9DKVg&limit=1';

// request({ url: url, json: true }, (error, response) => {
//   // console.log(response.body.current);
//   if (error) return 'Error';

//   const { temperature, feelslike } = response.body.current;
//   console.log(
//     `The temperature is currently ${temperature} but feels like ${feelslike}`
//   );
// });

// //Geocoding

// request({ url: mapBoxUrl, json: true }, (error, response) => {
//   if (error) return 'Error';
//   if (!response.body.features[0].center) return 'Location not found!';
//   const [long, lat] = response.body.features[0].center;
//   console.log(long, lat);
// });

const geoCode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoidmlkaXQwMjEwMCIsImEiOiJjazk0amgwdjUwOXpyM2xueTl1b2p4emI3In0.oR7jVMi2zbjLj08xB9DKVg&limit=1';

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unaable to Connect', undefined);
    } else if (!response.body.features[0].center) {
      callback('Location not found', undefined);
    } else {
      callback(undefined, {
        long: response.body.features[0].center,
        lat: response.body.features[1].center,
        location: response.body.features[0].place_name,
      });
    }
  });
};
