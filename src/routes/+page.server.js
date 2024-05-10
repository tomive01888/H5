import { mainKey } from '$env/static/private'
import { client } from "@/utils/sanity/client"

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



// Fetch content with GROQ
async function getContent() {
  const CONTENT_QUERY = `*[_type == "herosection"] {
  ...,
  steps[] {
    onboardingStep {
      ...
    }
  }
}
`
  const content = await client.fetch(CONTENT_QUERY)
  return content
}

// Log content to console
getContent().then(content => console.log(content))

// Insert the return component calling `getContent()` below