import React, { useEffect, useState } from 'react'

export function PlaylistList({ playlists }) {
    const [localPlaylists, setLocalPlaylists] = useState(null)
    useEffect(() => {
        setLocalPlaylists(playlists)
    }, [playlists])

    function onExpand(playlistId) {
        const playlists = localPlaylists.map(playlist => {
            if (playlist.playlist_id === playlistId) {
                playlist.isShown = !playlist.isShown
            }
            return playlist
        })

        setLocalPlaylists(playlists)
    }
    return (
        <div className="playlist-list">
            {playlists.map(playlist => {
                return (
                    <div key={playlist.playlist_id} className="playlist-container">
                        <h1>{playlist.playlist_name}</h1>
                        <button onClick={() => { onExpand(playlist.playlist_id) }}>Expand</button>
                        {playlist.isShown && <div className="track-container">
                            {playlist.tracks.map((track, idx) => <p key={idx}>{track}</p>)}
                        </div>}

                    </div>
                )
            })}
        </div>
    )
}
