// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I want you to stay", time: 4 },
  { text: "'Til I'm in the grave", time: 8 },
  { text: "'Til I rot away, dead and buried", time: 13 },
  { text: "'Til I'm in the casket you carry", time: 17 },
  { text: "If you go, I'm goin' too, uh", time: 21 },
  { text: "'Cause it was always you (Alright)", time: 26 },
  { text: "And if I'm turnin' blue, please don't save me", time: 31 },
  { text: "Nothin' left to lose without my baby", time: 35 },
  { text: "Birds of a feather, we should stick together, I know", time: 41 },
  { text: "I said I'd never think I wasn't better alone", time: 46 },
  { text: "Can't change the weather, might not be forever", time: 50 },
  { text: "But if it's forever, it's even better", time: 55 },
  { text: "And I don't know what I'm cryin' for", time: 59 },
  { text: "I don't think I could love you more", time: 65 },
  { text: "It might not be long, but baby, I", time: 69 },
  { text: "I'll love you 'til the day that I die", time: 75 },
  { text: "'Til the day that I die", time: 81 },
  { text: "'Til the light leaves my eyes", time: 85 },
  { text: "'Til the day that I die", time: 90 },
  { text: "I want you to see, hmm", time: 95 },
  { text: "How you look to me, hmm", time: 100 },
  { text: "You wouldn't believe if I told ya", time: 104 },
  { text: "You would keep the compliments I throw ya", time: 109 },
  { text: "But you're so full of shit, uh", time: 116 },
  { text: "Tell me it's a bit, oh", time: 118 },
  { text: "Say you don't see it, your mind's polluted", time: 122 },
  { text: "Say you wanna quit, don't be stupid", time: 127 },
  { text: "And I don't know what I'm cryin' for", time: 133 },
  { text: "I don't think I could love you more", time: 138 },
  { text: "Might not be long, but baby, I", time: 143 },
  { text: "Don't wanna say goodbye", time: 149 },
  { text: "Birds of a feather, we should stick together, I know ('Til the day that I die)", time: 152 },
  { text: "I said I'd never think I wasn't better alone ('Til the light leaves my eyes)", time: 156 },
  { text: "Can't change the weather, might not be forever ('Til the day that I die)", time: 161 },
  { text: "But if it's forever, it's even better", time: 165 },
  { text: "I knew you in another life", time: 170 },
  { text: "You had that same look in your eyes", time: 175 },
  { text: "I love you, don't act so surprised", time: 179 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4);

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    //var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    //var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    // Aplica el efecto de aparición
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
    var NextLine = getNextLine(currentLine);
    console.log(NextLine);
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 800);

function getNextLine(currentLine) {
  const currentIndex = lyricsData.findIndex(line => line === currentLine);

  if (currentIndex !== -1 && currentIndex < lyricsData.length - 1)
    return lyricsData[currentIndex + 1];
  else 
    return null;
}
//funcion titulo
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);