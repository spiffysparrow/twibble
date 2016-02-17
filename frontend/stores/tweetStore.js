var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var TweetStore = new Store(AppDispatcher);


var _tweets = {};
var _keyword_hash = JSON.parse('{"javascript":[69942970719695,69937633584454,69936260802177,69932316042491],"app":[69966473951793,69965019688869,69965017668467,69964714680334,69963229807392,69934042505674],"ibm":[69967356333104,69942968119646,69938514210878],"nice":[69942970719695],"rt":[69966933620660,69966487312741,69966473951793,69965019688869,69964666403057,69964638187974,69964633787315,69943028842262,69943004982544,69942970719695,69942968119646,69938514210878,69937633584454,69937388142592,69937377402660,69936260802177,69935718331034,69934062144246,69934058795095,69934046439100,69932627888169,69932316042491,69931357711991],"hope":[69964633787315,69934042505674,69932310167108],"mixer":[69967356333104,69966089382780,69964625791290,69942955939806,69937377402660],"amp":[69967356333104,69966089382780,69964666403057,69963229807392,69937633584454,69935718331034],"developer":[69966933620660,69966487312741,69966473951793,69966089382780,69965019688869,69965017668467,69964666403057,69964638187974,69964633787315,69964625791290,69963229807392,69942970719695,69942968119646,69938514210878,69937633584454,69937377402660,69936260802177,69935718331034,69934062144246,69934058795095,69934046439100,69932316042491],"tomorrow":[69942955939806,69941552161638,69932627888169,69931357711991]}');

TweetStore.tweets = function(){
  return _tweets;
}

TweetStore.keyword_hash = function(){
  _words = [];
  return _keyword_hash;
}

TweetStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "AUTHOR_TWEETS_RECEIVED":
      _keyword_hash = payload.tweets["keyword_hash"];
      _tweets = payload.tweets["tweets"];
      TweetStore.__emitChange();
      break;
  }
};

module.exports = TweetStore;
