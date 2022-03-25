module.exports = {
    name: 'ping',
    category: 'Public',
    description: 'View bot ping',
    run: async function (client, interaction, args) {
            interaction.followUp(`Respone time ${respone}ms\nAPI Latency ${client.ws.ping}ms`)
        }}
