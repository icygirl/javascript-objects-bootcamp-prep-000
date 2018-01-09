var playlist = new Object({'Fleetwood Mac': 'Go Your Own Way','Lionel Riche':'Hello'});
function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = 'songTitle';
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}