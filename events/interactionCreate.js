module.exports = async (client, interaction) => {

    if (interaction.isCommand()) {
        await interaction.deferReply().catch(() => {})
        const cmd = client.commands.get(interaction.commandName);
        let args = []
        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name.toLowerCase());
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });

            } else if (option.value) args.push(option.value);
        }
        if(cmd.permissions) {
            if(cmd.permissions.bot && !interaction.guild.me.permissions.has(cmd.permissions.bot)) return interaction.followUp(`:x: I need \`${cmd.permissions.bot}\`permission(s)`)
            else if(cmd.permissions.user && !interaction.guild.me.permissions.has(cmd.permissions.user)) return interaction.followUp(`:x: Missing \`${cmd.permissions.user}\`__ permission(s)`)
        }
        cmd.run(client, interaction, args)

    }

}
