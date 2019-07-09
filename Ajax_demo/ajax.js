/**
 *
 * @param method 请求的方法
 * @param url 请求的地址
 * @param data 发送的数据
 * @param success 数据发送成功后 需要处理的业务逻辑 就是一个函数块
 */
function ajax(method, url, data, success) {

    var method = method || 'get';
    var xhr = null;
    try {
        xhr = new XMLHttpRequest();
    } catch (e) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    if (method === 'get') {
        xhr.open('get', url + '?' + data, true);
        //发送数据 get方法数据在查询字符中 post在请求体
        xhr.send();
    } else if (method === 'post') {
        xhr.open('post', url, true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(data)
    }


//监听readystatus状态 4
    xhr.onreadystatechange = function (ev) {
        if (xhr.readyState === 4 && xhr.status === 200) {

            var arr = JSON.parse(xhr.responseText);

            success && success(arr);

        }
    }
}