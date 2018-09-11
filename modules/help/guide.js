/**
 * @file guide command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

exports.exec = (Bastion, message) => {
  message.channel.send({
    embed: {
      color: Bastion.colors.GOLD,
      title: 'Private',
      url: 'Private',
      description: 'Private',
      fields: [
        {
          name: 'Private',
          value: 'Private'
        },
        {
          name: 'Private',
          value: 'Private'
        }
      ]
    }
  }).catch(e => {
    Bastion.log.error(e);
  });
};

exports.config = {
  aliases: [],
  enabled: true
};

exports.help = {
  name: 'guide',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'guide',
  example: []
};
