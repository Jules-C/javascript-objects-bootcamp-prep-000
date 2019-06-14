var playlist = { Queen: "Bohemian Phapsody" }
function updatePlaylist(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}