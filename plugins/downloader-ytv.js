import{youtubedl,youtubedlv2}from'@bochilteam/scraper';import _0x4d755a from'node-fetch';let handler=async(_0x30ebe2,{conn:_0x51a4d7,args:_0x21bf37})=>{let _0x5291c5={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid='+_0x30ebe2['sender']['split']('@')[0x0]+':'+_0x30ebe2['sender']['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'};if(!_0x21bf37)return _0x51a4d7['reply'](_0x30ebe2['chat'],'[❗]\x20enter\x20enter\x20a\x20YouTube\x20link\x20to\x20download\x20your\x20video\x20',_0x5291c5,_0x30ebe2);await _0x51a4d7['reply'](_0x30ebe2['chat'],'⌛\x20_Cargando..._\x0a▰▰▰▱▱▱▱▱▱',_0x5291c5,_0x30ebe2);try{let _0x283074=_0x21bf37[0x1]||'360',_0x1ac877=_0x283074+'p',_0x188f6b=_0x21bf37[0x0];const _0x571382=await youtubedl(_0x188f6b)['catch'](async _0xbdc183=>await youtubedlv2(_0x188f6b))['catch'](async _0x355783=>await youtubedlv3(_0x188f6b)),_0x5c0f6e=await _0x571382['video'][_0x1ac877]['download'](),_0x55aef8=await _0x571382['title'],_0x4e6680=await _0x571382['video'][_0x1ac877]['fileSizeH'];await await _0x51a4d7['sendMessage'](_0x30ebe2['chat'],{'video':{'url':_0x5c0f6e},'fileName':_0x55aef8+'.mp4','mimetype':'video/mp4','caption':'乂✰qualification'+_0x55aef8+'✰乂\x0a\x0a乂✰weight\x20'+_0x4e6680+'乂✰','thumbnail':await _0x4d755a(_0x571382['thumbnail'])},{'quoted':_0x30ebe2});}catch{try{let _0x32ae94=await _0x4d755a('https://api.lolhuman.xyz/api/ytvideo2?apikey='+lolkeysapi+'&url='+_0x21bf37[0x0]),_0x4e3254=await _0x32ae94['json'](),_0x33c570=_0x4e3254['result']['title']||'error',_0x51bfcf=_0x4e3254['result']['link'],_0x32cedf=_0x4e3254['result']['size'],_0x623b5c=_0x4e3254['result']['thumbnail'];await _0x51a4d7['sendMessage'](_0x30ebe2['chat'],{'video':{'url':_0x51bfcf},'fileName':_0x33c570+'.mp4','mimetype':'video/mp4','caption':'乂✰qualification'+_0x33c570+'✰乂\x0a乂✰weight'+_0x32cedf+'✰乂','thumbnail':await _0x4d755a(_0x623b5c)},{'quoted':_0x30ebe2});}catch{await _0x51a4d7['reply'](_0x30ebe2['chat'],'❌an\x20error\x20occurred\x20try\x20again\x20❌',_0x30ebe2);}}};handler['command']=/^fgmp4|dlmp4|getvid|yt(v|mp4)?$/i,handler['register']=!![],handler['register']=!![];export default handler;