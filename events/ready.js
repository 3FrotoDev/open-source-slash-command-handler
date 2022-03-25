module.exports = async (client) => {
    console.log(`I'm ready  ${client.user.tag} guilds size is  ${client.guilds.cache.size}`)
    client.user.setStatus("dnd")
    client.user.setActivity({ name: `ur activity`, type: "PLAYING" });
}
