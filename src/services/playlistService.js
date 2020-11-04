import httpService from "./httpService"
import data from '../res_demo.json'
export const playlistService = {
    query,
    update,
    remove,
    add
}


async function query() {
    // return await httpService.get('playlist')
    return data
}
async function add(playlist) {
    return await httpService.post('playlist', playlist);
}
function remove(playlistId) {
    httpService.delete(`playlist/${playlistId}`)

}
function update(playlistToUpdate) {
    httpService.put(`playlist/${playlistToUpdate._id}`, playlistToUpdate)
}

