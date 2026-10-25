QuantScope AI v0.2｜iPhone 手機更新教學

1. iPhone「檔案」App 點 ZIP 解壓縮。
2. 開啟 https://github.com/zhengyike0800/quantscope-demo/upload/main
3. 上傳以下 6 個檔案，覆蓋 GitHub 根目錄同名檔案（可用網站的 Upload files 流程）：
   index.html / manifest.json / sw.js / icon-192.png / icon-512.png / apple-touch-icon.png
4. Commit changes 提交到 main。
5. GitHub Actions 顯示 Pages deploy 成功後，以 Safari 重新開啟 https://zhengyike0800.github.io/quantscope-demo/
6. 舊版畫面持續出現：關閉主畫面 App 再重開；Safari 也可用 ?v=02 開啟網址以避開暫存。

功能：Coinbase 公開 K 線（BTC、ETH、SOL；1小時、6小時、日K）、K線/成交量、均線/價格區間規則研究；TWSE 交易所最近交易日上市股票收盤快照（2330、2317、2454、0050、2882）。
限制：網站直接連交易所，API 若限制跨網域、地區或流量，會顯示錯誤而非假資料。台股僅單日快照，不顯示虛構歷史 K 線。不提供個別交易訊號、真實勝率、會員管理、金流。
⚠ 公開 GitHub Pages 不得放帳密、會員名單或 API 金鑰；要正式出租，先處理行情再散布授權、投顧法規和受保護的後端。
