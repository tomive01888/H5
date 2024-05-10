import { mainKey } from '$env/static/private'

const haloWeapon = "https://www.haloapi.com/metadata/h5/metadata/weapons"

async function apiCall(){

    const request = await fetch(haloWeapon,{
        method: "GET", 
        headers: {
            "Ocp-Apim-Subscription-Key": mainKey
        }
    })

    const result = await request.json()

    return result

}

export async function load(){

    const weapons = await apiCall()
    return {weapons} 
    
}