import { playlistService } from '../../services/playlistService'

//GET
export function loadPlaylists(playlists) {
    return async dispatch => {
        dispatch({ type: 'SET_PLAYLISTS', playlists }
        )
    }
}

// //ADD
// export function addPlaylist(playlistToSave) {
//     return async dispatch => {
//         const playlist = await playlistService.add(playlistToSave)
//         dispatch({ type: 'SAVE_PLAYLIST', playlist }
//         )
//     }
// }

// //UPDATE
// export function updatePlaylist(playlist) {
//     return dispatch => {
//         playlistService.update(playlist)
//         dispatch({ type: 'SAVE_PLAYLIST', playlist })
//     }
// }

// //REMOVE
// export function removePlaylist(playlistId) {
//     return dispatch => {
//         playlistService.remove(playlistId)
//         dispatch({ type: 'REMOVE_PLAYLIST', playlistId })
//     }
// }