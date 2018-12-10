/**
 * Created by admin on 2017/8/16.
 */
//XMLHttpRequest
var xmlhttp = false;
try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
    try {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e2) {
        xmlhttp = false;
    }
}
if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
    xmlhttp = new XMLHttpRequest();
}
function Ajax(data){
    xmlhttp.open("GET","user_ck.php?username="+document.getElementById("username").value,true);
    xmlhttp.send(null);
    document.getElementById('username_notice').innerHTML = process_request;//��ʾ״̬
    xmlhttp.onreadystatechange=function(){
        if (4==xmlhttp.readyState){
            if (200==xmlhttp.status){
                var responseText = xmlhttp.responseText;
                if (responseText=="true" ){
                    ck_user("true");
                }
                else{
                    ck_user("false");
                }
            }else{
                alert("��������!");
            }
        }
    }
}
function chkUserName(obj){
    if (checks(obj.value)== false)
    {
        obj.className = "FrameDivWarn";
        showInfo("username_notice",msg_un_format);
        change_submit("true");
    }
    else if(obj.value.length<1){
        obj.className = "FrameDivWarn";
        showInfo("username_notice",msg_un_blank);
        change_submit("true");
    }

    else if(obj.value.length<3){
        obj.className = "FrameDivWarn";
        showInfo("username_notice",username_shorter);
        change_submit("true");
    }
    else{
        //����Ajax����,��������˷��Ͳ�ѯ
        Ajax(obj.value);
    }

}
//--------------�û������---------------------//
function ck_user(result)
{
    if ( result == "true" )
    {
        document.getElementById('username').className = "FrameDivWarn";
        showInfo("username_notice",msg_un_registered);
        change_submit("true");//�����ύ��ť
    }
    else
    {
        document.getElementById('username').className = "FrameDivPass";
        showInfo("username_notice",msg_can_rg);
        change_submit("false");//�����ύ��ť
    }
}

function checks(t){
    szMsg="[#%&'",;:=!^@]";
    //alertStr="";
    for(i=1;i<szMsg.length+1;i++){
        if(t.indexOf(szMsg.substring(i-1,i))>-1){
            //alertStr="��������Ƿ��ַ���[#_%&'",;:=!^]";
            return false;
        }
    }
    return true;
}
//-----------EMAIL���--------------------------------//
function checkEmail(email)
{
    if (chekemail(email.value)==false)

    {
        email.className = "FrameDivWarn";
        showInfo("email_notice",msg_email_format);
        change_submit("true");
    }

    else
    {
        showInfo("email_notice",info_right);
        email.className = "FrameDivPass";
        change_submit("false");
    }
}

function chekemail(temail) {
    var pattern = /^[w]{1}[w.-_]*@[w]{1}[w-_.]*.[w]{2,4}$/i;
    if(pattern.test(temail)) {
        return true;
    }
    else {
        return false;
    }
}
//--------------------������-----------------------------//
function check_password( password )
{
    if ( password.value.length < 6 )
    {
        showInfo("password_notice",password_shorter_s);
        password.className = "FrameDivWarn";
        change_submit("true");//�����ύ��ť
    }
    else if(password.value.length > 30){
        showInfo("password_notice",password_shorter_m);
        password.className = "FrameDivWarn";
        change_submit("true");//�����ύ��ť
    }
    else
    {
        showInfo("password_notice",info_right);
        password.className = "FrameDivPass";
        change_submit("false");//�����ύ��ť
    }
}

function check_conform_password( conform_password )
{
    password = document.getElementById('password').value;

    if ( conform_password.value.length < 6 )
    {
        showInfo("conform_password_notice",password_shorter_s);
        conform_password.className = "FrameDivWarn";
        change_submit("true");//�����ύ��
        return false;
    }
    if ( conform_password.value!= password)
    {
        showInfo("conform_password_notice",confirm_password_invalid);
        conform_password.className = "FrameDivWarn";
        change_submit("true");//�����ύ��
    }
    else
    {
        conform_password.className = "FrameDivPass";
        showInfo("conform_password_notice",info_right);
        change_submit("false");//�����ύ��ť
    }
}
//* *--------------------�������ǿ��-----------------------------* *//

