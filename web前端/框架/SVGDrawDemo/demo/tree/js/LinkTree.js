/*
    为了快速生成有超链接的Tree。
    对节点数据，要求有：url、target

*/

LinkTree = function () {        
    LinkTree.superclass.constructor.call(this);
}
mini.extend(LinkTree, mini.Tree, {
    textField: "text",
    urlField: "url",
    targetField: "target",

    uiCls: "mini-linktree",

    //初始化事件
    _initEvents: function () {
        LinkTree.superclass._initEvents.call(this);

        this.on("drawnode", this.__OnDrawNode, this);
    },
    __OnDrawNode: function (e) {
        var tree = e.sender;
        var node = e.node;

        var text = node[this.textField];
        var url = node[this.urlField];
        var target = node[this.targetField];

        var hasChildren = tree.hasChildren(node);
        //所有子节点加上超链接
        if (hasChildren == false) {
            e.nodeHtml = '<a href=' + url + ' target="' + target + '">' + text + '</a>';
        }
    },
    setUrlField: function (value) {
        this.urlField = value;
    },
    setTargetField: function (value) {
        this.targetField = value;
    },
    getAttrs: function (el) {
        var attrs = LinkTree.superclass.getAttrs.call(this, el);

        mini._ParseString(el, attrs,
            ["urlField", "targetField"
             ]
        );
        return attrs;
    }

});
mini.regClass(LinkTree, "linktree");