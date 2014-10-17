mini.ux.MapWindow = function () {
    mini.ux.MapWindow.superclass.constructor.call(this);
    this.initControls();
}
mini.extend(mini.ux.MapWindow, mini.ux.Window, {
    title: "GMap Window",

    width: 450,
    height: 300,
    minWidth: 300,
    minHeight: 200,

    bodyStyle: "padding:2px",

    initControls: function () {
        var toolbarEl = this.getToolbarEl();
        var footerEl = this.getFooterEl();
        var bodyEl = this.getBodyEl();

        //body
        var id = this.id + "$map";
        bodyEl.innerHTML = "<div id='" + id + "' style='width:100%;height:100%;'></div>";

        setTimeout(function () {            
            createMap(id);
        }, 100);


        //创建百度地图
        function createMap(id) {
            var map = new BMap.Map(id); //在百度地图容器中创建一个地图
            var point = new BMap.Point(116.395645, 39.929986); //定义一个中心点坐标
            map.centerAndZoom(point, 12); //设定地图的中心点和坐标并将地图显示在地图容器中
            window.map = map; //将map变量存储在全局

            map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
            map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
            map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
            map.enableKeyboard(); //启用键盘上下左右键移动地图
        }
    }
});
mini.regClass(mini.ux.MapWindow, "ux.mapwindow");