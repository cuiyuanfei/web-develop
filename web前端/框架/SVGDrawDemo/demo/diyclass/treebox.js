if (!window.UserControl) window.UserControl = {};

UserControl.TreeBox = function () {

    UserControl.TreeBox.superclass.constructor.call(this);

    this.initComponents();
    this.bindEvents();

}

mini.extend(UserControl.TreeBox, mini.Tree, {
    
    uiCls: 'uc-treebox',

    initComponents: function () {
        var toolbar = '<div style="padding:2px;">'
            + '<a name="add" class="mini-button" iconCls="icon-add" plain="true">新增</a>'
            + ' <a name="edit" class="mini-button" iconCls="icon-edit" plain="true">编辑</a>'
            + '<a name="remove" class="mini-button" iconCls="icon-remove" plain="true">删除</a>'
        + '</div>';
        var footer = '<div style="padding:5px;text-align:center;">'
            + '<a name="ok" class="mini-button" iconCls="icon-ok" style="margin-right:20px;">确定</a>'
            + ' <a name="cancel" class="mini-button" iconCls="icon-cancel" >取消</a>'
        + '</div>';

        this.set({
            idField: "id",
            parentField: "pid",
            resultAsTree: false,
            borderStyle: "border:solid 1px #aaa;",
            showToolbar: true,
            toolbar: toolbar,
            showFooter: true,
            footer: footer
        });
    },
    bindEvents: function () {
        this.addBtn = mini.getbyName('add', this);
        this.editBtn = mini.getbyName('edit', this);
        this.removeBtn = mini.getbyName('remove', this);

        this.okBtn = mini.getbyName('ok', this);
        this.cancelBtn = mini.getbyName('cancel', this);

        var that = this;

        this.okBtn.on('click', function (e) {
            that.fire("okclick");
        });
        this.cancelBtn.on('click', function (e) {
            that.fire("cancelclick");
        });
    },

    getAttrs: function (el) {
        var attrs = UserControl.TreeBox.superclass.getAttrs.call(this, el);
        mini._ParseString(el, attrs,
            ["onokclick", "oncancelclick"]
        );
        return attrs;
    }

});

mini.regClass(UserControl.TreeBox, "treebox");