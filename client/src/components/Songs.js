import {useState, useEffect} from 'react'

function Songs(){
    const [ songs, setSongs ] = useState([])

    useEffect(() => {
        fetch(`/songs`)
        .then((r) => r.json())
        .then(songs => setSongs(songs))    
        }, [])

    return (
        <div>
            <h1> Song Page </h1>
            <h2>{console.log(songs)}</h2>
        </div>
    )
}

export default Songs