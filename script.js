document.addEventListener('DOMContentLoaded', () => {

// IP
const messageIp = `Moje Ip to: 11.1.1.111. Moje Ip to: 111.157.277.111. Moje Ip to: 255.1.1.128. Moje Ip to: 33.0.1.111. Moje Ip to: 41.1.111.441. Moje Ip to: 1.192.1.1.11.` 

const regexIp = /\b(1?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\.(1?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\.(1?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\.(1?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\b/gm;

let arrayIP = messageIp.match(regexIp)

console.log(arrayIP)


// Imiona 
const messageNames = 'Imię: Tola. Imię: Lola. Imię: Dominika. Imię: Wojtek. Imię: Martin. Imię: Kuba. Imię: Kasia. Imię: Ola.'

const regexNames = /[A-Z][a-z]{2,}\./gm

let arrayNames = messageNames.match(regexNames)
let finalArrayNames = arrayNames.map((el) => el.replace('.', ''))

console.log(finalArrayNames) 


// Url strony
const messageURL = `http://google.com:8332/ https://www.twitch.tv/ https://koduje.slack.com/ ftp://ftp.kis.p.lodz.pl/`

const regexProtocol = /\b[a-z]{2,}\:\/\//g; 
let arrayProtocol = messageURL.match(regexProtocol)
let finalArrayProtocol = arrayProtocol.map((el) => el.replace('://', ''));

const regexDomain = /\.[a-z]{2,}(\:|\/)/g; // 
let arrayDomain = messageURL.match(regexDomain)
let finalArrayDomain = arrayDomain.map((el) => el.replace('.','').replace(':','').replace('/','') )

const regexPort = /\:\d{4}/g // 
let arrayPort = messageURL.match(regexPort)

console.log(finalArrayProtocol, finalArrayDomain, arrayPort)

});