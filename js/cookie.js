/**
 * Created by admin on 2017/8/11.
 */
/*
 �������ģʽ
 ������ʽ��[]���ǿ�ѡ��
 document.cookie  = ��name=value[;expires=date][;path=path-to-resource][;domain=����][;secure]��
 */

var cookieObj = {
    /*
     ���ӻ��޸�cookie
     ������o ����{}
     name:string cookie��
     value:string cookieֵ
     expires:Date���� ����ʱ��
     path:string ·������
     domain:string ��������
     secure:boolean  true https  false��undeinfed
     */
    set: function(o) {
        var cookieStr = encodeURIComponent(o.name) + "=" + encodeURIComponent(o.value);
        if(o.expires) {
            cookieStr += ";expires=" + o.expires;
        }
        if(o.path) {
            cookieStr += ";path=" + o.path;
        }
        if(o.domain) {
            cookieStr += ";domain=" + o.domain;
        }
        if(o.secure) {
            cookieStr += ";secure";
        }

        document.cookie = cookieStr;
    },
    /*
     ɾ��
     ������n string cookie������
     */
    del: function(n) {
        var date = new Date();
        date.setHours(-1);
        //this������ǵ�ǰ�����Ķ���
        this.set({
            name: n,
            expires: date
        });
    },
    /*����*/
    get: function(n) {
        n = encodeURIComponent(n);
        var cooikeTotal = document.cookie;
        var cookies = cooikeTotal.split("; ");
        for(var i = 0, len = cookies.length; i < len; i++) {
            var arr = cookies[i].split("=");
            if(n == arr[0]) {
                return decodeURIComponent(arr[1]);
            }
        }
    }
}
