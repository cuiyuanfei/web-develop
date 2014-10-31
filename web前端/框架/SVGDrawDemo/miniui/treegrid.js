window.alert = function(){};
window.onload = function(){
    mini.parse();
    var id,
        treeGrid = mini.get('treegrid'),
        iframe = this.parent.$('iframe'),
        iframeLength = iframe.length, url = "../../" + iframe[iframeLength - 1].id.split("&")[0];

    var compare = function (first, second) {
        var i = 0,
            fLen = first.length;
        for (; i < fLen; i++) {
            var firstInt = parseInt(first[i]),
                secondInt = parseInt(second[i]);
            if (firstInt && secondInt) {
                if (firstInt < secondInt) {
                    return true;
                } else if (firstInt > secondInt) {
                    return false;
                }
            } else if ((firstInt && !secondInt) || (!firstInt && !secondInt)) {
                return false;
            } else if (!firstInt && secondInt) {
                return true;
            }
        }
    };

    var bubbleSort = function (array) {
        var i = 0, len = array.length, j, d;
        for (; i < len; i++) {
            for (j = 0; j < len; j++) {
                if (compare(array[i].num.split('.'), array[j].num.split('.'))) {
                    d = array[j];
                    array[j] = array[i];
                    array[i] = d;
                }
            }
        }
        return array;
    };

    var getTreeData = function(data) {
        var treeTitle = data.result.title,
            columsJson = new Array;
        for ( var i = 0, length = treeTitle.length; i < length; i++) {
            var obj;
            if (i == 0) {
                obj = {
                    header : treeTitle[i].name,
                    field : treeTitle[i].field,
                    name : 'taskname',
                    width : '100',
                    headerStyle: 'padding-left:4px'
                };
            }else {
                obj = {
                    header : treeTitle[i].name,
                    field : treeTitle[i].field,
                    width : '80',
                    headerStyle: 'padding-left:4px'
                };
            }
            columsJson.push(obj);
        }

        treeGrid.set({
            columns : columsJson
        });
        data.data = mini.arrayToTree(bubbleSort(data.result.content), "children", "id", 'pid');
        id = data.result.id;
        treeGrid.setData(data.data);
    };

    treeGrid.on('preload', function(data) {
        getTreeData(data);
    });

    treeGrid.on('drawcell', function(data) {
        var value = data.value;
        if(data.field == 'num'){
            data.img = data.node.iconURL;
        }
        if (value == '' || value == null) {
            data.cellCls = 'mini-tree-grid-td';
        }
    });

    treeGrid.on('loaderror',function(){
        $('.no-warehouse').show();
        treeGrid.hide();
    });

    treeGrid.load(url);

    treeGrid.on('nodeclick', function(data) {
        node({
            eventType : 'nodeClick'
        }, data.node.id);
    });

    $('html').click(function(evt){
        if(/body|html/i.test(evt.target.tagName)){
            blank({'eventType':'blank'},{type: 'viewAttr', viewAttr: id});
        }
    });
};
/**
 * Created with JetBrains WebStorm.
 * User: AliceHSY
 * Date: 14-5-21
 * Time: 下午5:50
 * To change this template use File | Settings | File Templates.
 */
