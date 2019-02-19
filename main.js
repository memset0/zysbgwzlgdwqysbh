// ==UserScript==
// @name         洛谷完全隐私保护被关闭的提醒器
// @version      1.0
// @author       memset0.
// @match        https://www.luogu.org
// ==/UserScript==

(function() {
    var url = 'https://luogu-api.memset0.cn/check_code_safe.php?uid=1';
    // 请修改 uid 以达到检测您的账户的效果。
    fetch(url)
    .then(function (res){
      return res.json();
    })
    .then(function (data) {
        console.log('[洛谷完全隐私保护被关闭的提醒器] => status: ' + data.status);
        if (data.status == false) {
            alert('[洛谷完全隐私保护被关闭的提醒器] 完全隐私保护被关闭！');
        } else if (data.status == true) {
            console.log('[洛谷完全隐私保护被关闭的提醒器] 完全隐私保护状态正常！');
        } else {
            alert('[洛谷完全隐私保护被关闭的提醒器] Error，请正确配置！');
        }
    })
    .catch(function (err) {
      alert('[洛谷完全隐私保护被关闭的提醒器] Error，请正确配置！');
      console.error(err);
    })
})();
