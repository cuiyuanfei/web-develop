using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Collections;

using System.Data;
using System.IO;
using System.Text;

public partial class demo_datagrid_export : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        String type = Request["type"];

        switch (type)
        {
            case "excel":
                //数据来源
                ArrayList data = SearchEmployees();

                
                String json = Request["columns"];
                ArrayList columns = (ArrayList)Test.JSON.Decode(json);
                ExportExcel(columns, data);
                break;
            default:
                break;
        }
    }
    public ArrayList SearchEmployees()
    {
        //查询条件
        string key = Request["key"];
        
        //字段排序
        String sortField = Request["sortField"];
        String sortOrder = Request["sortOrder"];

        Hashtable result = new Test.TestDB().SearchEmployees(key, 0, 10000, sortField, sortOrder);
        return result["data"] as ArrayList;
    }

    public void ExportExcel(ArrayList columns, ArrayList data)
    {
        Response.Clear();
        Response.Buffer = true;
        Response.Charset = "GB2312";
        //Response.Charset = "UTF-8";
        Response.AppendHeader("Content-Disposition", "attachment;filename=" + "grid" + ".xls");
        Response.ContentEncoding = System.Text.Encoding.GetEncoding("GB2312");//设置输出流为简体中文
        Response.ContentType = "application/ms-excel";//设置输出文件类型为excel文件。
        EnableViewState = false;
        Response.Write(ExportTable(data, columns));
        Response.End();
    
    }
    public static string ExportTable(ArrayList data, ArrayList columns)
    {
        StringBuilder sb = new StringBuilder();
        //data = ds.DataSetName + "\n";
        int count = 0;

       
        //data += tb.TableName + "\n";
        sb.AppendLine("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=gb2312\">");
        sb.AppendLine("<table cellspacing=\"0\" cellpadding=\"5\" rules=\"all\" border=\"1\">");
        //写出列名
        sb.AppendLine("<tr style=\"font-weight: bold; white-space: nowrap;\">");
        foreach (Hashtable column in columns)
        {
            sb.AppendLine("<td>" + column["header"] + "</td>");
        }
        sb.AppendLine("</tr>");

        //写出数据
        foreach (Hashtable row in data)
        {
            sb.Append("<tr>");
            foreach (Hashtable column in columns)
            {
                if (column["field"] == null) continue;
                Object value = row[column["field"]];
                sb.AppendLine("<td>" + value + "</td>");
            }           
            sb.AppendLine("</tr>");
            count++;
        }
        sb.AppendLine("</table>");
     

        return sb.ToString();
    } 
}