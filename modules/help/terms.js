/**
 * @file terms command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

exports.exec = (Bastion, message) => {
  message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,
      title: 'Private',
      url: 'Private',
      description: 'Private'
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
  name: 'terms',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'terms',
  example: []
};
