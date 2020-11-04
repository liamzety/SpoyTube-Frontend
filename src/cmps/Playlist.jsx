import React, { useEffect } from 'react';
import { PlaylistAdd } from './PlaylistAdd';
import { PlaylistList } from './PlaylistList';
import { useDispatch, useSelector } from 'react-redux'
import { loadPlaylists, addPlaylist, removePlaylist, updatePlaylist } from "../store/actions/playlistActions";



export function Playlist() {
  const dispatch = useDispatch();
  const { playlists } = useSelector((state) => state.playlistReducer);

  useEffect(() => {
    dispatch(loadPlaylists())
  }, [dispatch])


  function onAddPlaylist(playlistToAdd) {
    if (!playlistToAdd) return
    dispatch(addPlaylist(playlistToAdd))
  }

  function onRemovePlaylist(playlistId) {
    dispatch(removePlaylist(playlistId))
  }

  function onUpdatePlaylist(playlistToUpdate) {
    dispatch(updatePlaylist(playlistToUpdate))
  }
  return (
    <section className="playlist-app">
      <PlaylistList
        playlists={playlists}
        onUpdatePlaylist={onUpdatePlaylist}
        onRemovePlaylist={onRemovePlaylist} />

      <PlaylistAdd onAddPlaylist={onAddPlaylist} />

    </section>
  );
}



