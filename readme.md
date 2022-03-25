
## لازم عشان تشغل بوت 

- [Node.js](https://nodejs.org/en/) v16.6.0 or higher
- [Discord.js](https://discord.js.org) v13
- [Mongodb cluster url](https://www.mongodb.com/) in config.json

## Installation | التنزيل
متنساش يا برو دي
```npm
npm install discord.js
```



```js
module.exports = {
  // Important | مهم
  name: 'command_name', // Must be string | يجب ان يكون سترينج
  description: 'command description', // Must be string | يجب ان يكون سترينج
  category: 'command category', // 'Moderation' or 'Public'
  run: async function(client, interaction, args) {
  }
}
```
## اهم حاجه تكون عامل || applications.commands في رابط انفايت
## لاي مشاكل او استفسار روم سبورت في سيرفر موجود