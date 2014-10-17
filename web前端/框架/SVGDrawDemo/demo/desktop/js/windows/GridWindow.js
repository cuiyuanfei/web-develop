mini.ux.GridWindow = function () {
    mini.ux.GridWindow.superclass.constructor.call(this);
    this.initControls();
}
mini.extend(mini.ux.GridWindow, mini.ux.Window, {
    title: "Grid Window",
    showToolbar: true,
    bodyStyle: "padding:0",

    width: 550,
    height: 300,
    minWidth: 450,
    minHeight: 200,

    dataUrl: "../data/AjaxService.aspx?method=SearchEmployees",

    initControls: function () {
        var toolbarEl = this.getToolbarEl();
        var footerEl = this.getFooterEl();
        var bodyEl = this.getBodyEl();

        //toolbar
        var topHtml =
            '<div style="padding:5px;">'
                + '<a name="add" class="mini-button">增加</a> '
                + '<a name="edit" class="mini-button">修改</a> '
                + '<a name="remove" class="mini-button">删除</a> '
            + '</div>';
        jQuery(toolbarEl).append(topHtml);

        mini.parse(this.el);

        //body
        this.grid = new mini.DataGrid();
        this.grid.set({
            multiSelect: this.multiSelect,
            style: "width: 100%;height: 100%;",
            borderStyle: "border:0",
            columns: [
                { type: "checkcolumn", header: "#" },
            //{ type: "indexcolumn", header: "#", headerAlign: "center" },
                {header: "帐号", field: "loginname" },
                { header: "姓名", field: "name" }
            ]
        });
        this.grid.setUrl(this.dataUrl);
        this.grid.render(bodyEl);

        this.grid.load();
    }
});
mini.regClass(mini.ux.GridWindow, "ux.gridwindow");