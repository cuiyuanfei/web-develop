using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Collections;
using System.Reflection;


public partial class demo_data_TreeService : System.Web.UI.Page
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
    public void LoadTree()
    {
        String sql = "select * from plus_file order by num, updatedate";
        ArrayList folders = Test.DBUtil.Select(sql);
        String json = Test.JSON.Encode(folders);
        Response.Write(json);
    }

    

    public void LoadNodes2()
    {

        String json1 = Request["data"];

        String id = Test.JSON.Decode(json1).ToString();

        if (String.IsNullOrEmpty(id)) id = "-1";

        //获取下一级节点
        String sql = "select * from plus_file where pid = '" + id + "' order by num, updatedate";
        ArrayList folders = Test.DBUtil.Select(sql);

        //判断节点，是否有子节点。如果有，则处理isLeaf和expanded。
        for (int i = 0, l = folders.Count; i < l; i++)
        {
            Hashtable node = (Hashtable)folders[i];
            String nodeId = node["id"].ToString();

            String sql2 = "select * from plus_file where pid = '" + nodeId + "' order by num, updatedate";
            ArrayList nodes = Test.DBUtil.Select(sql2);

            if (nodes.Count > 0)
            {
                node["isLeaf"] = false;
                node["expanded"] = false;
                node["asyncLoad"] = false;
            }

        }

        //返回JSON
        String json = Test.JSON.Encode(folders);
        Response.Write(json);
    }

    public void LoadNodes()
    {
        
        String id = Request["id"];
        if (String.IsNullOrEmpty(id)) id = "-1";

        //获取下一级节点
        String sql = "select * from plus_file where pid = '" + id + "' order by num, updatedate";
        ArrayList folders = Test.DBUtil.Select(sql);

        //判断节点，是否有子节点。如果有，则处理isLeaf和expanded。
        for (int i = 0, l = folders.Count; i < l; i++)
        {
            Hashtable node = (Hashtable)folders[i];
            String nodeId = node["id"].ToString();

            String sql2 = "select * from plus_file where pid = '" + nodeId + "' order by num, updatedate";
            ArrayList nodes = Test.DBUtil.Select(sql2);

            if (nodes.Count > 0)
            {
                node["isLeaf"] = false;
                node["expanded"] = false;                
            }

        }

        //返回JSON
        String json = Test.JSON.Encode(folders);
        Response.Write(json);
    }
    public void SaveTree()
    {
        String dataJSON = Request["data"];
        String removedJSON = Request["removed"];
        ArrayList tree = (ArrayList)Test.JSON.Decode(dataJSON);
        ArrayList removed = (ArrayList)Test.JSON.Decode(removedJSON);

        //生成节点列表
        ArrayList list = Test.TreeUtil.ToList(tree, "-1", "children", "id", "pid");

        //生成id和num
        for (int i = 0, l = list.Count; i < l; i++)
        {
            Hashtable node = (Hashtable)list[i];
            node["num"] = i;
            if (node["id"] == null || node["id"].ToString() == "")
            {
                node["id"] = Guid.NewGuid().ToString();
            }           

        }

        //生成pid
        list = Test.TreeUtil.ToList(tree, "-1", "children", "id", "pid");

        // Add/Update/Move Node
        for (int i = 0, l = list.Count; i < l; i++)
        {
            Hashtable node = (Hashtable)list[i];            
                        
            String state = node["_state"] != null ? node["_state"].ToString() : "";
            if (state == "added")
            {
                node["createtime"] = DateTime.Now;
                new Test.TestDB().InsertNode(node);
            }
            else
            {
                new Test.TestDB().UpdateTreeNode(node);
            }
        }
        // Remove Node
        if (removed != null)
        {
            for (int j = 0, len = removed.Count; j < len; j++)
            {
                Hashtable removedNode = (Hashtable)removed[j];
                new Test.TestDB().RemoveNode(removedNode);
            }
        }
    }

    
    public void FilterTree() 
    {        
        //获取查询参数
        String text = Request["name"].ToString().ToLower();

        //获取整个树数据
        String sql = "select * from plus_file";
        ArrayList nodes = Test.DBUtil.Select(sql);

        //找出符合查询条件的节点
        ArrayList data = new ArrayList();
        for (int i = 0, l = nodes.Count; i < l; i++) 
        {
            Hashtable node = (Hashtable)nodes[i];
            string name = node["name"] != null ? node["name"].ToString().ToLower() : "";
            if (name.IndexOf(text) > -1){
                data.Add(node);

                //加入父级所有节点
                String pid = node["pid"].ToString();
                if (pid != "-1") {
                    ArrayList data2 = SearchParentNode(pid, nodes);
                    data.AddRange(data2);
                }
            }
        }

        //去除重复节点
        Hashtable idMaps = new Hashtable();
        for (int i = data.Count-1; i >= 0 ; i--)
        {
            Hashtable node = (Hashtable)data[i];
            String id = node["id"].ToString();
            if (idMaps[id] == null)
            {
                idMaps[id] = node;
            }
            else
            {
                data.RemoveAt(i);
            }
        }

        //返回JSON
        String dataJson = Test.JSON.Encode(data);
        Response.Write(dataJson);
    }

    private ArrayList SearchParentNode(string pid,ArrayList nodes)
    {
        ArrayList data = new ArrayList();
        for (int i = 0; i < nodes.Count; i++) 
        {
            Hashtable node = (Hashtable)nodes[i];
            if (node["id"].ToString() == pid) {
                data.Add(node);
                if (node["pid"].ToString() != "-1") {
                    ArrayList data2 = SearchParentNode(node["pid"].ToString(), nodes);
                    data.AddRange(data2);
                }
            }
        }
        return data;
    }
}