using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Collections;

public partial class demo_pagertree_treeload : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //获取列表数据（树）
        ArrayList treelist = FromDataBase();

        //使用PagerTree服务端分页功能
        CreatePagerTree(treelist);

    }
    public void CreatePagerTree(ArrayList treelist)
    {
        string key = Convert.ToString(Request["name"]);
        int pageIndex = Request["pageIndex"] == null ? 0 : Convert.ToInt32(Request["pageIndex"]);
        int pageSize = Request["pageSize"] == null ? 20 : Convert.ToInt32(Request["pageSize"]);

        //加载数据
        Test.DataTree tree = new Test.DataTree("UID", "ParentTaskUID", "children");
        tree.LoadList(treelist);

        //处理折叠
        tree.SetRequest(Request);

        //处理过滤
        if (!string.IsNullOrEmpty(key))
        {
            ArrayList nodes = SearchNodes(key, treelist);
            tree.SetFiltered(nodes);
        }

        //处理分页
        Hashtable result = new Hashtable();
        result["total"] = tree.GetTotalCount();
        result["data"] = tree.GetPagedData(pageIndex, pageSize);

        //返回JSON
        String json = Test.JSON.Encode(result);
        Response.Write(json);
    }
    public ArrayList FromDataBase()
    {
        String id = Request["id"];
        
        //示例从本地文件读取，实际应该从数据库获取树型数据
        string path = MapPath("tasks.txt");
        String json = Test.File.Read(path);
        ArrayList tree = (ArrayList)Test.JSON.Decode(json);
        return tree;
    }
    public ArrayList SearchNodes(string key, ArrayList nodeList)
    {
        key = key.ToLower();
        ArrayList filters = new ArrayList();

        for (int i = 0, l = nodeList.Count; i < l; i++)
        {
            Hashtable node = (Hashtable)nodeList[i];
            string taskName = node["Name"] != null ? node["Name"].ToString().ToLower() : "";
            if (taskName.IndexOf(key) != -1)
            {
                filters.Add(node);
            }
        }

        return filters;
    }
}