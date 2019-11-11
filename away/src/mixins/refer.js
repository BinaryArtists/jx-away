export default class ReferMixin {
  constructor (options) {
    this.__type__ = 'app';
  }

  created () {
    this.$refer = {};
  }
  
  onLaunch (options) {
    this.loadrefer(options);
  }

  onShow (options) {
    this.loadrefer(options);
  }

  /**
 * @渠道规范
 * 埋点指引：一二级渠道的格式为：chInfo=ch_${一级渠道}__chsub_${二级渠道}，渠道参数的格式为chInfo_params=key1__value1,key2__value2收起实例

 * @KNOW 小程序首次启动时，onLaunch 方法可获取 query、path 属性值。
 *       小程序在后台被用 schema 打开，也可从 onShow 方法中获取 query、path 属性值。
 * 
 * @MUST 不要在 onShow 中进行 redirectTo 或navigateTo 等操作页面栈的行为。
 *       不要在 onLaunch 里调用 getCurrentPages()，因为此时 page 还未生成。
 * 
 */
  
loadrefer (options) {
  var { query, path, referrerInfo } = options;
  var chInfo = null, chInfo_params = null;

  /// scheme
  if (query && query.chInfo) { // 解析来源信息
    chInfo = query.chInfo;
    chInfo_params = query.chInfo_params;
  }

  /// navigateToMiniProgram
  else if (referrerInfo && referrerInfo.extraData && referrerInfo.extraData.chInfo) {
    chInfo = referrerInfo.extraData.chInfo;
    chInfo_params = referrerInfo.extraData.chInfo_params;
  }

  if (chInfo) {
    this.$refer.chInfo = chInfo;
    this.$refer.chInfoParams = chInfo_params;
    this.$refer.path = path;
  }
}

}