Welcome to the ChartUnit
==================================================

This is ChartUnit Web APP.



- React
- Antd
- highcharts
- echarts
- d3.js


ファイル説明
-----------

* README.md - このファイルです。
* package.json - 依存関係などのメタデータが記載されています。npm(Node.jsのパッケージ管理ツール)が読み込むためのファイルです。
* package.lock.json - パッケージの依存関係が記載されたファイルです。依存しているモジュールが依存しているものも記載されます。npm install等を行った際に、自動で更新されます。手での修正はしません。このファイルはアプリケーションが依存しているモジュールが網羅的に記載されているため、ソースコードと常に同期をとる必要があります。


Getting Started
---------------

1. Node.jsのインストール:

    ChartUnitでは、Node.js環境上で開発を行います。次のダウンロードサイトからNode.js v10.13.0をダウンロードし、開発用端末にインストールしてください。

    https://nodejs.org/en/download/

    インストールが完了したら、cmd.exeを開き正しいバージョンがインストールされていることを確認してください。

    ```
    $ node -v
    v10.13.0
    $ npm -v
    6.4.1
    ```

2. リポジトリのクローン

    まずはじめに、開発用端末にGitのローカルリポジトリ作成するためのディレクトリを作成します。(ここでは、Cドライブ直下にrepositoriesディレクトリを作成します。任意のディレクトリで問題ありません)
    ```
    $ mkdir C:\repositories
    ```
    リポジトリ作成用のディレクトリに移動し、Gitリポジトリから最新のソースコードをクローンします。次のコマンドを実行してください。

    ```
    $ cd C:\repositories
    $ git clone https://quick.backlog.jp/git/QWS_QLAB/ChartUnit.git
    ```

    ChartUnitの開発本線であるdevelopブランチをチェックアウトします。

    ```
    $ cd ChartUnit
    $ git checkout develop 
    ```

3. 依存モジュールのインストール:

    依存モジュールのインストールを行います。

    ```
    $ npm install
    ```

4. 開発用サーバの起動

    開発用サーバを起動します。
    
    ```
    $ npm start
    ```
    
    サーバが起動出来たら、http://localhost:3000 にアクセスし、アプリケーションが動作することを確認してください。

5. ソースコードのビルド

    開発時には、動的に依存関係の解決やスクリプトの読み込みが行われています。Mues Webサーバに置くためには、これらを固定化し静的なファイルにする必要があります。

    次のコマンドを実行します。
    
    ```
    $ npm run build
    $ npm run export
    ```

    この手順によりoutというディレクトリができます。
    ここに出力されたファイルをMues Webサーバに置くことでアプリケーションの動作からデータ取得まで、全てMues上で動作する状態になります。

ラウンド機更新手順
---------------

1. developブランチのソースをプル(更新分なければ以下省略)

2. npm install

3. npm run build

4. npm run export