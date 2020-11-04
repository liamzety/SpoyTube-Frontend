import React, { useEffect, useState } from 'react'
import { Footer } from '../cmps/Footer'
import { Navbar } from '../cmps/Navbar'
import bgShapes from '../assets/img/bg-shapes.png'
import { useDispatch, useSelector } from 'react-redux'
import { loadPlaylists } from '../store/actions/playlistActions'
import { PlaylistList } from '../cmps/PlaylistList'

export function Transfer() {
    const { playlists } = useSelector(state => state.playlistReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(loadPlaylists())
        //REMOVE AFTER USAGE, JUST FOR DEV PRPSES
    }, [dispatch, playlists])

    const style = {
        h1: { color: 'rgb(61, 31, 56)' },
        a: { color: 'rgb(61, 31, 56)' },
        p: { color: 'rgb(61, 31, 56)' }
    }
    return (
        <div className="transfer">
            <Navbar style={style}>
                <img src={bgShapes} alt="" />
            </Navbar>
            <div className="transfer-container container">
                {playlists.length !== 0 && <PlaylistList playlists={playlists} />}
            </div>
            <Footer style={style} />
        </div>
    )
}
