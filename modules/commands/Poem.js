function _0x6589(){var _0x28c45b=['7795hyXfil','exports','200zcjYJT','14cUAYaO','1840440AvXiUi','949uQTdfh','Posts\x20poem','49469SvmDCb','5331491kROqCO','733323MIWXDt','ManhG','68VkGLaH','13599hEbkGx','168njBEIH','config','1.0.5','poem','Horoscope'];_0x6589=function(){return _0x28c45b;};return _0x6589();}var _0x3e37c9=_0x1fbe;function _0x1fbe(_0x1a42e5,_0x1156c6){var _0x36ed12=_0x6589();return _0x1fbe=function(_0x434b77,_0x3a18bf){_0x434b77=_0x434b77-(0x210f+-0xec7+-0x1099);var _0x4ea8d5=_0x36ed12[_0x434b77];return _0x4ea8d5;},_0x1fbe(_0x1a42e5,_0x1156c6);}(function(_0x5750f8,_0x5b3cd0){var _0x2a907a=_0x1fbe,_0x172039=_0x5750f8();while(!![]){try{var _0x51597d=parseInt(_0x2a907a(0x1b3))/(-0xbdd+-0x1b*-0x95+-0x3d9)*(-parseInt(_0x2a907a(0x1b1))/(-0x1c*0x75+-0x9aa*0x3+0x29cc))+parseInt(_0x2a907a(0x1b7))/(-0x2*-0x815+-0x76+-0xfb1)+-parseInt(_0x2a907a(0x1b9))/(0x1*-0xd86+0x1c1a+-0xe90)*(parseInt(_0x2a907a(0x1c0))/(-0x885*0x3+-0x1ad0+0x3464))+parseInt(_0x2a907a(0x1bb))/(0x26f*0x6+-0x22c*0x1+0x2*-0x634)*(parseInt(_0x2a907a(0x1b5))/(0xd21*0x2+0x1*0x188a+-0x32c5*0x1))+parseInt(_0x2a907a(0x1b0))/(-0x21f0+-0x1ad4*0x1+-0x3*-0x1444)*(parseInt(_0x2a907a(0x1ba))/(-0x1348+0xa3f+-0x36*-0x2b))+parseInt(_0x2a907a(0x1b2))/(0x9d1+-0x1*-0x13b5+-0x1d7c)+-parseInt(_0x2a907a(0x1b6))/(0x15c+-0x20e*0x2+0x2cb);if(_0x51597d===_0x5b3cd0)break;else _0x172039['push'](_0x172039['shift']());}catch(_0x7725bf){_0x172039['push'](_0x172039['shift']());}}}(_0x6589,0xa933*0x1+-0x3*-0x1718c+-0x201b*0x16),module[_0x3e37c9(0x1af)][_0x3e37c9(0x1bc)]={'name':_0x3e37c9(0x1be),'version':_0x3e37c9(0x1bd),'hasPermssion':0x0,'credits':_0x3e37c9(0x1b8),'description':_0x3e37c9(0x1b4),'commandCategory':_0x3e37c9(0x1bf),'usages':'','cooldowns':0x5});

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const res = await axios.get(`https://le31.glitch.me/poem`);
var poem =       res.data.data;

console.log(poem)

return api.sendMessage(` ★ == Poem == ★ \n\n${poem}  `, event.threadID, event.messageID)
}