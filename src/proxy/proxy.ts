const { createProxyMiddleware } = require('http-proxy-middleware');

const setupProxies = (app: any, routes: any[]) => {
    routes.forEach((r: any) => {
        app.use(r.url, createProxyMiddleware(r.proxy));
    })
}

exports.setupProxies = setupProxies
