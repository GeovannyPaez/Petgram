import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Petgram Applicion de Mascotas ',
        short_name: 'Petgram :)',
        description: 'Petgram la mejor red social  de mascotas, en donde prodras subir las fotos mas tiernas de tus mascotas y compartirlas con tus amigos.',
        theme_color: '#b1a',
        background_color:'#fff',
        icons: [
          {
            src: './src/assets/react.svg',
            sizes: [96,128,192,256,384,512],
            type: 'image/svg'
          }
        ]
      } ,
      registerType:'autoUpdate',
      injectRegister:'auto',
      workbox:{
        runtimeCaching:[
          {
            urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'
            ),
            handler:'CacheFirst',
            options:{
              cacheName:'images'
            }
          },
          {
            urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'
            ),
            handler:'NetworkFirst',
            options:{
              cacheName:'api'
            }
          }
        ]
      }
    })
  ]
})
