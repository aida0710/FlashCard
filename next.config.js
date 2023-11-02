const prod = process.env.NODE_ENV === 'production'
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    disable: !prod,
    skipWaiting: true
})

/** @type {import('next').NextConfig} */
module.exports = withPWA(
    {
        reactStrictMode: true,
        images: {
            domains: ['bk-nebula.s3.ap-northeast-1.amazonaws.com', 'images.unsplash.com', 'wfiot2018.iot.ieee.org',],
        }
    }
);