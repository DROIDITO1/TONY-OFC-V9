import{createHash}from'crypto';import _0x5189b1 from'awesome-phonenumber';import _0x5ac80f from'node-fetch';let handler=async(_0x3fb767,{conn:_0x383f8c,usedPrefix:_0x180624,participants:_0x2046cb,isPrems:_0x3e81d7})=>{let _0xe6921f='https://imgur.com/gallery/Bm3ekS0.png',_0x4214db=_0x3fb767['mentionedJid']&&_0x3fb767['mentionedJid'][0x0]?_0x3fb767['mentionedJid'][0x0]:_0x3fb767['fromMe']?_0x383f8c['user']['jid']:_0x3fb767['sender'];if(!(_0x4214db in global['db']['data']['users']))throw'El\x20usuario\x20que\x20está\x20mencionando\x20no\x20está\x20registrado\x20en\x20mi\x20base\x20de\x20datos';try{_0xe6921f=await _0x383f8c['profilePictureUrl'](_0x4214db);}catch(_0x580d60){}finally{let {name:_0x4691fb,role:_0x3833a2,role2:_0x151ffe,level:_0x1a483b,limit:_0x3ada30,money:_0x4d1df8,exp:_0x3ae612,joincount:_0x183d61,lastclaim:_0x1a58ab,registered:_0x1627a9,regTime:_0x28238f,age:_0x46e1c2,premiumTime:_0xdc6d91}=global['db']['data']['users'][_0x4214db],_0x4dbec6=_0x383f8c['getName'](_0x4214db),_0x42825a=global['prems']['includes'](_0x4214db['split']`@`[0x0]),_0x430846=createHash('md5')['update'](_0x4214db)['digest']('hex'),_0x5d04b5=gt+'x0a╭•⋆҈͜͡.➣❂ᵈʳᵒⁱᵈⁱᵗᵒ\x20ᵇᵒᵗ❂◄⋆҈͜͡•╮\x0a╽\x20❰❰❰❰❰\x20PERFIL\x20❱❱❱❱❱\x0a┃📛\x20Nombre:'+_0x4dbec6+'\x20'+(_0x1627a9?'('+_0x4691fb+')\x20':'')+'\x0a┃🔗Link:\x20wa.me/'+_0x4214db['split']`@`[0x0]+(_0x1627a9?'\x0a*EDAD:*\x20'+_0x46e1c2+'\x20años':'')+'\x0a┃❗️Rango:\x20'+_0x3833a2+'\x20ღ\x0a乂✰\x20can\x20\x20'+_0x151ffe+'\x0a┃💥Nivel\x20'+_0x1a483b+'\x20ღ\x0a乂✰\x20xp\x20'+_0x3ae612+'\x0a┃💎Diamantes:\x20'+_0x3ada30+'\x0a┃👤Droid-Coins:\x20'+_0x4d1df8+'\x0a┃Dólares:\x20\x20'+_0x183d61+'\x0a┃🧑🏻‍💻Registrado?:\x20'+(_0x1627a9?'Si':'No')+'\x0a┃🗣Premium:\x20'+(_0xdc6d91>0x0?'Si':(_0x3e81d7?'Si':'No')||'')+'\x20\x0a╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂•╯';_0x383f8c['sendMessage'](_0x3fb767['chat'],{'image':{'url':_0xe6921f},'caption':_0x5d04b5},{'quoted':_0x3fb767});}};handler['help']=['profile\x20[@user]'],handler['tags']=['xp'],handler['command']=/^perfil|profile?$/i,handler['limit']=!![];export default handler;