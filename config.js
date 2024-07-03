const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_12_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk2LFxuICAgICAgICA1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIzLFxuICAgICAgICA1MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NixcbiAgICAgICAgMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzUsXG4gICAgICAgIDczLFxuICAgICAgICA3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NixcbiAgICAgICAgMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjExLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImtvQU56TTcwK05KSUI0TXRWU1JZOVRVb2h6RThoMlV6YTR5UFNhS3ArWXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTg3OTkxMDY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzOEZFRTI0ODEyMkE1MzFFN0U1NUU4QkRDN0U4MURGMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAwMDg3NDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxODc5OTEwNjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkUyNUY3MUQ3MTEwRjIzQUJCNzVGQjQ4RkRDNkY2NjNBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDAwODc0NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJreklwdGFPcVRqMlhQVlR0TmRyRS13XCIsXG4gIFwicGhvbmVJZFwiOiBcImNkNjU1OWRiLTIxYzAtNGYyMi05NGJiLTkwNDZmNWI2ZTRkY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICA0NyxcbiAgICAgIDIwNixcbiAgICAgIDExLFxuICAgICAgMjA2LFxuICAgICAgMTM2LFxuICAgICAgMjQ0LFxuICAgICAgMTk2LFxuICAgICAgOTcsXG4gICAgICAzLFxuICAgICAgOTIsXG4gICAgICAxNzcsXG4gICAgICAxNTMsXG4gICAgICAyMzEsXG4gICAgICAxNCxcbiAgICAgIDIyMCxcbiAgICAgIDIxMCxcbiAgICAgIDE0LFxuICAgICAgMjM4LFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMTE5LFxuICAgICAgOCxcbiAgICAgIDE0MyxcbiAgICAgIDEzNSxcbiAgICAgIDEzNSxcbiAgICAgIDIxMSxcbiAgICAgIDIyLFxuICAgICAgMjM1LFxuICAgICAgNzgsXG4gICAgICAxMTUsXG4gICAgICAyMTgsXG4gICAgICA2MSxcbiAgICAgIDIyNixcbiAgICAgIDc2LFxuICAgICAgMTY2LFxuICAgICAgMjM3LFxuICAgICAgMzQsXG4gICAgICAxNzUsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLUy8rVlFRbjRDVnRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjU1b1NxRDRRRTZPS3lVN2tEbzh1ZlRQQXY1bjZlb21XbUQwb2FwZHpMRm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVUVMeGIwV1JrZ3VlcUNhejhDUXh1a3ljd0JMMWRsaU52QnFEZmJFTHk5TjNiWGFZY1lkWmRIZk1TeC94clloLzZSay93KytuTG9VVzAyYmVYdXd0Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicGl4YXdzY0wwN3lhNmRueFh4TVRPSUxyUjgvMjZrbXBHTjRXQ0NBT3dJdFZnUGV3MXgrTlFSVVVkNXNVUi9MdFkyek5yY3pPZHM3c01abkQyQUZ1alE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxODc5OTEwNjg6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQyNzE3ODcwOTQ4MzU1OjlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTg3OTkxMDY4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwMDg3MzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLT2xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtPbC5qc29uIjogIntcImtleURhdGFcIjpcIkRLMXpPaTJ0S0RkVlhkdzRPaGRkeklXN2ZzOHJ2MjBVTjVsU0o0cGFtR2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc4MTUxMzMyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAwMDg3NDE1MzlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
