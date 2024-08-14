import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`





function App() {

  const [apod, setApod] =useState()

  useEffect(() => {

    function fetchAPOD () {
      
      axios.get(URL)
      .then(res =>{
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
     //fetchPhoto()
     setApod({

         
        "date": "2024-08-09",
            "explanation": "Denizens of planet Earth typically watch meteor showers by looking up. But this remarkable view, captured on August 13, 2011 by astronaut Ron Garan, caught a Perseid meteor by looking down. From Garan's perspective on board the International Space Station orbiting at an altitude of about 380 kilometers, the Perseid meteors streak below, swept up dust from comet Swift-Tuttle. The vaporizing comet dust grains are traveling at about 60 kilometers per second through the denser atmosphere around 100 ...",
            "hdurl": "https://apod.nasa.gov/apod/image/2408/perseid_iss_4256.jpg",
            "media_type": "image",
            "service_version": "v1",
            "title": "A Perseid Below",
            "url": "https://apod.nasa.gov/apod/image/2408/perseid_iss_4256_1024c.jpg"

  })

  }, [])

  if (!apod) return 'Fetching photo of the day...'
  
  return (
    <section>
      <Card
      title = {apod.title}
      text = {apod.explanation}
      imageURL = {apod.url}
      date = {apod.date}
      />    
    </section>
  )
}

export default App
