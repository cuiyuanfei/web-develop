using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Collections;
using System.Reflection;
public partial class demo_form_FormService : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        String methodName = Request["method"];
        if (String.IsNullOrEmpty(methodName)) return;

        //invoke method
        Type type = this.GetType();
        MethodInfo method = type.GetMethod(methodName);
        method.Invoke(this, null);
    }

    public void SaveData()
    {
        //获取提交的数据
        String submitJSON = Request["submitData"];
        Hashtable data = (Hashtable)Test.JSON.Decode(submitJSON);

        //进行数据处理
        String UserName = Convert.ToString(data["UserName"]);
        String Pwd =  Convert.ToString(data["Pwd"]);
        //......

        //返回处理结果
        String json = Test.JSON.Encode(data);
        Response.Write(json);
    }
    public void LoadData()
    {
        //模拟从数据库加载数据
        String path = MapPath(@"form.txt");
        String strJSON = Test.File.Read(path);
        Hashtable data = (Hashtable)Test.JSON.Decode(strJSON);

        String json = Test.JSON.Encode(data);
        Response.Write(json);
    }
}