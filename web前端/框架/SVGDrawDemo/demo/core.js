function GetParams(url, c) {
    if (!url) url = location.href;
    if (!c) c = "?";
    url = url.split(c)[1];
    var params = {};
    if (url) {
        var us = url.split("&");
        for (var i = 0, l = us.length; i < l; i++) {
            var ps = us[i].split("=");
            params[ps[0]] = decodeURIComponent(ps[1]);
        }
    }
    return params;
}

function onIFrameLoad() {
    if (!CanSet) return;
    var mainTabs = mini.get("mainTabs");
    if (mainTabs) {
        mainTabs.setActiveIndex(0);
    }
    //url#src=...html
    var iframe = document.getElementById("mainframe");
    var src = "";
    try {
        var url = iframe.contentWindow.location.href;
        var ss = url.split("/");
        var s1 = ss[ss.length - 2];
        if (s1 != "demo") {
            src = s1 + "/" + ss[ss.length - 1];
        } else {
            src = ss[ss.length - 1];
        }
    } catch (e) {
    }
    if (src && src != "overview.html") {

        window.location.hash = "src=" + src;

    }
}
function onTabsActiveChanged(e) {
    if (this.activeIndex == 1) {
        var url = document.getElementById("mainframe").contentWindow.location.href;
        var codeframe = document.getElementById("codeframe");
        codeframe.src = "runCode/codeview.html?url=" + url;
    }
}

function onSkinChange(skin) {
    mini.Cookie.set('miniuiSkin', skin);
    //mini.Cookie.set('miniuiSkin', skin, 100);//100天过期的话，可以保持皮肤切换
    window.location.reload()
}
function AddCSSLink(id, url, doc) {
    doc = doc || document;
    var link = doc.createElement("link");
    link.id = id;
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", url);

    var heads = doc.getElementsByTagName("head");
    if (heads.length)
        heads[0].appendChild(link);
    else
        doc.documentElement.appendChild(link);
}

var CanSet = false;
window.onload = function () {
    var skin = mini.Cookie.get("miniuiSkin");
    if (skin) {
        var selectSkin = document.getElementById("selectSkin");
        selectSkin.value = skin;
    }

    var frame = document.getElementById("mainframe");
    var demoTree = mini.get("demoTree");

    var url = window.location.href;

    var params = GetParams(location.href, "#");
    if (params.ui) {
        var url = URLS[params.ui];
        if (url) {
            frame.src = url;
        }
    } else if (params.app) {

        var node = demoTree.getNode(params.app);
        if (node) {
            demoTree.expandNode(node);
            demoTree.selectNode(node);

            var url = URLS[params.app];
            if (url) {
                frame.src = url;
            }
        }

    } else if (params.src) {

        frame.src = params.src;
    }
    CanSet = true;
}
var URLS = {
    crud: "datagrid/rowedit.html",
    "master-detail": "datagrid/detailform.html",
    validator: "form/validation.html",
    layout: "layout/sysLayout1.html",
    tree: "tree/tree.html"
};