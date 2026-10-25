// Optional Cloudflare Worker: cloud fetch proof-of-concept only. No alerts/push yet.
export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil((async () => {
      try {
        const res = await fetch('https://api.kraken.com/0/public/Ticker?pair=XBTUSD,ETHUSD,SOLUSD', {headers:{'Accept':'application/json'}});
        if (!res.ok) throw new Error('HTTP '+res.status);
        const json = await res.json();
        if (json.error?.length) throw new Error(json.error.join(','));
        const snapshot = {at: new Date().toISOString(), source:'Kraken', result:json.result};
        if (env.MARKET_CACHE) await env.MARKET_CACHE.put('last-tickers', JSON.stringify(snapshot), {expirationTtl:300});
        else console.log('成功取得行情；未綁定 MARKET_CACHE KV，因此不儲存');
      } catch (err) { console.error('行情輪詢失敗：', String(err)); }
    })());
  },
  async fetch(request, env) {
    if (new URL(request.url).pathname !== '/health') return new Response('Not found',{status:404});
    return Response.json({service:'QuantScope Cloud Watch skeleton',scheduled:true,storageConfigured:!!env.MARKET_CACHE});
  }
};
