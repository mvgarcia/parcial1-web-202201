const axios = require('axios');

function findUnique(iterable) {
  return [...new Set(iterable)];
}

const getUser = async (username_) => {
  const response = await axios.get("https://mauvelous-leopard-5257.twil.io/friend-detail?username="+username_);
  const friendDetail = response.data;
  const response1 = await axios.get("https://mauvelous-leopard-5257.twil.io/plays-detail?username="+username_);
  const playsDetail = response1.data;
  
  const plays_ = findUnique(playsDetail.plays)
  const uri_ = "/users/"+ username_

  return { username: username_, plays: plays_.length, friends: friendDetail.friends.length, tracks: plays_, uri: uri_}
};

module.exports = { getUser };
