import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let grupos = `*Hola!, te invito a unirte a los grupos oficiales de del Bot para convivir con la comunidad :D* 🍂

1- NilouBot-MD 🍭
*✰* ${grupo}

2- NilouBot-MD2 🍭
*✰* ${grupo2}

*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*

*♡ Grupo de colaboración*

1- 𝙶𝚊𝚝𝚊𝙱𝚘𝚝 💞 𝚈𝚊𝚎𝚖𝚘𝚛𝚒𝙱𝚘𝚝
*✰* ${grupo4}

*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*

➠ Enlace anulado? entre aquí! 

♡ Canal :
*✰* ${channel}

♡ Canal Sunlight Team :
*✰* ${channel2}

> ${dev}`

await conn.sendFile(m.chat, imagen2, "yaemori.jpg", grupos, m, null, rcanal)

await m.react(emojis)

}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = ['grupos', 'aigrupos', 'gruposai']
export default handler