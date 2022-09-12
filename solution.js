decodeMorse = function(morseCode){
  //first split on word boundaries, by looking for a triple space
  return morseCode.trim().split( '   ' ).map(word => {
    //then split on each letter as normal
    return word.split(" ").map( letter => {
      if (letter in MORSE_CODE) return MORSE_CODE[letter]
    }).join("") //rejoining the letters into words
  }).join(" ") //and joining the words by spaces
}
