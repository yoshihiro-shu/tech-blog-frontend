# Resume

## 基本情報

|key|value|
|---|-----|
|Name|朱　義宏 (Yoshihiro Shu)|
|Github|[yoshihiro-shu](https://github.com/yoshihiro-shu)|

## スキル
### 言語

[![My Skills](https://skillicons.dev/icons?i=go,py,js,ts)](https://skillicons.dev)

### フレームワーク

[![My Skills](https://skillicons.dev/icons?i=vue,nuxtjs,react,django)](https://skillicons.dev)

### インフラ

[![My Skills](https://skillicons.dev/icons?i=linux,docker,kubernetes,gcp,aws)](https://skillicons.dev)

### その他

[![My Skills](https://skillicons.dev/icons?i=postgres,mysql,redis,git,github,vscode)](https://skillicons.dev)

## 言語

- 日本語
  - ネイティブ
- 英語
  - ニュージーランドに一年留学をしていた
  - 留学時アルバイトをしていたことやチーム内に外国人エンジニアとコミュニケーションをとることが多いためビジネス英語も可
- 中国語
  - リスリングのみ可能

## 強み

**積極性**

本業のエンジニアリングの業務はもちろんのこと、自ら手を挙げて事業にアクションを起こすことが多いです。

- 社内[テックブログ](https://qiita.com/organizations/zuu-inc)の立ち上げと運用
  - 市場調査からプラットフォームの選定、テックブログのフォーマットづくり、レビューを担当
- チームビルディングの促進
  - 振り返り文化の定着
  - インセプションデッキ、スキルマップ、ドラッガー風エクササイズなどの実施
- [Cloud Native Days](https://cloudopsdays.com/)委員会の参加
  - 広報として参加し、カンファレンスの方向性など企画段階から参画しています。

**探究心が強い**

気になった技術に関しては、まず手を動かして実装するをモットーにキャッチアップをしています。

- 盆栽（自宅サーバー）を構築し、興味のある技術に触れることでキャッチアップしています。
  - kubernetes
  - ArgoCD
  - Prometheus
  - Elasticsearch
  - Apache Kafka
  - etc...

**現状に満足しない向上心**

実装して満足するだけで知識を深めることを大切にしています。勉強する機会を増やすために社内でもくもく会や輪読会を主催しています。

## やったことはないが興味があるもの

- モブプロ&テスト駆動開発

- スクラムによるアジャイル開発

- イベントなどの運営

## マネジメント能力

### スクラム開発導入

Comming Soon...

### 新卒一年目エンジニアとインターン生のメンター

Comming Soon...

## 職務経歴

### 株式会社ZUU(インターン:2022/02-2022/04, 正社員:2022/04-)フルスタックエンジニア

自社メディアとその技術基盤を他社にワンストップで提供する事業の保守運用開発を行なっています。

### 1.自社製品のリプレイス開発(2022/02-)

自社製品であるCMSのモノリスからマイクロサービスへのリプレイス開発に従事

#### Csrf Token Securityの新規開発

技術選定、設計、実装、テストコードによる自動テストを担当

モノリスからマイクロサービスへのリプレイス開発のため、CSRF Securityを再実装する必要あった。
そこでOWASPが提唱するCSRF対策の1つであるDouble Submit Cookie方式を採用し、設計、実やテスト自動化まで担当した。

チーム内でテストコードによる自動テストを行う文化がなかったため、自分が先導してテストコードを書く一例を作ることでチーム内のナレッジの向上に寄与した。

#### 脆弱性診断と対策

診断方法

- OWASP ZAPによる脆弱性診断
- Google Container RegistryのDockerパッケージスキャン

対策方法

- Docker ImageのBaseイメージのバージョンアップ
- SQLインジェクション対策

#### ログイン機能のリプレイス

Twitter, Facebook認証によるログイン機能のリプレイス

#### Kubernetesの`ManegedCertificate`の開発（https通信を行うための、マネージド証明書の自動管理機能）

- 既存のシステムにおいて証明書の管理を`cert-manager`で開発されていたものを、`ManegedCertificate`にリプレイス開発を行なった。
- HelmのValues.yaml(設定ファイル)による柔軟なカスタマイズを行えるように開発した。

|使用技術|使用サービス or フレームワーク|
|---|-----|
|Golang|echo|
|JavaScript|NuxtJs|
|DB|PostgreSQL|
|Cache|Redis|
|Infrastructure|Docker, Kubernates, GCP|
|CI tool|GitHub Actionによるビルドテスト|
|CD tool|Argo CD|

### 2.自社製品のリリース作業(2022/06-2022/08)

モノリスからマイクロサービスへとリプレイス開発したCMSのリリースとドキュメント化

#### 詳細

自社製品のCMSは弊社で20メディアほど運用しており、複数のエンジニアによってリプレイス作業を行う必要があったのでドキュメント化しました。

リプレイスを担当するエンジニアの多くがインフラの領域の知見が少ないことに課題がありました。

前提知識を考慮したドキュメントの作成を行う必要があったため、チームメンバーのレビューを欠かさず行うことやドキュメントが陳腐化してしまうことを最も懸念していたため、リプレイス担当者のレビュー対応を欠かさず行いました。

|使用技術|使用サービス or フレームワーク|
|---|-----|
|Amazon Web Service|Route53|
|Google Cloud Platform|GKE, Load Balancer, Cloud Armor, Cloud Storage, Static IPAddress, Uptime Checks, Alert Policy|
|terraform|上記のGCPサービスの実装|
|Kubernates|Ingress, Service, Deployment, ConfigMap, CronJob, Job, ManagedCertificate|
|CI tool|GCP Cloud BuildによるDocker Imageの自動ビルド|

### 3.広告収益管理の自動化(2022/10-)

**収益管理の自動ツールの開発・保守・運用**

毎月実施しているメディアの広告収益管理の自動化

毎月行なっていること単純作業かつ工数が膨大であることが課題としてあったため、発足したプロジェクト

|使用技術|使用サービス or フレームワーク|
|---|-----|
|Python3|Pandas, dbt|
|Google Cloud Platform|Big Query, Cloud Function, GCS, Alert Policy|
|terraform|上記のGCPサービスの実装|
|CI tool|GitHub Actionsによるterrformの自動化テスト|

**dbtへのリプレイス**

既存のバッチ処理のフローをdbtにリプレイスを技術選定から実装まで担当しました。

|使用技術|使用サービス or フレームワーク|
|---|-----|
|Python3|dbt|
|Google Cloud Platform|Big Query, Workflows, Cloud Run Jobs, Artifact Registry|
|terraform|上記のGCPサービスの実装|
|CI tool|GitHub Actionsによるterrformの自動化テスト|

**データカタログの開発**

社内のデータ活用促進のため、データカタログの要件定義・技術選定・開発

コンテンツ

- Big query上のデータレイクの一覧
- 社内の活用事例の一覧
- データ活用の利用方法
- SQLのサンプル一覧

|使用技術|使用サービス or フレームワーク|
|---|-----|
|CMS|[dbt](https://docs.getdbt.com/)|
|Amazon Web Service|Route53|
|Google Cloud Platform|GKE, Load Balancer, Cloud Armor, Cloud Build, Cloud Storage|
|terraform|上記のGCPサービスの実装|
|CI tool|GCP Cloud Buildによる、Docker Imageの自動ビルド|
|CD tool|Argo CD|

### 4.ヘルプサービスの開発(2023/02-)

社内システムのヘルプサービスの要求定義、要件定義、システム設計、開発、保守運用まで担当

**要求定義と要件定義**

様々な立場の課題を聞き出すため、エンジニア、ディレクターやメディア運用者の合計約30名にインタビューを実施した。

インタビューから発覚した背景や問題をDesign Dogsを見習いドキュメント化をした。

**技術選定、システム設計、開発**

マニュアルを更新するのは、ディレクターまたはエンジニアのみなので、Markdownで実装できる`hugo`を採用した。

システム構築する上で将来的に自社だけでなく他社で使われることを想定し、Kubernetes上で構築することにした。

**保守運用**

- ロゴ作成のための要件定義
- 定期的に使用感をインタビュー対象者に伺った結果、トップページからマニュアルページまでワンクリックが無駄ということもあり、サイトマップを再設計。

|使用技術|使用サービス or フレームワーク|
|---|-----|
|CMS|[hugo](https://gohugo.io/hosting-and-deployment/hosting-on-github/)|
|Amazon Web Service|Route53|
|Google Cloud Platform|GKE, Load Balancer, Cloud Armor, Cloud Build|
|terraform|上記のGCPサービスの実装|
|CI tool|GCP Cloud Buildによる、Docker Imageの自動ビルド|
|CD tool|Argo CD|

### 5.Embedded SRE Engineerとして活動

ユーザーストーリーに基づき、DatadogによるSLOの設計とSLIの運用

開発頻度の高い機能に対してSLIの計測を行うことで、バグの発生率を数値化することで開発と品質担保のバランスの重要性をビジネスサイドに理解の促進をした。

### 6.障害の復旧対応と対策

<details><summary>Redis高負荷</summary><div>

##### 事象

運営している一部メディアにて、レスポンスに10秒以上かかってしまう障害が発生

##### 原因

特定のユーザーから特定のページに大量のアクセスが行われたことにより、RedisのCPU利用率が上がってしまったこと。

##### 解決策

15分に一度Redisのkey数を確認し、一定数超えたらFlushDBするバッチ処理(CronJob)を作成した。

</div></details>

<details><summary>スロークエリによるDB高負荷</summary><div>

##### 事象

運営している一部メディアにて、レスポンスに10秒以上かかってしまう障害が発生

##### 原因

無限スクロールを行うページにて、実行されるスロークエリによりDBに高負荷がかかったこと

##### 解決策

実行するスロークエリは記事の総数を取得するクエリであり、インデックスを張ってもシーケンス インデックスにより実行されるため効果がなかった。

そのため既存コードのリファクタを行い、スロークエリの実行頻度を少なくすることで対応をした。

</div></details>

<details><summary>掲載先メディアにサムネイルが表示されない事象が発生</summary><div>

##### 事象

掲載先メディアの記事一覧にて、自社メディアの記事のサムネイルが表示されない事象が発生

##### 原因

自社メディアの画像形式をWebpで配信しており、掲載先メディアでは対応していなかったこと。

##### 解決策

NginxにてJpeg形式の画像ファイルをWebp形式に変換するロジックを、掲載先メディアから画像のリクエスト時のみ画像変換せずJpeg形式にてレスポンスするように変更

</div></details>

<details><summary>デプロイエラー</summary><div>

##### 事象

AWSのCode Buildによる自動デプロイが失敗する事象が発生

##### 原因

ログ収集によるnode内のディスクがスペックを超えてしまったこと。

##### 解決策

ログはAWSのS3に保存されているので、ディスクに保持しているログを削除するバッチを実装した。

</div></details>

## アイタックソリューションズ株式会社（バイト:2021/09-2022/01）

職務: サーバーサイドエンジニア

### 混雑状況判定システムの管理画面の実装

|使用技術|使用サービス or フレームワーク|
|---|-----|
|Python3|Django RestFrameWork|
|JavaScript|Vue.js|

## 課外活動

### 社外プロジェクト
<!-- * [運営に携わっているコミュニティ](そのコミュニティのconnpassやカンファレンスページのリンクとか)
* [副業で携わっているサービス](そのサービスのランディングページのリンクとか) -->

#### 芸能人向けライブ配信サイトのプラットフォームの開発(2022/11-2023/02)

**詳細**

スタートアップの会社にお手伝いする形で参画しました。

**実装した機能**

主に会員機能を担当しました。

- [JWTトークン](https://jwt.io/introduction)によるログイン、ログアウト機能
- プロフィール登録、編集機能
- フォロー機能

</div></details>

|使用技術|使用サービス or フレームワーク|
|---|-----|
|Golang|gin|
|TypeScript|Nextjs|
|DB|My SQL|
|Amazon Web Service|Route53, Amazon ECS|

<!-- ### 過去の登壇資料
* [Speaker Deck](Speaker Deckの自分の資料のページとか)
 -->
<!-- ### 受賞歴
* [イベント名と受賞した賞](イベントのランディングページのリンクや、結果がわかる記事など) -->

### 執筆歴

* [Qiita](https://qiita.com/yoshihiro-shu), [技術ブログ](https://yoshihiro-shu.com/ja)
- 皆さんにみてもらうと言うより知識の定着のためのアウトプットを目的としている記事が多いです。
