const {DisconnectReason,useMultiFileAuthState,MessageRetryMap,fetchLatestBaileysVersion,makeCacheableSignalKeyStore}=await import('@whiskeysockets/baileys'),{proto}=(await import('@whiskeysockets/baileys'))['default'];import _0x4e7769 from'qrcode';import _0x1294ff from'fs';import _0x5acc0b from'pino';import*as _0x4ee869 from'ws';const {child,spawn,exec}=await import('child_process'),{CONNECTING}=_0x4ee869;import{makeWASocket}from'../lib/simple.js';let crm1='Y2QgcGx1Z2lucy',crm2='A7IG1kNXN1b',crm3='SBpbmZvLWRvbmFyLmpz',crm4='IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz',drm1='CkphZGlib3QsIEhlY2hv',drm2='IHBvciBAQWlkZW5fTm90TG9naWM',rtx='「🤖THE-DROID-BOT🤖」\x0a\x0aScan\x20this\x20QR\x20code\x20to\x20become\x20a\x20Bot\x20(SubBot),\x20you\x20can\x20use\x20another\x20device\x20to\x20scan\x0aSteps\x20to\x20scan:\x0a1.-\x20Click\x20on\x20the\x203\x20dots\x20located\x20in\x20the\x20upper\x20right\x20corner\x20at\x20the\x20beginning\x20of\x20your\x20WhatsApp\x0a2.-\x20Tap\x20where\x20it\x20says\x20WhatsApp\x20web\x20or\x20linked\x20devices\x0a3.-\x20Scan\x20this\x20QR\x20code\x0aThe\x20QR\x20code\x20expires\x20in\x2060\x20seconds!!';if(global['conns']instanceof Array)console['log']();else global['conns']=[];let handler=async(_0x47f22b,{conn:_0x240566,args:_0x13cca8,usedPrefix:_0x2a9ff4,command:_0x4006d4,isOwner:_0x28afed})=>{if(!global['db']['data']['settings'][_0x240566['user']['jid']]['modejadibot'])throw'[❗]\x20This\x20command\x20is\x20disabled\x20by\x20the\x20current\x20owner';let _0x172a4d=_0x240566;if(_0x240566['user']['jid']!==global['conn']['user']['jid'])return _0x172a4d['reply'](_0x47f22b['chat'],'[❗]\x20This\x20command\x20can\x20only\x20be\x20used\x20on\x20a\x20main\x20Botl!!*\x0a\x0a\x20Click\x20here\x20to\x20go:\x0a\x20https://api.whatsapp.com/send/?phone='+global['conn']['user']['jid']['split']`@`[0x0]+'&text='+(_0x2a9ff4+_0x4006d4)+'&type=phone_number&app_absent=0',_0x47f22b);const _0xce44b3=Buffer['from'](crm1+crm2+crm3+crm4,'base64');exec(_0xce44b3['toString']('utf-8'),async(_0x9f0ef2,_0x33e515,_0x5379fa)=>{const _0x744b52=Buffer['from'](drm1+drm2,'base64');async function _0x1261bf(){let _0x154889=_0x47f22b['mentionedJid']&&_0x47f22b['mentionedJid'][0x0]?_0x47f22b['mentionedJid'][0x0]:_0x47f22b['fromMe']?_0x172a4d['user']['jid']:_0x47f22b['sender'],_0x1e523d=''+_0x154889['split']`@`[0x0];!_0x1294ff['existsSync']('./jadibts/'+_0x1e523d)&&_0x1294ff['mkdirSync']('./jadibts/'+_0x1e523d,{'recursive':!![]}),_0x13cca8[0x0]?_0x1294ff['writeFileSync']('./jadibts/'+_0x1e523d+'/creds.json',JSON['stringify'](JSON['parse'](Buffer['from'](_0x13cca8[0x0],'base64')['toString']('utf-8')),null,'\x09')):'';const {state:_0x567ff4,saveState:_0x47af46,saveCreds:_0x2e7ce6}=await useMultiFileAuthState('./jadibts/'+_0x1e523d),_0x1cafae=_0x5b4399=>{},{version:_0x4f399c}=await fetchLatestBaileysVersion(),_0x15456b={'printQRInTerminal':![],'patchMessageBeforeSending':_0x15ec1d=>{const _0x2d7d14=!!(_0x15ec1d['buttonsMessage']||_0x15ec1d['templateMessage']||_0x15ec1d['listMessage']);return _0x2d7d14&&(_0x15ec1d={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x15ec1d}}}),_0x15ec1d;},'getMessage':async _0x5b6f22=>{if(store){const _0x2ddc5a=await store['loadMessage'](_0x5b6f22['remoteJid'],_0x5b6f22['id']);return _0x35b59a['chats'][_0x5b6f22['remoteJid']]&&_0x35b59a['chats'][_0x5b6f22['remoteJid']]['messages'][_0x5b6f22['id']]?_0x35b59a['chats'][_0x5b6f22['remoteJid']]['messages'][_0x5b6f22['id']]['message']:undefined;}return proto['Message']['fromObject']({});},'msgRetryCounterMap':_0x1cafae,'version':_0x4f399c,'auth':{'creds':_0x567ff4['creds'],'keys':makeCacheableSignalKeyStore(_0x567ff4['keys'],_0x5acc0b({'level':'silent'}))},'logger':_0x5acc0b({'level':'silent'}),'browser':['Sub-Droid-Bot','Safari','1.0.0'],'defaultQueryTimeoutMs':undefined};let _0x35b59a=makeWASocket(_0x15456b);_0x35b59a['isInit']=![];let _0x58af8c=!![];async function _0x548c91(_0x19f244){const {connection:_0x37b567,lastDisconnect:_0xedfdd3,isNewLogin:_0xe5e895,qr:_0x359d53}=_0x19f244;if(_0xe5e895)_0x35b59a['isInit']=![];if(_0x359d53)_0x172a4d['sendMessage'](_0x47f22b['chat'],{'image':await _0x4e7769['toBuffer'](_0x359d53,{'scale':0x8}),'caption':rtx+_0x744b52['toString']('utf-8')},{'quoted':_0x47f22b});const _0x5f5057=_0xedfdd3?.['error']?.['output']?.['statusCode']||_0xedfdd3?.['error']?.['output']?.['payload']?.['statusCode'];if(_0x5f5057&&_0x5f5057!==DisconnectReason['loggedOut']&&_0x35b59a?.['ws']['socket']==null){let _0x444497=global['conns']['indexOf'](_0x35b59a);if(_0x444497<0x0)return console['log'](await _0x380e40(!![])['catch'](console['error']));delete global['conns'][_0x444497],global['conns']['splice'](_0x444497,0x1),_0x5f5057!==DisconnectReason['connectionClosed']?_0x172a4d['sendMessage'](_0x47f22b['chat'],{'text':'[❗]\x20The\x20connection\x20was\x20closed,\x20an\x20attempt\x20will\x20be\x20made\x20to\x20reconnect\x20automatically...'},{'quoted':_0x47f22b}):_0x172a4d['sendMessage'](_0x47f22b['chat'],{'text':'[❗]\x20\x20The\x20connection\x20was\x20closed,\x20you\x20will\x20have\x20to\x20connect\x20manually\x20by\x20sending\x20the\x20command\x20#serbot\x20and\x20rescan\x20the\x20new\x20QR\x20code'},{'quoted':_0x47f22b}),console['log'](await _0x380e40(![])['catch'](console['error']));}if(global['db']['data']==null)loadDatabase();if(_0x37b567=='open'){_0x35b59a['isInit']=!![],global['conns']['push'](_0x35b59a),await _0x172a4d['sendMessage'](_0x47f22b['chat'],{'text':_0x13cca8[0x0]?'[❗]\x20Successfully\x20reconnected!!':'[❗]\x20Connected\x20successfully!!\x20To\x20reconnect\x20use\x20'+(_0x2a9ff4+_0x4006d4)},{'quoted':_0x47f22b});if(_0x37b567==='open')return _0x172a4d['sendMessage'](_0x47f22b['chat'],{'text':'[❗]\x20You\x20are\x20already\x20connected,\x20be\x20patient,\x20the\x20messages\x20are\x20loading...\x0a\x0a\x20To\x20stop\x20being\x20a\x20Bot\x20you\x20can\x20use:\x0a#deletebot\x0a\x20To\x20become\x20a\x20Bot\x20again\x20and\x20rescan\x20the\x20QR\x20code\x20you\x20can\x20use:\x0a'+(_0x2a9ff4+_0x4006d4)},{'quoted':_0x47f22b}),console['log'](await _0x380e40(![])['catch'](console['error']));await sleep(0x1388);if(!_0x13cca8[0x0])_0x172a4d['sendMessage'](_0x47f22b['chat'],{'text':_0x2a9ff4+_0x4006d4+'\x20'+Buffer['from'](_0x1294ff['readFileSync']('./jadibts/'+_0x1e523d+'/creds.json'),'utf-8')['toString']('base64')},{'quoted':_0x47f22b});}}setInterval(async()=>{if(!_0x35b59a['user']){try{_0x35b59a['ws']['close']();}catch{}_0x35b59a['ev']['removeAllListeners']();let _0x16745b=global['conns']['indexOf'](_0x35b59a);if(_0x16745b<0x0)return;delete global['conns'][_0x16745b],global['conns']['splice'](_0x16745b,0x1);}},0xea60);let _0x2c690c=await import('../handler.js'),_0x380e40=async function(_0x483e25){try{const _0x1a7e58=await import('../handler.js?update='+Date['now']())['catch'](console['error']);if(Object['keys'](_0x1a7e58||{})['length'])_0x2c690c=_0x1a7e58;}catch(_0x1054ea){console['error'](_0x1054ea);}if(_0x483e25){try{_0x35b59a['ws']['close']();}catch{}_0x35b59a['ev']['removeAllListeners'](),_0x35b59a=makeWASocket(_0x15456b),_0x58af8c=!![];}return!_0x58af8c&&(_0x35b59a['ev']['off']('messages.upsert',_0x35b59a['handler']),_0x35b59a['ev']['off']('group-participants.update',_0x35b59a['participantsUpdate']),_0x35b59a['ev']['off']('groups.update',_0x35b59a['groupsUpdate']),_0x35b59a['ev']['off']('message.delete',_0x35b59a['onDelete']),_0x35b59a['ev']['off']('call',_0x35b59a['onCall']),_0x35b59a['ev']['off']('connection.update',_0x35b59a['connectionUpdate']),_0x35b59a['ev']['off']('creds.update',_0x35b59a['credsUpdate'])),_0x35b59a['handler']=_0x2c690c['handler']['bind'](_0x35b59a),_0x35b59a['participantsUpdate']=_0x2c690c['participantsUpdate']['bind'](_0x35b59a),_0x35b59a['groupsUpdate']=_0x2c690c['groupsUpdate']['bind'](_0x35b59a),_0x35b59a['onDelete']=_0x2c690c['deleteUpdate']['bind'](_0x35b59a),_0x35b59a['onCall']=_0x2c690c['callUpdate']['bind'](_0x35b59a),_0x35b59a['connectionUpdate']=_0x548c91['bind'](_0x35b59a),_0x35b59a['credsUpdate']=_0x2e7ce6['bind'](_0x35b59a,!![]),_0x35b59a['ev']['on']('messages.upsert',_0x35b59a['handler']),_0x35b59a['ev']['on']('group-participants.update',_0x35b59a['participantsUpdate']),_0x35b59a['ev']['on']('groups.update',_0x35b59a['groupsUpdate']),_0x35b59a['ev']['on']('message.delete',_0x35b59a['onDelete']),_0x35b59a['ev']['on']('call',_0x35b59a['onCall']),_0x35b59a['ev']['on']('connection.update',_0x35b59a['connectionUpdate']),_0x35b59a['ev']['on']('creds.update',_0x35b59a['credsUpdate']),_0x58af8c=![],!![];};_0x380e40(![]);}_0x1261bf();});};handler['help']=['jadibot','serbot','getcode','rentbot'],handler['tags']=['jadibot'],handler['command']=/^(jadibot|serbot|qr|getcode|rentbot)/i,handler['register']=!![];export default handler;const delay=_0x179f3e=>new Promise(_0x372318=>setTimeout(_0x372318,_0x179f3e));function sleep(_0x5906eb){return new Promise(_0x20e62e=>setTimeout(_0x20e62e,_0x5906eb));}