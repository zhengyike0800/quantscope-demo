QuantScope AI v0.4（繁體中文）

1. iPhone 檔案 App 解壓 ZIP。
2. GitHub 儲存庫 https://github.com/zhengyike0800/quantscope-demo/upload/main 上傳 index.html、manifest.json、sw.js、三張 PNG 圖示。
3. 點 Commit changes，等待 GitHub Pages Actions 成功。
4. Safari 訪問 https://zhengyike0800.github.io/quantscope-demo/?v=040-20261025。
5. 遇舊版，從 Safari 清除該網站資料或重新加入主畫面。

功能與限制：
- 頁面在前景、選擇加密貨幣時，每約15秒嘗試 Kraken 合併查價；不是無限即時串流。API 可能有速率限制。
- 重新讀取 K 線及趨勢需要按「更新」或更換週期；技術指標只用已收盤的 K 線。後續雲端可按收盤時點定時更新。
- 價格提醒只在頁面前景且成功取得行情時觸發；離線/背景不保證。手機通知需 Safari 授權與 iOS 支援。
- 新聞嘗試公開 RSS 轉換服務，可能限流或拒絕跨域。顯示新聞標題與來源連結，不會以自動生成內容當真。
- 雲端 24 小時監控請參考 cloud-worker/（單獨上傳到私有程式儲存庫；需額外雲端部署）。
- GitHub Pages 公開；勿上傳金鑰、管理員帳號或用戶私人資料。
- 資料商用再散布需取得授權。沒有會員登入、付款、伺服器通知與交易下單。
