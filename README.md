# visualforce-gulp-seed 

[NOTICE] This project is experiment. Don't use in production environment.

Visualforceでフロントを開発する場合のスタートアッププロジェクトです

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
│   ├── setting.js   // ユーザーがGulpタスクを利用するための設定情報
│   ├── config-sf.js // Salesforceタスクの設定
│   ├── config.js    // Gulpタスクの設定
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
src/pagesにhtmlを追加します。ファイル名が直接Visualforceページ名になります

### Add script file
src/jsにjsファイルを追加します。
ビルド時にBablelでコンパイルされるのでES6でも記述できます
Browserify等は使っていないのでモジュールは使用できません

### Add css and image file
src/cssとimgに各ファイルを追加します。
Sassを利用する場合は、src/sassディレクトリに.sass .scssファイルを追加します

### Setup Gulp configuration

```javascript

  sf: {
    //Salesforceのビルド結果が出力されるディレクトリ
    sfbuild: build + "/sf",
    // デプロイする静的リソースの名前
    resourceName: "vfResource",
    // apex:pageタグの属性値
    apexPageOption: {
      // デフォルト値、すべてのページに適用されます
      'default': {
        "docType": "html-5.0",
        "showHeader": false,
        "standardStyleSheets": false
      },
      // ページごとの設定、デフォルト値より優先されます
      'topPage': {
        controller: 'RemoteActionTestController'
      }
    },
    // 開発環境の認証情報
    development: {
      user: '<Your salesforce email address>',
      pass: '<Your salesforce password>',
      token: '<Your salesforce access token>',
      apiVersion: '30.0'
    },
    // SandBox環境の認証情報
    sandbox: {
      user: '<Your salesforce email address>',
      pass: '<Your salesforce password>',
      token: '<Your salesforce access token>',
      apiVersion: '30.0'
    },
    // Visualforceページと静的リソースの取得先
    retrieve: {
      user: '<Your salesforce email address>',
      pass: '<Your salesforce password>',
      token: '<Your salesforce access token>',
      apiVersion: '30.0'
    }
  },
  script: {
    // JavaScriptの結合順序を指定します
    src: [
      src + '/js/main.js',
      src + '/js/chart/*.js',
      src + '/js/controller/*.js'
    ]
  },
  css: {
    // CSSの結合順序を指定します Sassはコンパイル後のcssを指定します
    src: [
      src + "/css/normalize.css",
      tmp + "/css/main.css"
    ]
  }  
```

### Run
Sass,Babelコンパイルを行い、依存ライブラリをvendor.js vendor.cssに、アプリケーションコードをapp.js app.cssに結合した後
BrowserSyncを使ってローカルサーバでページを表示します。
mock.jsにモックコードを書いておくことでJavaScript Remotingが使えないローカル環境でも動作させることができます。
```
npm run serve
```
srcディレクトリ以下のファイルに変更があった場合にはコンパイルとLiveReloadが実行されます

ビルドだけを実行する場合はbuildを実行
```
npm run build 
```

### Deploy to Salesforce

開発環境
```
npm run deploy-dev
```

SandBox環境
```
npm run deploy-sand
```

### Retvieve from Salesforce

```
npm run retrieve
```
