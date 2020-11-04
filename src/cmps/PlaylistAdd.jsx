import React, { useState } from 'react'

export function PlaylistAdd(props) {
    const [playlistToAdd, setPlaylistToAdd] = useState(null)

    function onAddPlaylistInp(ev) {
        setPlaylistToAdd({
            ...playlistToAdd,
            [ev.target.name]: ev.target.value
        })
    }
    return (
        <form className="playlist-add"
            onSubmit={ev => {
                ev.preventDefault()
                props.onAddPlaylist(playlistToAdd)

            }}>
            <input onChange={onAddPlaylistInp} name="name" type="text" placeholder="playlist" />
            <input onChange={onAddPlaylistInp} name="hairColor" type="text" placeholder="hair color" />
            <button>Add playlist</button>
        </form>
    )
}
