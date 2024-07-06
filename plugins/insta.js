let {smd,Config,prefix} = require("../lib")
let axios = require("axios")
const { instagram } = require("mumaker")


 smd({
     pattern: "insta",
   alias:["ig"],
     desc: "Downloads Instagram videos.",
     category: "downloader",
     filename: __filename,
     use: '<add fb url.>'
 },
 async(message, text) => {
   try{
 if(!text || !text.startsWith("https://") ) return await message.send(`*_Please Give me Insta Video Url_*\n*Example _${prefix}insta https://www.instagram.com/reel/Cmvj5aWJE56/?utm_source=ig_web_copy_link_*`);
 let url = text.split(" ")[0]
  let iggg = text.split(" ")[1]
     let type = ["img","pic","photo","image"].includes(iggg) ? "image" : "video"
     
     let insta = await instagram(url)
     if (!insta && !insta[0]) {
     //for (let i=0;i<insta.length;i++) { 
        return await message.bot.sendFileUrl(message.chat, insta[0], Config.caption, message, { author: "Suhail-Md" }, type); //}
     }else {

            const { data } = await axios.get(`https://tools.betabotz.eu.org/tools/instagramdl?url=${url}`);
if(!data || !data.result || !data.result[0]) return message.send(`*_Video not found!_*`)

     return await message.bot.sendFileUrl(message.chat, data.result[0]._url, Config.caption, message, { author: "Suhail-Md" },type); 
    } 
 
   }catch(e){await message.error(`${e}\n\ncommand: insta`,e,`*_Internel Error!_*`)}
 })