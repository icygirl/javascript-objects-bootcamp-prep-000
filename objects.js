var playlist = new Object({'Fleetwood Mac': 'Go Your Own Way','Lionel Riche':'Hello'})
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({},playlist,{ [artistName]: songTitle})
}