function checkIntensity(pwd)
{
    var Mcolor = "#FFF",Lcolor = "#FFF",Hcolor = "#FFF";
    var m=0;

    var Modes = 0;
    for (i=0; i<pwd.length; i++)
    {
        var charType = 0;
        var t = pwd.charCodeAt(i);
        if (t>=48 && t <=57)
        {
            charType = 1;
        }
        else if (t>=65 && t <=90)
        {
            charType = 2;
        }
        else if (t>=97 && t <=122)
            charType = 4;
        else
            charType = 4;
        Modes |= charType;
    }

    for (i=0;i<4;i++)
    {
        if (Modes & 1) m++;
        Modes>>>=1;
    }

    if (pwd.length<=4)
    {
        m = 1;
    }

    switch(m)
    {
        case 1 :
            Lcolor = "2px solid red";
            Mcolor = Hcolor = "2px solid #DADADA";
            break;
        case 2 :
            Mcolor = "2px solid #f90";
            Lcolor = Hcolor = "2px solid #DADADA";
            break;
        case 3 :
            Hcolor = "2px solid #3c0";
            Lcolor = Mcolor = "2px solid #DADADA";
            break;
        case 4 :
            Hcolor = "2px solid #3c0";
            Lcolor = Mcolor = "2px solid #DADADA";
            break;
        default :
            Hcolor = Mcolor = Lcolor = "";
            break;
    }
    document.getElementById("pwd_lower").style.borderBottom  = Lcolor;
    document.getElementById("pwd_middle").style.borderBottom = Mcolor;
    document.getElementById("pwd_high").style.borderBottom   = Hcolor;

}
//--------------ע��Э�鸴ѡ��״̬���---------------------//
function check_agreement(){
    if (document.formUser.agreement.checked==false)
    {
        showInfo("agreement_notice",agreement);
        change_submit("true");//�����ύ
    }
    else
    {
        showInfo("agreement_notice",info_right);
        change_submit("false");//�����ύ��
    }
}


//-------------����ע�����-----------------------------//
function register() {
    if(document.formUser.username.value=="")
    {
        showclass("username","FrameDivWarn");
        showInfo("username_notice",msg_un_blank);
        document.formUser.username.focus();
        return false;
    }
    else if(document.formUser.email.value=="")
    {
        showclass("email","FrameDivWarn");
        showInfo("email_notice",msg_email_blank);
        document.formUser.email.focus();
        return false;
    }

    else if(document.formUser.password.value=="")
    {
        showclass("password","FrameDivWarn");
        showInfo("password_notice",password_empty);
        document.formUser.password.focus();
        return false;
    }
    else if(document.formUser.confirm_password.value=="")
    {
        showclass("confirm_password","FrameDivWarn");
        showInfo("conform_password_notice",confirm_password_invalid);
        document.formUser.password.focus();
        return false;
    }
    else if(document.formUser.agreement.checked==false)
    {
        //showclass("agreement","FrameDivWarn");
        showInfo("agreement_notice",agreement);
        document.formUser.agreement.focus();
        return false;
    }
}

//------------ ��ť״̬����-----------------------------//
function change_submit(zt)
{
    if (zt == "true")
    {
        document.forms['formUser'].elements['Submit1'].disabled = 'disabled';
    }
    else
    {
        document.forms['formUser'].elements['Submit1'].disabled = '';
    }
}
//------���ó���------------------------------------//
function showInfo(target,Infos){
    document.getElementById(target).innerHTML = Infos;
}
function showclass(target,Infos){
    document.getElementById(target).className = Infos;
}
var process_request = "<img src='loading.gif' width='16' height='16' border='0' align='absmiddle'>�������ݴ�����...";
var username_empty = "<span style='COLOR:#ff0000'>  �� �û�������Ϊ��!</span>";
var username_shorter = "<span style='COLOR:#ff0000'> �� �û������Ȳ������� 3 ���ַ���</span>";
var username_invalid = "- �û���ֻ��������ĸ�����Լ��»�����ɡ�";
var password_empty = "<span style='COLOR:#ff0000'> �� ��¼���벻��Ϊ�ա�</span>";
var password_shorter_s = "<span style='COLOR:#ff0000'> �� ��¼���벻������ 6 ���ַ���</span>";
var password_shorter_m = "<span style='COLOR:#ff0000'> �� ��¼���벻�ܶ��� 30 ���ַ���</span>";
var confirm_password_invalid = "<span style='COLOR:#ff0000'> �� �����������벻һ��!</span>";
var email_empty = "<span style='COLOR:#ff0000'> �� Email Ϊ��</span>";
var email_invalid = "- Email ���ǺϷ��ĵ�ַ";
var agreement = "<span style='COLOR:#ff0000'> �� ��û�н���Э��</span>";
var mobile_phone_invalid = "- �ֻ����벻��һ����Ч����";
var msg_un_blank = "<span style='COLOR:#ff0000'> �� �û�������Ϊ��!</span>";
var msg_un_length = "<span style='COLOR:#ff0000'> �� �û�������ó���15���ַ�</span>";
var msg_un_format = "<span style='COLOR:#ff0000'> �� �û������зǷ��ַ�!</span>";
var msg_un_registered = "<span style='COLOR:#ff0000'> �� �û����Ѿ�����,����������!</span>";
var msg_can_rg = "<span style='COLOR:#006600'> �� ����ע�ᣡ</span>";
var msg_email_blank = "<span style='COLOR:#ff0000'> �� �ʼ���ַ����Ϊ��!</span>";
var msg_email_registered = " �� �����Ѵ���,����������!";
var msg_email_format = "<span style='COLOR:#ff0000'> �� �ʼ���ַ���Ϸ�!</span>";
var username_exist = "�û��� %s �Ѿ�����";
var info_can="<span style='COLOR:#006600'> �� ����ע��!</span>";
var info_right="<span style='COLOR:#006600'> �� ��д��ȷ!</span>";