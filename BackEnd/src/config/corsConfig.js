// Export a function to configure CORS for the app
const corsConfig = (app) => {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Range');
        res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
        next();
    });
}

module.exports = corsConfig;