module.exports = {
    name: 'ping',
    category: 'Public',
    description: 'View bot ping',
    run: async function (client, interaction, args) {
            interaction.followUp(`ur ping is ${client.ws.ping}ms`)
        }}
