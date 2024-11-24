var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior-del-piso",
      "name": "Exterior del piso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.1893843759697127,
        "pitch": 0.1806066619751583,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": -2.876472384913905,
          "pitch": 0.2462417000308541,
          "rotation": 0,
          "target": "2-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bao-del-pasillo",
      "name": "Baño del pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.6003325682302219,
        "pitch": 0.2958307202624777,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": -2.1511689997645647,
          "pitch": 0.19157352061501243,
          "rotation": 1.5707963267948966,
          "target": "0-exterior-del-piso"
        },
        {
          "yaw": -2.7008460276022443,
          "pitch": 0.22090162605548613,
          "rotation": 4.71238898038469,
          "target": "2-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salon",
      "name": "Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.035965444098906,
        "pitch": 0.27597060493842385,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": -0.5710033627032836,
          "pitch": -0.10660606488882252,
          "rotation": 0,
          "target": "0-exterior-del-piso"
        },
        {
          "yaw": -0.3436803139356215,
          "pitch": 0.19433405369042944,
          "rotation": 1.5707963267948966,
          "target": "1-bao-del-pasillo"
        },
        {
          "yaw": 2.649089033193845,
          "pitch": 0.24509344964030255,
          "rotation": 0,
          "target": "3-balcon"
        },
        {
          "yaw": -1.8293245243214233,
          "pitch": 0.23927542163850113,
          "rotation": 1.5707963267948966,
          "target": "4-cocina"
        },
        {
          "yaw": -1.9575229970054657,
          "pitch": 0.11886780950584352,
          "rotation": 1.5707963267948966,
          "target": "5-dormitorio-principal"
        },
        {
          "yaw": -2.200833380055734,
          "pitch": 0.040677329440026,
          "rotation": 4.71238898038469,
          "target": "7-habitacion-azul"
        },
        {
          "yaw": -2.1897960330426134,
          "pitch": 0.2296009913654693,
          "rotation": 4.71238898038469,
          "target": "8-habitacion-blanca"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-balcon",
      "name": "Balcon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.23620764691264284,
        "pitch": -0.0023924377125226215,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": -2.9942231205460637,
          "pitch": 0.4867667525695367,
          "rotation": 0,
          "target": "2-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.22848143732974258,
        "pitch": 0.23773675044560427,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": -3.011708681843082,
          "pitch": 0.4595300859040439,
          "rotation": 12.566370614359176,
          "target": "3-balcon"
        },
        {
          "yaw": 2.84422523196535,
          "pitch": 0.7874284115920016,
          "rotation": 4.71238898038469,
          "target": "2-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dormitorio-principal",
      "name": "Dormitorio principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.2506927471046332,
        "pitch": 0.2976895419962986,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": 0.9337666328405536,
          "pitch": 0.4057373887717084,
          "rotation": 1.5707963267948966,
          "target": "6-bao-de-la-habitacion"
        },
        {
          "yaw": 2.9739146652784676,
          "pitch": 0.8587630469928147,
          "rotation": 4.71238898038469,
          "target": "2-salon"
        },
        {
          "yaw": -2.801134787145454,
          "pitch": 0.6189026898962187,
          "rotation": 0,
          "target": "7-habitacion-azul"
        },
        {
          "yaw": -2.4340809610235326,
          "pitch": 0.6084263510340975,
          "rotation": 0.7853981633974483,
          "target": "8-habitacion-blanca"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bao-de-la-habitacion",
      "name": "baño de la habitacion",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.0352303206259705,
        "pitch": 0.611395885541512,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": -2.5729733590095147,
          "pitch": 0.529813228774378,
          "rotation": 0,
          "target": "5-dormitorio-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-habitacion-azul",
      "name": "habitacion azul",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.10509175278859217,
        "pitch": 0.1898464188812703,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": -2.5541620903605153,
          "pitch": 0.48686834055300743,
          "rotation": 0,
          "target": "5-dormitorio-principal"
        },
        {
          "yaw": -2.1796148873859877,
          "pitch": 0.856623892298682,
          "rotation": 1.5707963267948966,
          "target": "2-salon"
        },
        {
          "yaw": -2.8591340844652535,
          "pitch": 0.8889215940869217,
          "rotation": 4.71238898038469,
          "target": "8-habitacion-blanca"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-habitacion-blanca",
      "name": "habitacion blanca",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.1094861970434664,
        "pitch": 0.06638475128261412,
        "fov": 1.4585144351731572
      },
      "linkHotspots": [
        {
          "yaw": 3.126241307268966,
          "pitch": 0.9980642646618261,
          "rotation": 7.0685834705770345,
          "target": "2-salon"
        },
        {
          "yaw": 3.0529711626384373,
          "pitch": 0.7420832602036445,
          "rotation": 5.497787143782138,
          "target": "5-dormitorio-principal"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
