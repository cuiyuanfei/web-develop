using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Collections;
using System.Reflection;

public partial class scripts_miniui_demo_filemanager_FileService : System.Web.UI.Page
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
    public void LoadFolders() 
    {
        String id = Request["id"];
        if (String.IsNullOrEmpty(id)) id = "-1";

        //获取下一级节点
        String sql = "select * from plus_file where folder = 1 and pid = '" + id + "' order by updatedate";
        ArrayList folders = Test.DBUtil.Select(sql);

        //判断节点，是否有子节点。如果有，则处理isLeaf和expanded。
        for (int i = 0, l = folders.Count; i < l; i++)
        {
            Hashtable node = (Hashtable)folders[i];
            String nodeId = node["id"].ToString();

            node["isLeaf"] = false;
            node["expanded"] = false;            
        }

        //返回JSON
        String json = Test.JSON.Encode(folders);
        Response.Write(json);
    }
    public void LoadFiles()
    {
        String folderId = Request["folderId"];
        
        String sql = "select * from plus_file where pid = " + folderId + " and folder = 0 order by updatedate";
        ArrayList files = Test.DBUtil.Select(sql);

        String json = Test.JSON.Encode(files);
        Response.Write(json);
    }
}