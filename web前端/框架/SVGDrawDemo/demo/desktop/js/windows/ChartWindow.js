mini.ux.ChartWindow = function () {
    mini.ux.ChartWindow.superclass.constructor.call(this);
    this.initControls();
}
mini.extend(mini.ux.ChartWindow, mini.ux.Window, {
    title: "Chart Window",
    chartUrl: "../open-flash-chart/data/barChart.txt",
    swfUrl: "../open-flash-chart/open-flash-chart/open-flash-chart.swf",

    width: 450,
    height: 300,
    minWidth: 300,
    minHeight: 200,

    bodyStyle: "padding:5px",

    initControls: function () {
        var toolbarEl = this.getToolbarEl();
        var footerEl = this.getFooterEl();
        var bodyEl = this.getBodyEl();

        //body
        var id = this.id + "$chart";
        bodyEl.innerHTML = "<div id='" + id + "' style='width:100%;height:100%;'></div>";

        var me = this;
        function buildChart() {

            swfobject.embedSWF(me.swfUrl, id, "100%", "100%", "9.0.0", "../open-flash-chart/open-flash-chart/expressInstall.swf",
            { "data-file": me.chartUrl }, { wmode: "transparent" });
        }

        setTimeout(function () {
            buildChart();
        }, 100);
    }
});
mini.regClass(mini.ux.ChartWindow, "ux.chartwindow");