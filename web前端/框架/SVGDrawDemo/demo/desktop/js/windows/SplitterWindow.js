mini.ux.SplitterWindow = function () {
    mini.ux.SplitterWindow.superclass.constructor.call(this);
    this.initControls();
}
mini.extend(mini.ux.SplitterWindow, mini.ux.Window, {
    title: "Splitter Window",

    width: 550,
    height: 300,
    minWidth: 450,
    minHeight: 200,

    //bodyStyle: "padding:0",

    initControls: function () {
        var toolbarEl = this.getToolbarEl();
        var footerEl = this.getFooterEl();
        var bodyEl = this.getBodyEl();

        //body
        this.splitter = new mini.Splitter();
        this.splitter.set({
            style: "width: 100%;height: 100%;",
            //borderStyle: "border:0;",
            panes: [
                { size: 150, maxSize: 300, showCollapseButton: true },
                { size: "100%" }
            ]
        });

        this.splitter.render(bodyEl);

    }
});
mini.regClass(mini.ux.SplitterWindow, "ux.splitterwindow");