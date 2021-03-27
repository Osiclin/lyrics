import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Form.module.css'

export default function Form() {
    let app = useRef()
    const  [lyrics, setLyrics] = useState('')
    const  [button, setButton] = useState('Search')
    const [song, setSong] = useState('')
    const [artist, setArtist] = useState('')
    

    const searchLyrics = (e) => {
        e.preventDefault()
        const artist = document.getElementById('artist').value
        const song = document.getElementById('song').value
        if (artist == "" || song == "") {
            return false
        } else {
            setButton('Searching...')
            fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
            .then(res => res.json())
            .then(data => {if (data.lyrics) {
                setSong(song)
                setArtist(artist)
                setLyrics(data.lyrics)
                app.style.display = "block";
                setButton('Search')
            } else {
                setButton('Not found')
                setTimeout(() => {
                    setButton('Search')
                }, 3000)
            }})
            .catch(err => console.log(err)) 
            
        }
        
    }

    const close = () => {
        app.style.display = "none"
    }


    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input className={styles.input} type='text' id="artist" placeholder="artist..." required/><br/>
                <input className={styles.input} type='text' id="song" placeholder="song..." required/><br/>
                <div className={styles.buttonwrapper}>
                    <button className={styles.button} onClick={searchLyrics}>{button}</button>
                </div>
            </form>
            <div className={styles.lyricsbody} ref={el => app = el}>
                <div className={styles.back} onClick={close}>Back</div>
                <h3 className={styles.searchtitle}>{song} by {artist.toUpperCase()}</h3>
                <pre className={styles.lyricstext}>{lyrics}</pre>
            </div>
        </div>
    )
}