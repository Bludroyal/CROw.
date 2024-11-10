//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349164718113";
global.owner = process.env.OWNER_NUMBER || "2349030851807";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBmVkdVaDFNMUlkVk5HR2xYTTdIN3hUNklpU01ZbmpFU01MSkdSMnlHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVRMV1NRaXZwWGJOR093TENJZ25HcWtpekVHTWNJMGsvYWszSGNRTjdFST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSVBsbENZd3BSMHlrRjVzaGNZQ3pRd0x0dUVZR2Yzb2pxTEFEdkVYN0dFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKK2Z0bXUxcmxBb1g0dGo5cTdhYURlb3hJc25RTm9DM3V2b0V0dU92TldZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlCT3hSM2ZBUWF0d1UyTG80dVl5VFE4akNDTTFLTEV2NnhQWXVtcjUwR1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFCWG5RTm5uR3UzMWFJOHdjN3JYY3pHMVoyNUVYUnROK2t3YmtUWlhkbkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tPYmNVcUhUTXN2VkRnZy9IQlNtMlJ6V3gyYXFvRFZINVZkZXc0WnoxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2VYZjZXU0F5cm1Qb2JCeExVNC81NnBMWDBzdk5mWE54V1AxQzk3OWYxMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNWSytFcFdSZTVZN0lEbmZybXJudlJtTkt0RC9QYW5VbDJKdWFDMVNJVjlRMDloMkFXS1NubFF1TlJRYXU0bXBGUE1wOVJ5Y05WanpMT1d3TXkyVEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6IjFsdXk3NFU4UCtQaTh6NHpBMm5reng5R1JYcjZ0NDZhd3Q0MFMxZFdjUU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjR6OV9sMy0wUS15VV9TU1M5ZXM4MVEiLCJwaG9uZUlkIjoiNWNkMzg3NzAtY2EzZS00MmQ3LTgxNzktMWM2ZmFmNjNlZmE5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ3akg0Nms0Rjk0bDhLenNMNTJvN2tWOUxEZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrZ2xnUDd0ZnErbEQ0Znk2SitKK3o2Y0VkYkk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM01ZV1Y5NlkiLCJtZSI6eyJpZCI6IjIzNDkwMzA4NTE4MDc6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDUk93LiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTiswZ3RVSkVOQ1F0N2tHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibklPaW5FUXV5cmh4aFZVZTNCbVlveUs4MFhLeVliTGY3blVKKzhFU0gzcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSXhxRWZIVnl3SHM0OXRlaURKL2p0Vjltcmh6dlh1cDhHcEJzbjFEcFBCOS9YOHJrY1REdmZVdnBtdWt4dThQNHc2dW1CTU1LTW84T3oxMCtzMnZraFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjVZRTl5OHFXTGVSOXkxc3p6VEFWbm5IUGVHdGYySG1tR3EwM09vOUlSZFZrb1RMWkJSWXZXYzg1UEdxeEdKcFFSbDUwY3MvTWtaSGR6c1J2VStOZkFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAzMDg1MTgwNzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlp5RG9weEVMc3E0Y1lWVkh0d1ptS01pdk5GeXNtR3kzKzUxQ2Z2QkVoOTcifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzEwNTM2NjAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTkJlIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "CROw.",
  ownername: process.env.OWNER_NAME || "CROw.",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
