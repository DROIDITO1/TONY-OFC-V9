
let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)
let av = `./src/mp3/${pickRandom(["bot1", "bot5"])}.mp3`

conn.sendButton(m.chat, `Hola 👋🏻 soy droid bot 🧑🏻‍💻 ${name} \n \nClick en las siguientes opciones pará ver mis comandos 👇🏻 🤖 \n`, igfg, null, [
      ['⦙☰ Menu', '/help'],
      ['⦙☰ Menu 2', '/menu2'],
      ['⌬ Grupos', '/gpturbo']
    ], m)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(bot|bot)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}