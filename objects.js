var playlist = {}

function updatePlaylist(obj, key, value){
  obj[key] = value
  return obj
}
updatePlaylist(playlist, 'nirvana','come as you are')
updatePlaylist(playlist, 'nirvana_2','come as you are_2')
console.log(playlist)