import{sticker}from'../lib/sticker.js';import _0x220896 from'../lib/uploadFile.js';import _0x24d897 from'../lib/uploadImage.js';import{webp2png}from'../lib/webp2mp4.js';let handler=async(_0x396590,{conn:_0x5300ba,args:_0x28dbc8,usedPrefix:_0x4b97f8,command:_0x3cb6fb})=>{let _0xd868ab={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid='+_0x396590['sender']['split']('@')[0x0]+':'+_0x396590['sender']['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'},_0x45185f=![];try{let _0x14fddf=_0x396590['quoted']?_0x396590['quoted']:_0x396590,_0x4c04c8=(_0x14fddf['msg']||_0x14fddf)['mimetype']||_0x14fddf['mediaType']||'';if(/webp|image|video/g['test'](_0x4c04c8)){if(/video/g['test'](_0x4c04c8)){if((_0x14fddf['msg']||_0x14fddf)['seconds']>0x8)return _0x5300ba['reply'](_0x396590['chat'],'🧑🏻‍💻\x20Lo\x20siento,\x20el\x20video\x20no\x20puede\x20durar\x20más\x20de\x207\x20segundos.\x20Por\x20favor,\x20inténtalo\x20de\x20nuevo.',_0xd868ab,_0x396590);}let _0x36779a=await _0x14fddf['download']?.();if(!_0x36779a)return _0x5300ba['reply'](_0x396590['chat'],'[❗]\x20tag\x20an\x20image\x20or\x20video\x20to\x20convert\x20your\x20sticker\x20or\x20image\x20link',_0xd868ab,_0x396590);let _0x4cd6ba;try{_0x45185f=await sticker(_0x36779a,![],global['igfg'],global['author']);}catch(_0x129d85){console['error'](_0x129d85);}finally{if(!_0x45185f){if(/webp/g['test'](_0x4c04c8))_0x4cd6ba=await webp2png(_0x36779a);else{if(/image/g['test'](_0x4c04c8))_0x4cd6ba=await _0x24d897(_0x36779a);else{if(/video/g['test'](_0x4c04c8))_0x4cd6ba=await _0x220896(_0x36779a);}}if(typeof _0x4cd6ba!=='string')_0x4cd6ba=await _0x24d897(_0x36779a);_0x45185f=await sticker(![],_0x4cd6ba,global['fgif'],global['author']);}}}else{if(_0x28dbc8[0x0]){if(isUrl(_0x28dbc8[0x0]))_0x45185f=await sticker(![],_0x28dbc8[0x0],global['packname'],global['author']);else return _0x5300ba['reply'](_0x396590['chat'],'[❗]\x20sorry\x20but\x20it\x20was\x20not\x20possible\x20to\x20be\x20the\x20sticker\x20with\x20that\x20link,\x20please\x20verify\x20that\x20the\x20link\x20is\x20from\x20an\x20image',_0xd868ab,_0x396590);}}}catch(_0x1849d4){console['error'](_0x1849d4);if(!_0x45185f)_0x45185f=_0x1849d4;}finally{if(_0x45185f)_0x5300ba['sendFile'](_0x396590['chat'],_0x45185f,'sticker.webp','',_0x396590,!![],{'contextInfo':{'forwardingScore':0xc8,'isForwarded':![],'externalAdReply':{'showAdAttribution':![],'title':wm,'body':'h','mediaType':0x2,'sourceUrl':nn,'thumbnail':imagen1}}},{'quoted':_0x396590});else return _0x5300ba['reply'](_0x396590['chat'],'🧑🏻‍💻\x20*Lo\x20siento,\x20ocurrió\x20un\x20error.\x20Porfavor,\x20inténtelo\x20de\x20nuevo.\x20No\x20olvides\x20responder\x20el\x20comando\x20a\x20un\x20video,\x20imagen\x20o\x20GIF.*',_0xd868ab,_0x396590);}};handler['help']=['stikerdroid\x20(caption|reply\x20media)','stiker\x20<url>','stikerdroid\x20(caption|reply\x20media)','stikergif\x20<url>'],handler['tags']=['sticker'],handler['command']=/^s(stic?ker)?(gif)?(wm)?$/i,handler['xp']=!![],handler['limit']=0x0;export default handler;const isUrl=_0x21e1d7=>{return _0x21e1d7['match'](new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/,'gi'));};