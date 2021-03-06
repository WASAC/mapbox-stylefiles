const path = require('path');
const export_dir = __dirname;

module.exports = {
    sprites:[
      {
        output_dir: path.resolve(export_dir,'../docs/unvt/sprite'),
        icons: [
          path.resolve(export_dir,'../icons/maki/icons'),
          path.resolve(export_dir,'../icons/water-icons/icons'),
        ],
      },
      {
        output_dir: path.resolve(export_dir, '../docs/street/sprite'),
        icons: [
          path.resolve(export_dir,'../icons/mapbox-street-icons/icons'),
          path.resolve(export_dir,'../icons/water-icons/icons'),
        ],
      },
      {
        output_dir: path.resolve(export_dir, '../docs/satellite/sprite'),
        icons: [
          path.resolve(export_dir,'../icons/mapbox-satellite-icons/icons'),
          path.resolve(export_dir,'../icons/water-icons/icons'),
        ],
      },
      {
        output_dir: path.resolve(export_dir, '../docs/qgis/sprite'),
        icons: [
          path.resolve(export_dir,'../icons/water-icons/icons'),
        ],
      },
      {
        output_dir: path.resolve(export_dir, '../docs/terrain/sprite'),
        icons: [
          path.resolve(export_dir,'../icons/mapbox-satellite-icons/icons'),
          path.resolve(export_dir,'../icons/water-icons/icons'),
        ],
      },
    ]
};
