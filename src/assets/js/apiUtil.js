let _baseUrl = 'http://www.xiaohushuo.com:8880'

let apiUtil = {}
apiUtil.version = '1.0.0'

apiUtil.urls = {
  movieShowing: _baseUrl + '/movie/showing',
  movieFree: _baseUrl + '/movie/free',
  movieLatest: _baseUrl + '/movie/latest',
  movieClassification: _baseUrl + '/movie/classification',
  bookFiction: _baseUrl + '/book/fiction',
  bookNonfiction: _baseUrl + '/book/nonfiction',
  bookMarketProduct: _baseUrl + '/book/market_product',
  bookClassification: _baseUrl + '/book/classification',
  tvDomestic: _baseUrl + '/tv/domestic',
  tvVarietyShow: _baseUrl + '/tv/variety_show',
  tvAmerican: _baseUrl + '/tv/american',
  tvClassification: _baseUrl + '/tv/classification',
  musicChinese: _baseUrl + '/music/chinese',
  musicOccident: _baseUrl + '/music/occident',
  musicJapanKorea: _baseUrl + '/music/japan_korea',
  musicClassification: _baseUrl + '/music/classification',
  doulist: _baseUrl + 'doulist'
}

apiUtil.getURLParam = function (link, name) {
  let args = {}
  let query = link.split('?')[1]
  if (query === undefined) {
    return ''
  }
  let pairs = query.split('&')
  for (let i = 0; i < pairs.length; i++) {
    let pos = pairs[i].indexOf('=')
    if (parseInt(pos) === -1) continue
    let argname = pairs[i].substring(0, pos)
    let value = pairs[i].substring(pos + 1)
    args[argname] = decodeURIComponent(value)
  }
  return args[name]
}

export default apiUtil
