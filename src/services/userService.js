import httpService from "./httpService"
import data from '../res_demo.json'
export const userService = {
    handleLogin
}

async function handleLogin() {
    // const playlists =  await httpService.get('spotify_api')

    // const newData = data.map(playlist => {
    //     playlist.tracks = playlist.tracks.map(track => {
    //         const name = track
    //         track = {
    //             isSelected: false,
    //             _id: 'klalafkawnm',
    //             name
    //         }
    //         return track
    //     })
    //     return playlist
    // })

    return data

}