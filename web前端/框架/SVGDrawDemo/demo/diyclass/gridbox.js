if (!window.UserControl) window.UserControl = {};

UserControl.GridBox = function () {

    UserControl.GridBox.superclass.constructor.call(this);

    this.initComponents();
    this.bindEvents();

}

mini.extend(UserControl.GridBox, mini.DataGrid, {

    uiCls: 'uc-gridbox',

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
            columns: this.createColumns(),
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
    createColumns: function () {
        var columns = [
            { type: "indexcolumn" },
            { type: "checkcolumn" },
            { field: "loginname", header: "帐号", width: 150 },
            { field: "name", header: "姓名", width: 150 },
            { field: "age", header: "年龄", width: 50 },
            { field: "gender", header: "性别", width: 50 },
            { field: "birthday", header: "出生日期", width: 100 },
        ];
        return columns;
    },
    getValue: function () {
        return this._getValueText("id");
    },
    getText: function () {
        return this._getValueText("name");
    },
    _getValueText: function (field) {
        var rows = this.getSelecteds();
        var sb = [];
        for (var i = 0, l = rows.length; i < l; i++) {
            var row = rows[i];
            var text = row[field] ? row[field] : "";
            sb.push(text);
        }
        return sb.join(',');
    },

    getAttrs: function (el) {
        var attrs = UserControl.GridBox.superclass.getAttrs.call(this, el);
        mini._ParseString(el, attrs,
            ["onokclick", "oncancelclick"]
        );
        return attrs;
    }

});

mini.regClass(UserControl.GridBox, "gridbox");