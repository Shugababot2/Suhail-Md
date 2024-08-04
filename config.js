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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349124503464";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_33_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM4LFxuICAgICAgICA5NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDUwLFxuICAgICAgICA3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgODIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM4LFxuICAgICAgICA0NCxcbiAgICAgICAgODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDU5LFxuICAgICAgICA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgODUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDgxLFxuICAgICAgICA3LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDg4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDcxLFxuICAgICAgICA4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDg5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIRy9tYUFadEVBL3A0L3NqNm92ekllSHFwdFBQc042dlBJSHR4UzhpWlQ4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6cTFWdlE1QVF1SzBDUjgzb3gtLXlRXCIsXG4gIFwicGhvbmVJZFwiOiBcImYyOTYzOTFhLTg1MmYtNGViMS1iMzZiLWU0ZjkwZTc1YjgwNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICA5NyxcbiAgICAgIDE1OSxcbiAgICAgIDE0NixcbiAgICAgIDE2NixcbiAgICAgIDE2MCxcbiAgICAgIDc3LFxuICAgICAgMjI2LFxuICAgICAgNTQsXG4gICAgICAxNzAsXG4gICAgICAxODcsXG4gICAgICA5NixcbiAgICAgIDMzLFxuICAgICAgMTM5LFxuICAgICAgMTU5LFxuICAgICAgMjIzLFxuICAgICAgMjA0LFxuICAgICAgNjYsXG4gICAgICAxODQsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMjE3LFxuICAgICAgODYsXG4gICAgICAyMjMsXG4gICAgICA4MyxcbiAgICAgIDI1MSxcbiAgICAgIDYxLFxuICAgICAgODEsXG4gICAgICAxNjQsXG4gICAgICA3OSxcbiAgICAgIDU0LFxuICAgICAgMTc1LFxuICAgICAgMjUsXG4gICAgICAxNzksXG4gICAgICA2MCxcbiAgICAgIDgyLFxuICAgICAgOCxcbiAgICAgIDgsXG4gICAgICAyMyxcbiAgICAgIDE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdYUjYxVzlZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTI0NTAzNDY0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzc2MTAwNDMwMTUyNDg6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWZxOWFBQkVJbXZ2N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYTndWRDk4Nnd3WTc0UkdPekRUUlJYbEhrZ0pLeHlZUUcvMmpHb09tM3hBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBpN0gxYndsbFpkTDFpWlRwOXNiaFJvUzFjL2dsdmlJVmthRG5haVo3VEJrQm5adHZ5WDVZR2hxd2FKa0c5WXh1Z3FBMithT01rRGRXazdPYTJha0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5IN1R4MERSZWJLUmxaQ1JEdEUrRTcyRFNRc0w5U0U2QjgybFZJQWdhVTYzdXk0ZTdsZWplemJSUmpCUm9LUTIwMUhsdzhMOFhzRTR0MFVrci96YWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjQ1MDM0NjQ6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjgwMDAxM1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
