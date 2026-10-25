QuantScope AI v0.2.1｜iPhone GitHub Pages 修復版

修正：Coinbase 不可連線時改依序嘗試 Kraken、Binance.US、CoinGecko。
限制：各 API 仍可能在某些手機網路、地區或瀏覽器被封鎖，無法保證連線。
CoinGecko 備援 OHLC 無成交量，K 線時間間隔不一定吻合按鈕選擇；畫面會明確顯示來源。

更新：將 index.html、manifest.json、sw.js 和 3 張 PNG 上傳到 GitHub 儲存庫 main 最外層，同名取代，Commit changes。
等待 Pages 部署完，再以 Safari 打開 https://zhengyike0800.github.io/quantscope-demo/?v=021 。
若仍失敗：改以 Wi-Fi 測試。若各來源均無法使用，下一階段需雲端後端代理，GitHub Pages 自身不能充當資料代理。
提醒：僅限研究與測試，正式轉售資料前須釐清授權及當地法規。
