const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Hassan:hassan@cluster0.dm4vjz8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_42_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICA5NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMixcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDM5LFxuICAgICAgICA3NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDcyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDk1LFxuICAgICAgICA5NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODcsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICA4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0LFxuICAgICAgICA4NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDY2LFxuICAgICAgICA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTcsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyQW5wNWNPWWswZlJ4WDdTNTNyU2RCUmJCczNLV29HQnF2ZE1lUnJTeEdJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA5OTIyMDg1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0VEQzA0RUI4RkVDRjQ1NTBENzVGRTY5REYwQjdCQ0VcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDQ5NzQyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDk5MjIwODUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1ODYxQkM3MjI5MjRGNjYwNUJBRDgwMDlEMTcwNzdCRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0NDk3NDNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMkczZnpsSDZTSnVLN2xJM2lLWDRmQVwiLFxuICBcInBob25lSWRcIjogXCIxZmI5ZWU3OC1hM2I0LTRlNWQtOWU2YS05NzQzYzJhZTdlOTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICAyMzcsXG4gICAgICAxMjMsXG4gICAgICA2NCxcbiAgICAgIDI1LFxuICAgICAgMzMsXG4gICAgICAyMjgsXG4gICAgICAxODcsXG4gICAgICAxNjYsXG4gICAgICAxNjgsXG4gICAgICAxOTAsXG4gICAgICAxMjcsXG4gICAgICAxMzgsXG4gICAgICAyMyxcbiAgICAgIDEwNCxcbiAgICAgIDE3NCxcbiAgICAgIDE3NyxcbiAgICAgIDkxLFxuICAgICAgMTU0LFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDI1NSxcbiAgICAgIDExMyxcbiAgICAgIDIzMSxcbiAgICAgIDIwMyxcbiAgICAgIDQ0LFxuICAgICAgMTQ3LFxuICAgICAgNTksXG4gICAgICAyMjEsXG4gICAgICAzMixcbiAgICAgIDI0NSxcbiAgICAgIDIyNSxcbiAgICAgIDIxOCxcbiAgICAgIDIwMSxcbiAgICAgIDIwOCxcbiAgICAgIDE2OSxcbiAgICAgIDYyLFxuICAgICAgMTgyLFxuICAgICAgMTQxLFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkI4NzM4UDVYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwOTkyMjA4NTA6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MTIzMDg1OTQ2MDc0OTozM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmI8J2ZlvCdmaHwnZme8J2ZoCDwnZi98J2ZlvCdmabwnZme8J2Zp1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0krbHJ1SUZFTVgxcjdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib2tlMFRCOGo5UklsY1l4VlNjYUYyUVNrWFJnWU0rdXd3TjN2UVdCVDJSUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxZFVQaVJjelF3aU1hWjAzbGJtdWJleE1ZY0FHdFkzWTAyeDdLaTFFSHhvaHpEK3NYdUI0OTlLSFVjUkl6dWM5R3NBSjJMSFh0SlJuWGMzRUcya3FBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIZVgrRDNEbHhxZXNUSnR5QzFEaVNQOWt1eVNVTU5jVTRRMThFdDhiaWF5ckFWQ2RWWkNiaHlJdEpMUDR6MC8xV2Jua0IydHJvK25xOU9wM0FUZHpoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwOTkyMjA4NTA6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NDk3MzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFZzRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVnNC5qc29uIjogIntcImtleURhdGFcIjpcIkZzSnBVZ3IveGRZTjRrMFMwWGQ5U2lZbGJ0b3dQKy9jelhGY3pNdnEydk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU0ODQ1NjU5MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNDQ5NzQyNDQ3XCJ9Igp9"  // PUT your SESSION_ID 


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
