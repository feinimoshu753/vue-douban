let _baseUrl = 'http://www.xiaohushuo.com:8880'

let apiUtil = {}
apiUtil.version = '1.0.0'

apiUtil.urls = {
  movieShowing: _baseUrl + '/movie/showing',
  movieFree: _baseUrl + '/movie/free',
  movieLatest: _baseUrl + '/movie/latest'
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
