mkdir icons
cd icons
git clone https://github.com/mapbox/maki.git
git clone https://github.com/wasac/water-icons.git
git clone https://github.com/wasac/mapbox-street-icons.git
git clone https://github.com/wasac/mapbox-satellite-icons.git
cd ..
npm run sprite
