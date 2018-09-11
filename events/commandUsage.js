/**
 * @file commandUsage event
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

module.exports = (message, command) => {
  message.channel.send({
    embed: {
      color: message.client.colors.RED,
      title: message.client.strings.error(message.guild.language, 'invalidUse'),
      description: `That's not how you use the \`${command.name}\` command.`,
      fields: [
        {
          name: 'Private',
          value: `Private`
        }
      ]
    }
  }).catch(e => {
    message.client.log.error(e);
  });
};
