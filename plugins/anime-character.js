//Codígo creado por David Chian wa.me/5351524614
function _0x23cb(){const _0x48e3ae=['14932cVdwZR','8NHHlbZ','includes','49fVcUUz','characters','./package.json','3870276BCUnle','70icZJye','character','No\x20se\x20encontró\x20información\x20para\x20el\x20personaje\x20','git+https://github.com/Dev-Diego/YaemoriBot-MD.git','chat','repository','*\x20y\x20su\x20valor\x20es\x20','usuarios','data.json','utf-8','No\x20tienes\x20el\x20personaje\x20','name','2768240XdsBWE','4564002JqIZxM','command','reply','Error\x20al\x20leer\x20package.json:','🚩\x20Este\x20comando\x20solo\x20está\x20disponible\x20para\x20AI\x20Yaemori.\x0a\x20🌟\x20https://github.com/Dev-Diego/YaemoriBot-MD','value','error','sendMessage','find','Este\x20es\x20tu\x20personaje\x20*','readFileSync','2224323smNpym','./src/JSON/characters.json','toLowerCase','existsSync','175845NMwpmy','165iwOtfB','tags','parse','url','\x20en\x20tu\x20inventario.','737688OSvFbo','register','trim','143WqFaII'];_0x23cb=function(){return _0x48e3ae;};return _0x23cb();}const _0x589280=_0x4bb8;(function(_0x23d56b,_0x414214){const _0x5c63d6=_0x4bb8,_0x5c3675=_0x23d56b();while(!![]){try{const _0xea337d=parseInt(_0x5c63d6(0x194))/0x1*(-parseInt(_0x5c63d6(0x19d))/0x2)+parseInt(_0x5c63d6(0x193))/0x3*(parseInt(_0x5c63d6(0x19e))/0x4)+-parseInt(_0x5c63d6(0x183))/0x5+parseInt(_0x5c63d6(0x184))/0x6+parseInt(_0x5c63d6(0x1a0))/0x7*(-parseInt(_0x5c63d6(0x199))/0x8)+parseInt(_0x5c63d6(0x18f))/0x9*(-parseInt(_0x5c63d6(0x1a4))/0xa)+-parseInt(_0x5c63d6(0x19c))/0xb*(-parseInt(_0x5c63d6(0x1a3))/0xc);if(_0xea337d===_0x414214)break;else _0x5c3675['push'](_0x5c3675['shift']());}catch(_0x53cebc){_0x5c3675['push'](_0x5c3675['shift']());}}}(_0x23cb,0xde154));import _0x4341aa from'fs';const obtenerDatos=()=>{const _0xd58536=_0x4bb8;return _0x4341aa[_0xd58536(0x192)](_0xd58536(0x1ac))?JSON[_0xd58536(0x196)](_0x4341aa['readFileSync']('data.json','utf-8')):{'usuarios':{},'personajesReservados':[]};},obtenerPersonajes=()=>{const _0x31ec2f=_0x4bb8;return _0x4341aa[_0x31ec2f(0x192)](_0x31ec2f(0x190))?JSON['parse'](_0x4341aa['readFileSync'](_0x31ec2f(0x190),_0x31ec2f(0x1ad))):[];};function _0x4bb8(_0x52a025,_0x14fad8){const _0x23cb2f=_0x23cb();return _0x4bb8=function(_0x4bb821,_0x186da0){_0x4bb821=_0x4bb821-0x183;let _0xaabd10=_0x23cb2f[_0x4bb821];return _0xaabd10;},_0x4bb8(_0x52a025,_0x14fad8);}let handler=async(_0x29a7c9,{conn:_0x5d02fa,text:_0x53bbb8})=>{const _0x4c5108=_0x4bb8;if(!_0x53bbb8){_0x5d02fa['reply'](_0x29a7c9[_0x4c5108(0x1a8)],'Por\x20favor,\x20proporciona\x20el\x20nombre\x20del\x20personaje\x20que\x20deseas\x20ver.\x20Ejemplo:\x20.character\x20Megumin',_0x29a7c9);return;}const _0x2ae705=()=>{const _0x1498f3=_0x4c5108;try{const _0xa4a02b=JSON[_0x1498f3(0x196)](_0x4341aa[_0x1498f3(0x18e)](_0x1498f3(0x1a2),_0x1498f3(0x1ad)));if(_0xa4a02b[_0x1498f3(0x1af)]!=='YaemoriBot-MD')return![];if(_0xa4a02b[_0x1498f3(0x1a9)][_0x1498f3(0x197)]!==_0x1498f3(0x1a7))return![];return!![];}catch(_0x45354c){return console[_0x1498f3(0x18a)](_0x1498f3(0x187),_0x45354c),![];}};if(!_0x2ae705()){await _0x5d02fa[_0x4c5108(0x186)](_0x29a7c9[_0x4c5108(0x1a8)],_0x4c5108(0x188),_0x29a7c9,rcanal);return;}let _0x359e2f=_0x29a7c9['sender'],_0x59077a=_0x53bbb8[_0x4c5108(0x19b)](),_0x485b8d=obtenerDatos(),_0x1b01b9=obtenerPersonajes();if(!_0x485b8d['usuarios'][_0x359e2f]||!_0x485b8d[_0x4c5108(0x1ab)][_0x359e2f][_0x4c5108(0x1a1)][_0x4c5108(0x19f)](_0x59077a)){_0x5d02fa[_0x4c5108(0x186)](_0x29a7c9[_0x4c5108(0x1a8)],_0x4c5108(0x1ae)+_0x59077a+_0x4c5108(0x198),_0x29a7c9,rcanal);return;}let _0x1dc832=_0x1b01b9[_0x4c5108(0x18c)](_0x446828=>_0x446828[_0x4c5108(0x1af)][_0x4c5108(0x191)]()===_0x59077a[_0x4c5108(0x191)]());if(!_0x1dc832){_0x5d02fa[_0x4c5108(0x186)](_0x29a7c9[_0x4c5108(0x1a8)],_0x4c5108(0x1a6)+_0x59077a+'.',_0x29a7c9,rcanal);return;}const _0x116051=_0x4c5108(0x18d)+_0x1dc832['name']+_0x4c5108(0x1aa)+_0x1dc832[_0x4c5108(0x189)]+'\x20RWcoins.';await _0x5d02fa[_0x4c5108(0x18b)](_0x29a7c9[_0x4c5108(0x1a8)],{'image':{'url':_0x1dc832[_0x4c5108(0x197)]},'caption':_0x116051,'mimetype':'image/jpeg'});};handler['help']=[_0x589280(0x1a5)],handler[_0x589280(0x195)]=['anime'],handler[_0x589280(0x185)]=['character'],handler[_0x589280(0x19a)]=!![];export default handler;