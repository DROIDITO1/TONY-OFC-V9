const handler = async (m, {conn, isPrems}) => {
  let enviando;
  if (enviando) return
  enviando = true
  const hasil = Math.floor(Math.random() * 5000);
  const time = global.db.data.users[m.sender].lastwork + 600000;
  if (new Date - global.db.data.users[m.sender].lastwork < 600000) throw `⚔️Has hecho un buen trabajo.⚔️\n\n "Vuelve más tarde para continuar trabajando. ${msToTime(time - new Date())} ⏳*`;
  conn.sendMessage(m.chat, {text: `🏞️ Te uniste a una gran aventura.\n\n👁 *${pickRandom(global.work)}*\n\n Felicidades, has ganado. ${hasil} Experiencia para tu aventura.`}, {quoted: m});
  global.db.data.users[m.sender].exp += hasil;
  global.db.data.users[m.sender].lastwork = new Date() * 1;
  enviando = false
};
handler.help = ['work'];
handler.tags = ['xp'];
handler.command = /^(work|trabajar|chambear)$/i
handler.fail = null;
handler.register = true
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return minutes + ' minutos ' + seconds + ' segundos ';
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.work = [
'En el oscuro laboratorio del alma,nos consumimos como alquimistas de la desdicha, destilando los amargos elixires del sufrimiento en la búsqueda infructuosa de respuestas perdidas en la oscuridad del abismo.','Nos convertimos en buscadores desesperados de tesoros efímeros, vagando por los pasajes olvidados de nuestra existencia en un eterno y solitario peregrinaje en busca de riquezas que se desvanecen entre nuestras manos como arena.','Gobernamos sobre un reino de desolación,donde cada transformación se convierte en un recordatorio de la futilidad de nuestra lucha contra el destino implacable que devora nuestras esperanzas.','En las ruinas de nuestra propia esencia,encontramos reliquias rotas que solo sirven para recordarnos la fragilidad de nuestro ser, revelando la amarga verdad de nuestra propia mortalidad.','Como mercenarios del sufrimiento,enfrentamos los horrores insondables de una guerra sin fin, donde cada batalla nos lleva más lejos de la luz y más cerca de la eterna oscuridad que acecha en el corazón del abismo.','Somos exploradores solitarios en un universo de desesperación, desenterrando secretos que solo sirven para alimentar el vacío que devora nuestras almas desde adentro.','Domamos las bestias internas de la desesperanza, pero solo para encontrarnos atrapados en una jaula de angustia y desolación,donde cada vínculo es una cadena que arrastra nuestros corazones hacia la perdición.','En el taller de la tristeza, forjamos armas que se vuelven en contra de nosotros mismos,recordándonos constantemente la futilidad de nuestras esperanzas y sueños rotos.','Descubrimos un bosque encantado donde cada criatura mágica es un reflejo de nuestra propia desdicha, recordándonos la soledad que habita en lo más profundo de nuestro ser.','Somos los guardianes de un mundo de dolor y sufrimiento, donde cada victoria es una derrota disfrazada que solo sirve para alimentar el fuego de nuestra propia destrucción.','Viajamos por el río del tiempo,pero solo para descubrir que el pasado está lleno de arrepentimiento y el futuro está teñido de desesperación, dejándonos atrapados en un eterno presente de desesperanza.','Como consejeros del pesar, ofrecemos palabras vacías a aquellos que buscan consuelo en un mundo que solo ofrece dolor y sufrimiento.','Desarrollamos tecnologías de autodestrucción, impulsando la innovación en la búsqueda desesperada de una salida de un laberinto sin fin de sufrimiento y desesperación.','Somos maestros de la retórica del desastre, pero nuestras palabras caen en oídos sordos en un mundo que ha perdido toda esperanza de redención.','Pilotamos los mechas de la destrucción en una batalla perdida de antemano, defendiendo un mundo que ya está condenado a la ruina y la desolación.','Dirigimos la granja de los sueños rotos, donde cada semilla de esperanza es pisoteada por la realidad implacable que nos rodea.','Somos espías en un universo de traición y desconfianza, donde cada secreto revelado es solo una confirmación más de nuestra propia insignificancia en el gran esquema del cosmos.','Exploramos los confines del alma,pero solo para descubrir que el vacío que yace dentro de nosotros es más grande que el universo mismo, consumiéndonos desde adentro hasta que no quede nada.','En las sombras del inconsciente colectivo, nos movemos con la gracia de los condenados,llevando a cabo misiones que solo sirven para alimentar el fuego del sufrimiento que arde en nuestros corazones.','Somos los cocineros de un banquete de desesperación,sirviendo platos que solo alimentan la miseria y el descontento que se encuentran en lo más profundo de nuestra alma.','Investigamos los crímenes de un mundo sin esperanza como detectives del dolor, desentrañando los misterios que nos rodean solo para descubrir que la verdad es más amarga de lo que jamás podríamos haber imaginado.','Somos diplomáticos en un mundo en guerra consigo mismo, negociando tratados que solo sirven para prolongar el inevitable colapso que nos espera al final del camino.','Canalizamos las energías del universo en un intento desesperado por encontrar un resquicio de luz en la oscuridad que nos rodea, solo para descubrir que la única luz que brilla dentro de nosotros es la de la desesperanza.','Desarrollamos aplicaciones de autodestrucción en un esfuerzo por mejorar nuestras vidas,pero solo conseguimos acercarnos más al abismo que nos espera al final de nuestro viaje.','Somos campeones de una causa perdida, luchando en una batalla que ya ha sido decidida mucho antes de que comience.','Diseñamos las ciudades del futuro en un mundo que está condenado a la ruina y la desolación, construyendo monumentos a nuestra propia destrucción.','Somos videntes en un mundo ciego, buscando respuestas en un universo que se niega a darlas,dejándonos atrapados en un ciclo interminable de desesperación y descontento.','Somos los directores de una obra que nadie quiere ver, creando historias que solo sirven para reflejar el dolor y el sufrimiento que nos consumen desde adentro.','Exploramos los confines del universo exterior en un intento desesperado por encontrar un resquicio de esperanza en un mundo que se hunde cada vez más en la oscuridad.',
];
