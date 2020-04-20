const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
  new GoogleStrategy({
    clientID: 'AIzaSyAw_B-hf-D3dO-aTe93rgAGEvIeh6jTNlM',
  }),
  () => {}
);
