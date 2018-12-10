/**
 * Created by admin on 2017/8/11.
 */
/*
 ���ܣ��鿴�����������Ƿ���ָ���Ķ�����Ʒ��������id
 ������id����Ʒ�ı�ʶ
 */
function checkObjByPid(id) {
    var jsonStr = cookieObj.get("datas");
    var jsonObj = JSON.parse(jsonStr);
    var isExist = false;
    for(var i = 0, len = jsonObj.length; i < len; i++) {
        if(jsonObj[i].pid == id) {
            isExist = true;
            break;
        }
    }
    return isExist; //return false;
}

/*
 ���ܣ����±�������
 ������arr    �������
 ����һ��ֵ�����µı���ת������������
 * */
function updateData(arr) {
    var jsonStr = JSON.stringify(arr);
    cookieObj.set({
        name: "datas",
        value: jsonStr
    });
    jsonStr = cookieObj.get("datas");
    return JSON.parse(jsonStr);
}

/*
 ��ȡ��Ʒ��������
 ���أ�����
 */
function getTotalCount() {
    /*ѭ���������飬��ȡÿһ�������е�pCountֵ����ܺ�*/
    var totalCount = 0; //Ĭ��Ϊ0
    var jsonStr = cookieObj.get("datas");
    var listObj = JSON.parse(jsonStr);
    for(var i = 0, len = listObj.length; i < len; i++) {
        totalCount = listObj[i].pCount + totalCount;
    }
    return totalCount;
}

/*
 ���±������ݸ���pid
 id:��Ʒ�ı�ʶ
 */
function updateObjById(id, num) {
    var jsonStr = cookieObj.get("datas");
    var listObj = JSON.parse(jsonStr);
    for(var i = 0, len = listObj.length; i < len; i++) {
        if(listObj[i].pid == id) {
            listObj[i].pCount = listObj[i].pCount + num;
            break;
        }
    }
    return updateData(listObj)
}

/*
 ��ȡ��������
 ���� �������
 * */
function getAllData() {
    var jsonStr = cookieObj.get("datas");
    var listObj = JSON.parse(jsonStr);
    return listObj;
}

function deleteObjByPid(id) {
    var lisObj = getAllData();
    for(var i = 0, len = lisObj.length; i < len; i++) {
        if(lisObj[i].pid == id) {
            lisObj.splice(i, 1);
            break;
        }
    }
    updateData(lisObj);
    return lisObj;
}
