var playlist = { Queen: "Bohemian Phapsody" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}