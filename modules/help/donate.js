/**
 * @file donate command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

exports.exec = (Bastion, message) => {
  message.channel.send({
    embed: {
      color: Bastion.colors.DARK_GREEN,
      title: 'Support LastMagic Server',
      url: 'https://paypal.me/fadiiq',
      description: '**Share your appreciation and get cool rewards!**' +
                   '\nDonate to support the development of Bastion and keep it running forever.' +
                   '\n\nYou can donate via the methods below and get the rewards as mentioned in our Patreon tiers.',
      fields: [
        {
          name: 'PayPal',
          value: 'You can send one-off donations via PayPal'
                + '\nhttps://paypal.me/fadiiq'
        },
        {
          name: 'PayPal',
          value: 'You can send one-off donations via PayPal:'
                + '\nhttps://paypal.me/fadiiq'
        },
        {
          name: 'PayPal',
          value: 'You can send one-off donations via PayPal:'
                + '\nhttps://paypal.me/fadiiq'
        }
      ],
      footer: {
        text: 'If everyone using Bastion gave $1, we could keep Bastion thriving for months to come.'
      }
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
  name: 'donate',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'donate',
  example: []
};
