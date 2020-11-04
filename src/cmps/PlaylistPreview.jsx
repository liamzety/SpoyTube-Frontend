import React, { useState } from 'react'

export function PlaylistPreview(props) {
    const { playlist, onRemovePlaylist, onUpdatePlaylist } = props
    const [playlistToUpdate, setPlaylistToUpdate] = useState(playlist)

    function onUpdatePlaylistInp(ev) {
        setPlaylistToUpdate({
            ...playlistToUpdate,
            [ev.target.name]: ev.target.value
        })
    }
    return (
        <div className="playlist-preview">
            <p>{playlist.name}</p>
            <button onClick={() => onRemovePlaylist(playlist._id)}>Remove</button>
            <form onSubmit={ev => {
                ev.preventDefault()
                onUpdatePlaylist(playlistToUpdate)
            }}>
                <input placeholder="change name" name="name" onChange={onUpdatePlaylistInp} type="text" />
                <input placeholder="change color" name="hairColor" onChange={onUpdatePlaylistInp} type="text" />
                <button>Save</button>
            </form>
        </div>
    )
}
