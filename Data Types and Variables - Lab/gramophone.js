function gramophone(band, album, songName){
    let songDurationInSeconds = (album.length * band.length) * songName.length / 2
    let rotations = Math.ceil(songDurationInSeconds / 2.5)
    console.log(`The plate was rotated ${rotations} times.`)
}
gramophone("Black Sabbath", "Paranoid", "War Pigs")