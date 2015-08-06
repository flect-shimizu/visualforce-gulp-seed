'use strict';

var build = "build"; // ビルド結果が出力されるディレクトリ
var tmp = ".tmp";    // Sassコンパイルで作成されるcssのテンポラリーファイルの場所
var src = 'src';     // ソースコードの場所

module.exports = {
  build: build,
  tmp: tmp,
  src: src,
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
}