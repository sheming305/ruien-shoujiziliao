/**
 * Created by admin on 2017/8/11.
 */
/*
 ˼·��
 ��һ������ȡ��Ҫ�����Ľڵ����
 �ڶ�������ҳ����������Ҫ���㱾��cookie���˶��١�������Ʒ���Ѹ�����ֵ��ccount
 ��������Ϊÿһ����Ʒ��Ӧ����ӹ��ﳵ��ť��һ������¼�onclick
 ���ı��ص�cookie
 ��ȡ��ǰ��Ʒ��pid
 ѭ���������ص�cookieת��������飬ȡ��ÿһ�������pid���жԱȣ�����������Ʒ���ǵ�һ�����
 �ӹ��ﳵ��ȡ������Ʒ��Ȼ���pCountֵ׷��1
 ���򣺴���һ���µĶ��󣬱��浽�����С�ͬʱ����Ʒ������Ϊ1
 */

var ccount = document.getElementById("ccount"); //��ʾ��Ʒ�������ı�ǩ�ڵ����
var btns = document.querySelectorAll(".list dl dd button"); //���еĹ��ﳵ��ť

//Լ����������Ϊdatas��cookie����Ź��ﳵ���������Ϣ  datas������ŵľ���һ��json�ַ���
var listStr = cookieObj.get("datas");
/*�ж�һ�±����Ƿ���һ�����ﳵ��datas����û�еĻ�������һ���յĹ��ﳵ���еĻ���ֱ������ʹ��*/
if(!listStr) { //û�й��ﳵ     datas  json
    cookieObj.set({
        name: "datas",
        value: "[]"
    });
    listStr = cookieObj.get("datas");
}

var listObj = JSON.parse(listStr); //����
/*ѭ���������飬��ȡÿһ�������е�pCountֵ����ܺ�*/
var totalCount = 0; //Ĭ��Ϊ0
for(var i = 0, len = listObj.length; i < len; i++) {
    totalCount = listObj[i].pCount + totalCount;
}
ccount.innerHTML = totalCount;

/*ѭ��Ϊÿһ����ť��ӵ���¼�*/
for(var i = 0, len = btns.length; i < len; i++) {
    btns[i].onclick = function() {
        var dl = this.parentNode.parentNode;
        var pid = dl.getAttribute("pid");//��ȡ�Զ�������
        var arrs = dl.children;//��ȡ�����ӽڵ�
        if(checkObjByPid(pid)) {
            listObj = updateObjById(pid, 1)
        } else {
            var imgSrc = arrs[0].firstElementChild.src;
            var pName = arrs[1].innerHTML;
            var pDesc = arrs[2].innerHTML;
            var price = arrs[3].firstElementChild.innerHTML;
            var obj = {
                pid: pid,
                pImg: imgSrc,
                pName: pName,
                pDesc: pDesc,
                price: price,
                pCount: 1
            };
            listObj.push(obj)
            listObj = updateData(listObj);
        }
        ccount.innerHTML = getTotalCount();
    }
}