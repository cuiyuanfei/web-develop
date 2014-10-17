/*
    标准模板：弹出选择面板
    注意，只需要修改搜索框和mini.DataGrid相关的列配置信息即可。
*/

TreeSelectWindow = function () {
    TreeSelectWindow.superclass.constructor.call(this);
    this.initControls();
    this.initEvents();
}
mini.extend(TreeSelectWindow, mini.Window, {

    url: "",
    keyField: "key",
    multiSelect: false,
    showFolderCheckBox: false,
    checkRecursive: false,

    title: "选择树形节点",
    keyLable: "名称：",

    width: 420,
    height: 280,
    bodyStyle: "padding:0;",
    allowResize: true,
    showModal: true,
    showToolbar: true,
    showFooter: true,
    initControls: function () {
        var toolbarEl = this.getToolbarEl();
        var footerEl = this.getFooterEl();
        var bodyEl = this.getBodyEl();

        //toolbar
        var labelId = this.id + "$label";
        var topHtml =
            '<div style="padding:5px;text-align:center;">'
                + '<span id="' + labelId + '">' + this.keyLable + '</span>    '
                + '<input name="keyText" class="mini-textbox" style="width:160px;"/> '
                + '<a name="searchBtn" class="mini-button">查找</a>       '
            + '</div>';
        jQuery(toolbarEl).append(topHtml);

        //footer
        var footerHtml =
            '<div style="padding:8px;text-align:center;">'
                + '<a name="okBtn" class="mini-button" style="width:60px;">确定</a>       '
                + '<span style="display:inline-block;width:25px;"></span>'
                + '<a name="cancelBtn" class="mini-button" style="width:60px;">取消</a>       '
            + '</div>';
        jQuery(footerEl).append(footerHtml);

        /////////////////////////////////////////////////////
        //body        
        this.tree = new mini.Tree();
        this.tree.set({
            showCheckBox: this.multiSelect,
            style: "width: 100%;height: 100%;",
            borderStyle: "border:0",
            showTreeIcon: true,
            textField: "text",
            idField: "id",
            parentField: "pid",
            resultAsTree: false,
            showFolderCheckBox: this.showFolderCheckBox,
            checkRecursive: this.checkRecursive
        });
        //this.tree.setUrl(this.url);
        this.tree.render(bodyEl);
        /////////////////////////////////////////////////////

        //组件对象
        mini.parse(this.el);
        this._okBtn = mini.getbyName("okBtn", this);
        this._cancelBtn = mini.getbyName("cancelBtn", this);
        this._searchBtn = mini.getbyName("searchBtn", this);
        this._keyText = mini.getbyName("keyText", this);
    },
    initEvents: function () {
        var keyText = this._keyText, tree = this.tree;
        function filterTree() {
            var key = keyText.getValue();
            if (key == "") {
                tree.clearFilter();
            } else {
                key = key.toLowerCase();
                tree.filter(function (node) {
                    var text = node.text ? node.text.toLowerCase() : "";
                    if (text.indexOf(key) != -1) {
                        return true;
                    }
                });
                tree.expandAll();
            }
        }
        this._searchBtn.on("click", function (e) {
            filterTree();
        }, this);
        this._keyText.on("enter", function (e) {
            filterTree();
        }, this);

        /////////////////////////////////////
        this._okBtn.on("click", function (e) {
            //不能选择父节点
            var node = this.tree.getSelectedNode();
            if (node && this.tree.isLeaf(node) == false) {
                alert("不能选中父节点");
                return;
            }

            var ret = true;
            if (this._Callback) ret = this._Callback('ok');
            if (ret !== false) {
                this.hide();
            }
        }, this);
        this._cancelBtn.on("click", function (e) {
            var ret = true;
            if (this._Callback) ret = this._Callback('cancel');
            if (ret !== false) {
                this.hide();
            }
        }, this);
        this.on("beforebuttonclick", function (e) {
            if (e.name == "close") {
                e.cancel = true;
                var ret = true;
                if (this._Callback) ret = this._Callback('close');
                if (ret !== false) {
                    this.hide();
                }
            }
        }, this);
    },
    setMultiSelect: function (value) {
        this.multiSelect = value;
        this.tree.setShowCheckBox(value);
    },
    setShowFolderCheckBox: function (value) {
        this.showFolderCheckBox = value;
        this.tree.setShowFolderCheckBox(value);
    },
    setCheckRecursive: function (value) {
        this.checkRecursive = value;
        this.tree.setCheckRecursive(value);
    },

    setUrl: function (value) {
        this.url = value;

        this.tree.setUrl(value);
    },
    setKeyField: function (value) {
        this.keyField = value;
    },
    setData: function (data, callback) {
        this._Callback = callback;

    },
    getData: function () {
        var nodes = [];
        if (this.multiSelect == true) nodes = this.tree.getCheckedNodes();
        else {
            var node = this.tree.getSelectedNode();
            if (node) nodes.push(node);
        }

        var ids = [], texts = [];
        for (var i = 0, l = nodes.length; i < l; i++) {
            var node = nodes[i];
            ids.push(node.id);
            texts.push(node.text);
        }
        var data = {};
        data.id = ids.join(",");
        data.text = texts.join(",");
        return data;

    }
});
mini.regClass(TreeSelectWindow, "TreeSelectWindow");