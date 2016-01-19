/* Fill out these functions using Mongoose queries*/

var fs = require('fs'),
   mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   Listing = require('./ListingSchema'),
   config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   Listing.find({ name: 'Library West' }, function(err, listing) {
      if(err) throw err;

      //console.log(listing);
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.find({ code: 'CABL' }, function(err, listing) {
      if(err) throw err;

      listing.remove(function(err) {
         if(err) throw err;

         console.log('Listing deleted');
      });
   });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   Listing.findOneAndUpdate({ address: '701 N Broadway, Sleepy Hollow, NY 10591, United States' }, { address: '102 Phelps Lab, Gainesville, FL 32611'}, function(err, listing) {
      if(err) throw err;

      console.log(listing);
   });
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function(err, listings) {
      if(err) throw err;

      console.log(listings);
   });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
