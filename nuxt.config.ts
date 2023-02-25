import { apiPlugin } from '@storyblok/vue'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        ['@storyblok/nuxt', {
            accessToken: process.env.STORYBLOK_TOKEN,    //  process.env.STORYBLOK_TOKEN
            use: [apiPlugin],
            apiOptions: { cache: { type: 'memory' } }
        }],
        ['@pinia/nuxt',
            {
                autoImports: [
                    'defineStore',
                    ['defineStore', 'definePiniaStore']
                ],
            }
        ],
        ['@nuxt/image-edge', {
            screens: {
                w: 479,
                sw: 767,
                mw: 1023,
                lw: 1439,
                xlw: 14400
            },
            presets: {
                forceWebp: {
                    modifiers: {
                        format: 'webp'
                    }
                }
            }
        }],
        ['nuxt-jsonld'],
    ],
    css: ["@/assets/scss/styles.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                    `
                    @import "@/assets/scss/config.scss";
                    @import "@/assets/scss/mixins.scss";
                    `
                }
            }
        }
    },
    components: {
        global: true,
        dirs: ['~/components/base', '~/components/modules', '~/components/partials']
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'de'
            },
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },

                { hid: 'description', name: 'description', content: 'PAGE_DESCRIPTION' },

                { hid:'og:title', property: 'og:title', content: 'PAGE_TITLE' },    //  process.env.PAGE_TITLE
                { hid:'og:type', property: 'og:type', content: 'website' },
                { hid:'og:image', property: 'og:image', content: 'PAGE_DOMAIN' + '/share-image_1200x628.jpg' },
                { hid:'og:description', property: 'og:description', content: 'PAGE_DESCRIPTION' },
                { hid:'og:url', property: 'og:url', content: 'PAGE_DOMAIN' },   //  process.env.PAGE_DOMAIN

                { hid:'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
                { hid:'twitter:site', name: 'twitter:site', content: 'PAGE_DOMAIN' },   //  process.env.PAGE_DOMAIN
                { hid:'twitter:title', name: 'twitter:title', content: 'PAGE_TITLE' },  //  process.env.PAGE_TITLE
                { hid:'twitter:description', name: 'twitter:description', content: 'PAGE_DESCRIPTION' },
                { hid:'twitter:image', name: 'twitter:image', content: 'PAGE_DOMAIN' + '/share-image_1200x628.jpg' },   //  process.env.PAGE_DOMAIN
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'icon', sizes: '196x196', href: '/touch-icons_192x192.png' },
                { rel: 'icon', sizes: '512x512', href: '/touch-icons_512x512.png' },
                {
                    rel: 'preload',
                    href: '/fonts/fonts.css',
                    as: 'style'
                },
                {
                    rel: 'stylesheet',
                    href: '/fonts/fonts.css'
                }
            ]
        }
    },
    image: {
        storyblok: {
          baseURL: 'https://a.storyblok.com'
        }
    },
    router: {
        options: {
            strict: true
        }
    },
    routeRules: {
        '/subfolder/single': { prerender: true }
    },
})
