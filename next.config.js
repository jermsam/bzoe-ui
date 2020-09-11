require('dotenv').config()
const withOptimizedImages = require('next-optimized-images');
const path = require('path');


// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => { }
}

module.exports=withOptimizedImages({
 /*
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
*/
   /* config for next-optimized-images */
   imageTrace: {
    color: "#40e0c3"
  },


    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
        secondSecret: process.env.SECOND_SECRET, // Pass through env variables
      },
      publicRuntimeConfig: {
        // Will be available on both server and client
        API: `${process.env.URL}/api`,
        ANALYTICS_TRACKING_NO:process.env.ANALYTICS_TRACKING_NO,
BACKEND:process.env.BACKEND,
CLIENT_ID:process.env.CLIENT_ID,
DOMAIN:process.env.DOMAIN,
ENGINE_API_KEY:process.env.ENGINE_API_KEY,
FRONTEND_URL:process.env.FRONTEND_URL,
RECAPTURE_SECRET_SECRET:process.env.RECAPTURE_SECRET_SECRET,
RECAPTURE_SITE_KEY:process.env.RECAPTURE_SITE_KEY,
REDIRECT_URI:process.env.REDIRECT_URI,
API_KEY:process.env.API_KEY,
KOMMUNICATE_APP_ID:process.env.KOMMUNICATE_APP_ID,
KOMMUNICATE_APP_KEY:process.env.KOMMUNICATE_APP_KEY,
FACEBOOK_APP_ID:process.env.FACEBOOK_APP_ID,
      },

      webpack: (config)=>{

        

        config.resolve.modules.push(path.resolve('./'))

        return config;
    }
})