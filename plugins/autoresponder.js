import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]

if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(avatar_contact.png, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: 'TU PUTA MADRE', body: '🤓☝️', sourceUrl: `https://chat.whatsapp.com/L4cpzEr1wGOAEVdWeWBMn7`, thumbnail: imagen6}}})}

return !0 }
handler.register = true
export default handler