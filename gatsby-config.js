require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const linkResolver = require("./src/utils/link-resolver")

module.exports = {
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
    DEV_SSR: true,
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `Gatsby Prismic Starter`,
    description: `Starter template for Superrb Gatsby websites using prismic.`,
    author: `@superrbstudio`,
    siteUrl: `https://github.com/superrbstudio/gatsby-source-prismic/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GATSBY_GDPR_GOOGLE_ANALYTICS_ID, // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        googleTagManager: {
          trackingId: process.env.GATSBY_GDPR_GOOGLE_TAG_MANAGER_ID, // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-tagmanager", // default
          dataLayerName: "dataLayer", // default
        },
        facebookPixel: {
          pixelId: process.env.GATSBY_GDPR_FACEBOOK_PIXEL_ID, // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-facebook-pixel", // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.PRISMIC_API_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_API_ACCESS_TOKEN,
        // customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,

        linkResolver: () => doc => linkResolver(doc),

        schemas: {
          video: require("./src/schemas/video.json"),
        },

        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
          return !(
            "PRISMIC_DOWNLOAD_IMAGES" in process.env &&
            process.env.PRISMIC_DOWNLOAD_IMAGES === "false"
          )
        },
      },
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        svgoConfig: {
          plugins: [
            {
              removeViewBox: false,
            },
          ],
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // defaultCrumb: {
        //   // location: required and must include the pathname property
        //   location: {
        //     pathname: "/",
        //   },
        //   // crumbLabel: required label for the default crumb
        //   crumbLabel: "Home",
        //   // all other properties optional
        //   crumbSeparator: " › ",
        // },
        useAutoGen: true,
        autoGenHomeLabel: "Home",
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`,
        ],
        crumbLabelUpdates: [],
      },
    },
  ],
}
