const initialState = {
    playlists: []
}

export function playlistReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PLAYLISTS':
            console.log('wahty', action.playlists)
            return {
                ...state,
                playlists: action.playlists
            }
        case 'REMOVE_PLAYLIST':
            return {
                ...state,
                playlists: state.playlists.filter(playlist => playlist._id !== action.playlistId)
            }
        case 'SAVE_PLAYLIST':
            const playlistIdx = state.playlists.findIndex(playlist => playlist._id === action.playlist._id)
            //NEW PLAYLIST
            if (playlistIdx === -1) return { ...state, playlists: [action.playlist, ...state.playlists] }
            //UPDATE PLAYLIST
            else {
                const updatedPlaylists = [...state.playlists]
                updatedPlaylists.splice(playlistIdx, 1, action.playlist)
                return { ...state, playlists: updatedPlaylists }
            }
        default:
            return state
    }
}