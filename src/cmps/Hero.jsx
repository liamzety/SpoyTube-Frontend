import React from 'react'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userService } from '../services/userService';
import { loadPlaylists } from '../store/actions/playlistActions';

export function _Hero(props) {
    const dispatch = useDispatch()


    async function onHandleLogin() {
        try {
            const playlists = await userService.handleLogin()
            dispatch(loadPlaylists(playlists))
            props.history.push('/transfer')

        } catch (error) {
            console.log('ERR:', error)
        }
    }

    return (
        <div className="hero relative">
            <div className="hero-container container flex align-center">
                <div className="hero-details space-between flex wrap column">
                    <div className="txt-container">
                        <h1>Transfer Your Playlists!</h1>
                        <h2>YouTube-Spotify Playlist Transfer With Just A Few Clicks!</h2>
                    </div>
                    <div className="txt-container">
                        <button onClick={onHandleLogin} className="btn-cta">Login with Spotify</button>
                        <p>*SpotyTube will ask you for your permission to view your Spotify and Youtube account.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const Hero = withRouter(_Hero);
