# visualforce-gulp-seed 

[NOTICE] This project is experiment. Don't use in production environment.

## Precondition (前提条件)

* node >= 0.12
* gulp-cli >= 0.3.0
* bower >= 1.4.1
* ant >= 1.9.5

## Install (インストール)

```
git clone https://github.com/flect-shimizu/visualforce-gulp-seed.git <YOUR-PROJECT-NAME>
npm install
bower install
```

### Project Directory

```
├── gulpfile.js
├── README.md
├── build        // ビルド成果物が保存される
│   ├── css
│   ├── img
│   ├── js
│   ├── pages
│   └── sf       // Salesforceにデプロイするための成果物
├── gulp
│   ├── config-sf.js// Salesforceにデプロイするための設定情報
│   ├── config.js   // Gulpタスクを利用するための設定情報
│   ├── tasks
│   └── util
├── bower.json
├── package.json
└── src
    ├── css      
    ├── img
    ├── js      
    ├── pages    // Visualforceとしてデプロイする対象
    └── sass     // Sassコンパイルが必要なスクリプト
```

## Setup (初期設定)

### Add vendor library
bowerを使って依存ライブラリを追加します
依存ライブラリはビルド時にvendor.js vendor.cssとして結合されます
```
bower install <ライブラリ名> --save
```

### Add page file
src/pagesにhtmlを追加します。

### Add script file
src/jsにjsファイルを追加します。
ビルド時にBablelでコンパイルされるのでES6でも記述できます

### Add css and image file
src/cssとimgに各ファイルを追加します。
Sassを利用する場合は、src/sassディレクトリに.sass .scssファイルを追加します

### config.js
ビルド時にapp.jsという名前のファイルに結合されるので、スクリプトの読み込み順序を設定。
```javascript
  script: {
    src: [
      src + '/js/main.js', // 読み込ませたい順に追加
    ],
    mock: [
      src + '/js/mock.js', // app.jsに含まないファイルを追加
    ],
    dest: build + '/js',
    filename: 'app.js'
  }
```
### config-sf.js
静的リソースの名前を設定します。
```javascript
var resourceName = "vfResource" // 静的リソースの名前を指定 
```

Salesfoce.com環境(以下、SFDC)へAPIアクセスするためのcredentials情報を設定します。
Sandboxとリトリーブ用も同様に設定します

```javascript
  deploy: {
    development: {
      user: '<Your salesforce email address>',
      pass: '<Your salesforce password>',
      token: '<Your salesforce access token>',
                .
                .
    },
```

apex:pageタグの属性情報を設定します。
```javascript
  apexPageOption: {
    'default': {               // デフォルトの設定はすべてのページに適用されます
      "docType": "html-5.0",
      "showHeader": false,
      "standardStyleSheets": false
    },
    'topPage': {               // ページごとの設定、デフォルトにも同じ項目があればこちらが優先
      controller: 'RemoteActionTestController'
    }
  }
```

#### Install npm dependencies

```
npm install 
```

#### Install npm dependencies

```
bower install 
```
#### Setup Gulp configuration

```javascript
var gulp = require('gulp');
var zip = require('gulp-zip');
var forceDeploy = require('gulp-jsforce-deploy');

gulp.task('deploy', function() {
  gulp.src('./pkg/**', { base: "." })
    .pipe(zip('pkg.zip'))
    .pipe(forceDeploy({
      username: process.env.SF_USERNAME,
      password: process.env.SF_PASSWORD
      //, loginUrl: 'https://test.salesforce.com'
      //, pollTimeout: 120*1000
      //, pollInterval: 10*1000
      //, version: '33.0'
    }));
});
```

### Build (ビルド) 
```
gulp build
```

### Serve (開発サーバ)
```
gulp build
```

### Deploy (デプロイ)

```
gulp deploy
```
