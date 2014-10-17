using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Collections;
using System.Collections.Generic;
using System.Reflection;

public partial class demo_data_AjaxService : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        /////////////////
        String methodName = Request["method"];       
        Type type = this.GetType();
        MethodInfo method = type.GetMethod(methodName);
        if (method == null) throw new Exception("method is null");

        try
        {
            BeforeInvoke(methodName);
            method.Invoke(this, null);
        }
        catch (Exception ex)
        {
            Hashtable result = new Hashtable();
            result["error"] = -1;
            result["message"] = ex.Message;
            result["stackTrace"] = ex.StackTrace;
            String json = Test.JSON.Encode(result);
            Response.Clear();
            Response.Write(json);
        }
        finally
        {
            AfterInvoke(methodName);
        }
    }
    //权限管理
    protected void BeforeInvoke(String methodName)
    {
        //Hashtable user = GetUser();
        //if (user.role == "admin" && methodName == "remove") throw .      
    }
    //日志管理
    protected void AfterInvoke(String methodName)
    {

    }
    //=============================================================

    public void SearchEmployees()
    {
        //查询条件
        string key = Request["key"];

        //分页
        int pageIndex = Convert.ToInt32(Request["pageIndex"]);
        int pageSize = Convert.ToInt32(Request["pageSize"]);
        //字段排序
        String sortField = Request["sortField"];
        String sortOrder = Request["sortOrder"];
        
        //业务层：数据库操作
        Hashtable result = new Test.TestDB().SearchEmployees(key, pageIndex, pageSize, sortField, sortOrder);

        //JSON
        String json = Test.JSON.Encode(result);
        Response.Write(json);
    }
    public void SaveEmployees()
    {
        String json = Request["data"];
      
        
        ArrayList rows = (ArrayList)Test.JSON.Decode(json);
        foreach (Hashtable row in rows)
        {
            String id = row["id"] != null ? row["id"].ToString() : "";
            //根据记录状态，进行不同的增加、删除、修改操作
            String state = row["_state"] != null ? row["_state"].ToString() : "";

            if (state == "added" || id == "")           //新增：id为空，或_state为added
            {
                row["createtime"] = DateTime.Now;
                new Test.TestDB().InsertEmployee(row);
            }
            else if (state == "removed" || state == "deleted")
            {                
                new Test.TestDB().DeleteEmployee(id);
            }
            else if (state == "modified" || state == "") //更新：_state为空或modified
            {
                new Test.TestDB().UpdateEmployee(row);
            }
        }
    }
    public void RemoveEmployees()
    {
        String idStr = Request["id"];
        if (String.IsNullOrEmpty(idStr)) return;
        String[] ids = idStr.Split(',');
        for (int i = 0, l = ids.Length; i < l; i++)
        {
            string id = ids[i];
            new Test.TestDB().DeleteEmployee(id);
        }
    }
    public void GetEmployee()
    {
        String id = Request["id"];
        Hashtable user = new Test.TestDB().GetEmployee(id);
        String json = Test.JSON.Encode(user);
        Response.Write(json);
    }
    public void GetDepartments()
    {
        //string 

        ArrayList data = new Test.TestDB().GetDepartments();
        String json = Test.JSON.Encode(data);
        Response.Write(json);
    }
    public void GetPositions()
    {
        ArrayList data = new Test.TestDB().GetPositions();
        String json = Test.JSON.Encode(data);
        Response.Write(json);
    }
    public void GetEducationals()
    {
        ArrayList data = new Test.TestDB().GetEducationals();
        String json = Test.JSON.Encode(data);
        Response.Write(json);
    }
    public void GetPositionsByDepartmenId()
    {
        String id = Request["id"];
        ArrayList data = new Test.TestDB().GetPositionsByDepartmenId(id);
        String json = Test.JSON.Encode(data);
        Response.Write(json);
    }

    public void GetDepartmentEmployees()
    {
        String dept_id = Request["dept_id"];
        int pageIndex = Convert.ToInt32(Request["pageIndex"]);
        int pageSize = Convert.ToInt32(Request["pageSize"]);

        Hashtable result = new Test.TestDB().GetDepartmentEmployees(dept_id, pageIndex, pageSize);
        String json = Test.JSON.Encode(result);
        Response.Write(json);
    }

    public void SaveDepartment()
    {
        String departmentsStr = Request["departments"];
        ArrayList departments = (ArrayList)Test.JSON.Decode(departmentsStr);

        foreach (Hashtable d in departments)
        {
            new Test.TestDB().UpdateDepartment(d);
        }
    }    

    //////////////////////////////////////
    public void FilterCountrys()
    {
        String key = Request["key"];
        String value = Convert.ToString(Request["value"]);

        //建立value的快速哈希索引，便于快速判断是否已经选择
        String[] values = value.Split(',');
        Hashtable valueMap = new Hashtable();
        for (int i = 0, l = values.Length; i < l; i++)
        {
            String id = values[i];
            valueMap[id] = true;
        }

        String path = Request.MapPath(@"countrys.txt");
        String s = Test.File.Read(path);
        ArrayList data = (ArrayList)Test.JSON.Decode(s);

        //1）去除已经选择的记录
        for (int i = data.Count - 1; i >= 0; i--)
        {
            Hashtable o = (Hashtable)data[i];
            String id = Convert.ToString(o["id"]);
            if (valueMap[id] != null)
            {
                data.RemoveAt(i);
            }
        }
        
        //2）根据名称查找
        ArrayList result = new ArrayList();
        for (int i = 0, l = data.Count; i < l; i++)
        {
            Hashtable o = (Hashtable)data[i];
            String text = Convert.ToString(o["text"]);
            if (String.IsNullOrEmpty(key) || text.ToLower().IndexOf(key.ToLower()) != -1)
            {
                result.Add(o);
            }
        }

        //返回JSON数据
        String json = Test.JSON.Encode(result);
        Response.Write(json);
    }
    public void FilterCountrys2()
    {
        String key = Request["key"];
        String path = Request.MapPath(@"countrys.txt");
        String s = Test.File.Read(path);
        ArrayList data = (ArrayList)Test.JSON.Decode(s);

        //根据名称查找
        ArrayList result = new ArrayList();
        for (int i = 0, l = data.Count; i < l; i++)
        {
            Hashtable o = (Hashtable)data[i];
            String text = Convert.ToString(o["text"]);
            if (String.IsNullOrEmpty(key) || text.ToLower().IndexOf(key.ToLower()) != -1)
            {
                result.Add(o);
            }
        }

        //返回JSON数据
        String json = Test.JSON.Encode(result);
        Response.Write(json);

    }

}