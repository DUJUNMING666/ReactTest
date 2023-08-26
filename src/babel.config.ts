import '@mapSDK/static/libs/include-leaflet-local'
import '@mapSDK/static/libs/cdn/zondyclient/webclient-leaflet-plugin'
module.exports={
  presets:[''],
  plugins:[
      [
          "@mapSDK/static/libs/cdn/zondyclient/webclient-leaflet-plugin",
          {
            libraryname:"@mapSDK/static/libs/include-leaflet-local"
        }
      ]
  ]
}