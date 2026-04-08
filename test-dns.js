const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
fetch('https://bcv-api.rafnixg.dev/rates/')
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);
