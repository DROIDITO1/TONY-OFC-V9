import _0x74f12c from '@vitalets/google-translate-api';
import _0x560386 from 'node-fetch';

let handler = async (_0xeb7f32, { text: _0x1ff34a, command: _0x3cba8e, args: _0x34fed4, usedPrefix: _0x62b6d9 }) => {
  let _0xbfd118 = {
    'key': {
      'participants': '0@s.whatsapp.net',
      'remoteJid': 'status@broadcast',
      'fromMe': ![],
      'id': 'Halo'
    },
    'message': {
      'contactMessage': {
        'vcard': 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid=' + _0xeb7f32['sender']['split']('@')[0x0] + ':' + _0xeb7f32['sender']['split']('@')[0x0] + '\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'
      }
    },
    'participant': '0@s.whatsapp.net'
  };

  if (!_0x1ff34a) return conn['reply'](_0xeb7f32['chat'], 'Hola: ' + _0xeb7f32['pushName'] + ' 😍 ¿Quieres chatear? Responde con el comando junto con tu mensaje.', _0xbfd118, _0xeb7f32);

  try {
    let _0x3d237d = await _0x560386('https://api.simsimi.net/v2/?text=' + _0x1ff34a + '&lc=es'),
      _0x263de6 = await _0x3d237d['json']();
    _0xeb7f32['reply'](_0x263de6['success']);
  } catch {
    try {
      if (_0x1ff34a['includes']('Hola')) _0x1ff34a = _0x1ff34a['replace']('Hola', 'Hello');
      if (_0x1ff34a['includes']('hola')) _0x1ff34a = _0x1ff34a['replace']('hola', 'Hello');
      if (_0x1ff34a['includes']('HOLA')) _0x1ff34a = _0x1ff34a['replace']('HOLA', 'HELLO');
      let _0x12156f = await _0x560386('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + _0x1ff34a),
        _0x4c57d7 = await _0x12156f['json'](),
        _0x200bd0 = _0xeb7f32['pushName'] || '1',
        _0x3dd5a4 = await _0x560386('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + _0x200bd0 + '&msg=' + _0x4c57d7[0x0][0x0][0x0]),
        _0xf1831a = await _0x3dd5a4['json'](),
        _0x3b5505 = await _0x560386('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + _0xf1831a['cnt']),
        _0xf07ea0 = await _0x3b5505['json']();
      _0xeb7f32['reply'](_0xf07ea0[0x0][0x0][0x0]);
    } catch {
      let _0x554e06 = await _0x560386('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=id&dt=t&q=' + _0x1ff34a),
        _0xa0735c = await _0x554e06['json'](),
        _0x3d337f = await _0x560386('https://violetics.pw/api/utility/simsimi?apikey=beta&text=' + _0xa0735c[0x0][0x0][0x0]),
        _0x397994 = await _0x3d337f['json'](),
        _0x4a5cb0 = _0x397994['result'],
        _0x30135e = await _0x74f12c('' + _0x4a5cb0, { 'to': 'es', 'autoCorrect': !![] });
      _0xeb7f32['reply'](_0x30135e['text']);
    }
  }
};

handler['help'] = ['simi', 'bot']['map'](_0x532f0e => _0x532f0e + '\x20<teks>');
handler['tags'] = ['fun'];
handler['command'] = /^((sim)?simi|bot|alexa|cortana)$/i;

export default handler;