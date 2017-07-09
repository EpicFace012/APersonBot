var Discordie = require("discordie");
var client = new Discordie();

client.connect({
  // replace this sample token
  token: "MzMzNzA3MTk4NzU0NDU1NTcz.DEQkkA.BBWYYrA0n6prRpS04u5F3FRnCSA"
});

client.Dispatcher.on("GATEWAY_READY", e => {
  console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
  if (e.message.content == "ping")
    e.message.channel.sendMessage("pong");
});
client.Dispatcher.on("MESSAGE_CREATE", e => {
  if (e.message.content == "a!pinged")
    e.message.channel.sendMessage("@everyone :joy::ok_hand:");
});
client.Dispatcher.on("MESSAGE_CREATE", e => {
  if (e.message.content == "a!a")
    e.message.channel.sendMessage("https://cdn.discordapp.com/attachments/322133862769754122/333712432788668419/Borys-Jelen_copy.png");
});
client.Dispatcher.on("MESSAGE_CREATE", e => {
  if (e.message.content == "a!died")
    e.message.channel.sendMessage("https://cdn.discordapp.com/attachments/322133862769754122/333715835057340418/IMG_20170630_205318.jpg");
});