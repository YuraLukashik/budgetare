var fonts = [
    'node_modules/bootstrap/dist/fonts/*',
    'node_modules/font-awesome/fonts/*'
];

var styles = [
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/font-awesome/css/font-awesome.css'
];

module.exports = {
    "browserify": [
        {
            "src": "./src/index.js",
            "filename": "app.min.js",
            "dest": "public/scripts"
        }
    ],
    "resources": [
        {
            "src": fonts,
            "dest": 'public/fonts'
        },
        {
            "src": [
                "src/client/**/*.png",
                "src/client/**/*.jpeg",
                "src/client/**/*.jpg",
                "src/client/**/*.gif",
                "src/client/**/*.ico"
            ],
            "dest": "public/images"
        }
    ],
    "test": {
        "configFile": __dirname + '/../../tests/karma.conf.js',
        "singleRun": true
    },
    "styles": [
        {
            "src": styles,
            "dest": {
                "filename": "vendor.min.css",
                "base": "public/styles"
            }
        },
        {
            "src": [
                'src/**/*.css'
            ],
            "preprocess": true,
            "dest": {
                "filename": "app.min.css",
                "base": "public/styles"
            }
        }
    ],
    "scripts": [
        {
            "src": [],
            "dest": {
                "filename": "vendor.min.js",
                "base": "public/scripts"
            }
        }
    ],
    "watch": {
        "watch": [
            {
                "src": ['src/**/*.css'],
                "name": "styles"
            }
        ],
        "watchify": [
            {
                "src": "./src/index.js",
                "filename": "app.min.js",
                "dest": "public/scripts"
            }
        ]
    }
};
