const { get, post } = require('snekfetch');
const express = require('express');
const btoa = require('btoa');
const app = express();

const cfg = {
  id: process.env.CLIENT_ID,
  secret: process.env.CLIENT_SECRET
};

app.get('/', (req, res) => {
  res.redirect([
    'https://discordapp.com/oauth2/authorize',
    `?client_id=${cfg.id}`,
    '&scope=identify+guilds',
    '&response_type=code',
    `&callback_uri=http://localhost:3001/authorize`
  ].join(''));
});

app.get('/authorize', (req, res) => {
  const code = req.query.code;
  const cred = btoa(`${cfg.id}:${cfg.secret}`);
  post(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}`)
    .set('Authorization', `Basic ${cred}`)
    .then(response => res.redirect(`/guilds?token=${response.body.access_token}`))
    .catch(console.error);
});

app.get('/guilds', (req, res) => {
  get('https://discordapp.com/api/v6/users/@me/guilds')
    .set('Authorization', `Bearer ${req.query.token}`)
    .then(response => res.json(response.body))
    .catch(console.error);
});

app.listen(3001, () => console.log('Listening on port 3001!'))