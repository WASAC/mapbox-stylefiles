# mapbox-stylefiles
![GitHub](https://img.shields.io/github/license/wasac/mapbox-stylefiles)

This repository manages Mapbox Stylefile for the applicaiton.

These sprite files were created by Mapbox Studio. However, some layers of style file under `unvt` folder were designed by `United Nation Vector Tile Toolkit`.

## About Sprite files
### Download ICONs

Download the following repositories at the same directory of `mapbox-stylefiles` module.
```
git clone https://github.com/mapbox/maki.git
git clone https://github.com/wasac/water-icons.git
git clone https://github.com/wasac/mapbox-street-icons.git
git clone https://github.com/wasac/mapbox-satellite-icons.git
```

### Install & Generate Sprite files
```
git clone https://github.com/narwassco/mapbox-stylefiles.git
cd mapbox-stylefiles
npm i
npm run sprite
```

### Configuration
Please configure your icons and output direcoties settings in [config.js](./test/config.js).

## Deploy
Once you are ready all the stylefiles and sprite files under `docs` directory. You can push it to Github repository.

Then, make `docs` folder as Github pages.