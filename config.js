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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_27_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAzNixcbiAgICAgICAgMTkyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYxLFxuICAgICAgICA3MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxLFxuICAgICAgICA5NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NixcbiAgICAgICAgMTUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NSxcbiAgICAgICAgOSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAyMixcbiAgICAgICAgMTYxLFxuICAgICAgICA3NixcbiAgICAgICAgMjAzLFxuICAgICAgICA3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDg2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDkyLFxuICAgICAgICA5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzLFxuICAgICAgICA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgzLFxuICAgICAgICA3OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHT3BHRXJreTVWWkhlRDVudUJ0SnZwRUYzUytGQ3NGL0V1Q0FhcS9ydXc0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA5OTIyMDg1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTA3MzY2QTI4NTc4RjlBODczNUNGMzkyODY2M0QzRTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDUyNDQ1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDk5MjIwODUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyREYwQzM2M0Y2NDI3Njc5QTIzQ0IzNzM4NkFFQjI0MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0NTI0NDZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiczlwVmx3S3lSOUtwVXltWlZqamRZd1wiLFxuICBcInBob25lSWRcIjogXCJhNjQzMTk1Yy1jMGNhLTQxYmMtYmFmMy02MDc4ZjI1MzNlNDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ2LFxuICAgICAgMjYsXG4gICAgICAxNTUsXG4gICAgICAyMzcsXG4gICAgICA1NyxcbiAgICAgIDgxLFxuICAgICAgMyxcbiAgICAgIDkwLFxuICAgICAgMTA0LFxuICAgICAgMTkzLFxuICAgICAgMjcsXG4gICAgICAyMDIsXG4gICAgICAzOCxcbiAgICAgIDg4LFxuICAgICAgMTkxLFxuICAgICAgNjMsXG4gICAgICAxNCxcbiAgICAgIDIwNixcbiAgICAgIDE3MixcbiAgICAgIDIxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMixcbiAgICAgIDUwLFxuICAgICAgMjMyLFxuICAgICAgMTgyLFxuICAgICAgNzAsXG4gICAgICAxODgsXG4gICAgICA4MSxcbiAgICAgIDk4LFxuICAgICAgMTQ1LFxuICAgICAgMTEwLFxuICAgICAgMTg3LFxuICAgICAgMjA0LFxuICAgICAgMTY4LFxuICAgICAgMTM5LFxuICAgICAgMjAwLFxuICAgICAgMTA2LFxuICAgICAgMjM5LFxuICAgICAgMjM2LFxuICAgICAgMTk4LFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpISERFN1RXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwOTkyMjA4NTA6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MTIzMDg1OTQ2MDc0OTozOUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmI8J2ZlvCdmaHwnZme8J2ZoCDwnZi98J2ZlvCdmabwnZme8J2Zp1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pXbHJ1SUZFTldLc0xRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib2tlMFRCOGo5UklsY1l4VlNjYUYyUVNrWFJnWU0rdXd3TjN2UVdCVDJSUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWNnlZUEdBOUJENk1GY3Ryb2ZjMGNTR2pLei9QOWFWUUxXUFltdG94WWFBeDNZZWFPL3RDa1U3cXF5aHgxU0pzcXJzNEZHV3poYnZKdHV1QURJZ0tCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPcDlRWTNicVZzZFBZekRCRXJGWDc1SHYrQ3lNemNlTWUvUFBGclI3Tk5QVDRpRERvSkVVWDJ0cHVoK0hXZjRML0g3S2NYeGxoY3N0UU4xa0grZ29pdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwOTkyMjA4NTA6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NTI0NDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFZy9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVnLy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
