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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_10_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDI4LFxuICAgICAgICAyMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDksXG4gICAgICAgIDY5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMyLFxuICAgICAgICA1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI5LFxuICAgICAgICA4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQwLFxuICAgICAgICA2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM4LFxuICAgICAgICA2MixcbiAgICAgICAgMTU4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU4LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MyxcbiAgICAgICAgMyxcbiAgICAgICAgNTksXG4gICAgICAgIDQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgODQsXG4gICAgICAgIDQsXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2LFxuICAgICAgICAxMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODksXG4gICAgICAgIDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTExLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPNDZCcDVVKyt4SUdaMHVUYk9STDN5Umg3eTR6U2lSMW01VXZkNlJua2NvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA5OTIyMDg1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUIyMDM3Q0FDRjQ1NUQzNTNGNEM0Nzg0M0FEQUYwREFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDUxNDUxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDk5MjIwODUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQUU0RTU5Mzg2QzA1ODk1OEI3QzIyNDIwRjUxQkIwMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0NTE0NTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN0RxYzVXTDhTcU83M1pKRHY4ZXprZ1wiLFxuICBcInBob25lSWRcIjogXCI5ODYzYjBiMi04NGRlLTQ5N2ItOWIwOS1iY2NmNTQ4YzA4NzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMTMxLFxuICAgICAgNixcbiAgICAgIDg5LFxuICAgICAgODAsXG4gICAgICAxNjEsXG4gICAgICAxMjEsXG4gICAgICAyNTMsXG4gICAgICAxOTIsXG4gICAgICAxOTAsXG4gICAgICAxNTUsXG4gICAgICAxNzYsXG4gICAgICAxMDMsXG4gICAgICA5MixcbiAgICAgIDE2NSxcbiAgICAgIDIxOCxcbiAgICAgIDIwNSxcbiAgICAgIDAsXG4gICAgICAxNzMsXG4gICAgICA5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAyMDUsXG4gICAgICAyNCxcbiAgICAgIDE2MixcbiAgICAgIDk0LFxuICAgICAgMTc3LFxuICAgICAgMjksXG4gICAgICAxMjgsXG4gICAgICAxODcsXG4gICAgICAyMDcsXG4gICAgICAyMixcbiAgICAgIDg3LFxuICAgICAgMjI4LFxuICAgICAgOTMsXG4gICAgICA4LFxuICAgICAgMzUsXG4gICAgICAyMDIsXG4gICAgICAxOTQsXG4gICAgICA4NyxcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU1NDS1pNUVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA5OTIyMDg1MDozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgxMjMwODU5NDYwNzQ5OjM4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmYjwnZmW8J2ZofCdmZ7wnZmgIPCdmL3wnZmW8J2ZpvCdmZ7wnZmnXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlNscnVJRkVQV0NzTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJva2UwVEI4ajlSSWxjWXhWU2NhRjJRU2tYUmdZTSt1d3dOM3ZRV0JUMlJRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9Tai9IZFpsMnJTUEl4RGRDQmg5SVFBT1pxYzlkTWdFTkJEM2ZMRU91T0N1eE1BcitqMW5RNlpVNUx3cGFaRVRsZkFFOVIxc2xmb1A0RW1ubytJZUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInBnWWRyWXoyQzBqSHBMZHltaUF2WG96TzhxcmJNdVZpNms4M1BteU5DMEZveDY1dDdQSWwvVStNdGR3UnU0bGJCY0lGeHhHMU9vSmV1V0ZoR3N1SkFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA5OTIyMDg1MDozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ1MTQ0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVnOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWc5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiMTgwV29zUmhTOXMvdEk2VE8rUTh0aVNQSHphT2xjdkJpbEZKWURYSGlYaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTQ4NDU2NTk2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0NTE0NTE2NTNcIn0iCn0="  // PUT your SESSION_ID 


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
