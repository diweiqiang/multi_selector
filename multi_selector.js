var isShowing=true;

getData();

$('.wrapper').click(function (e) {
    if(isShowing){
        isShowing=false;
        $('#flag').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
    }else {
        isShowing=true;
        $('#flag').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
    }
    $('#pullItem').toggle();
});

function getData() {
    //这里应该是从后台请求数据，这里就不写了，自己造测试数据了
    var list = [{
        id: "abc1",
        name: "item1"
    },
        {
            id: "abc2",
            name: "item2"
        },
        {
            id: "abc3",
            name: "item3"
        },
        {
            id: "abc4",
            name: "item4"
        },
        {
            id: "abc5",
            name: "item5"
        }];
    //根据获取到的数据动态生成下拉选项布局
    appendData(list);
}

function appendData(list) {
    $('#pullItem').empty();
    var size=list.length;
    var box=[];
    list.forEach(function (elem,index) {
        var item='<p id="'+elem.id+'" onclick="groupChoose(\''+elem.id+'\',\''+elem.name+'\')">'+elem.name+'</p>';
        box.push(item);
    });
    console.log(box.join(''));
    $('#pullItem').append(box.join(''));

}

function groupChoose(id,name) {
    var item='<div id="item_'+id+'" class="item" style="display: inline-block;"><span>'+name+'</span><span class="symble" onclick="removeItem(\''+id+'\',\''+name+'\',event)">&#9747;</span></div>';
    $("#gSpan").show().append(item);
    $('#'+id).remove();
}

function removeItem(id,name,event) {
    event.stopPropagation();
    $('#item_'+id).remove();
    var item='<p id="'+id+'" onclick="groupChoose(\''+id+'\',\''+name+'\')">'+name+'</p>';
    $('#pullItem').append(item);
}