// 阅读文章时看了一遍写的代码，发现加个数组和一个遍历完全没必要，改成下面这个即可。
function randomPost() {
    fetch('/baidusitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
        let ls = data.querySelectorAll('url loc');
        location.href = ls[Math.floor(Math.random() * ls.length)].innerHTML
    })
}

