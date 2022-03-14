const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');
const card_title = document.getElementById('card-title');
const friends = document.getElementById('friends');
const plays = document.getElementById('plays');

enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit
  //console.log(input.value)
  getUser(input.value);
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} username
 */
async function getUser(username) {
  const resp = await fetch(`api/users/${username}`).catch(alert('Error'));
  const data = await resp.json();
  console.log('data from back', data.username);

  

  card_title.className = 'h1';
  card_title.innerText = data.username;
  friends.className = 'badge badge-warning';
  friends.innerText = "friends: "+ data.friends;
  plays.className = 'badge badge-success';
  plays.innerText = "plays: "+ data.plays;

  const dataMapped = data.tracks.map((track) => {
    const body = document.createElement('tr');
    body.innerText = track;
    tbody.appendChild(body);
  });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
