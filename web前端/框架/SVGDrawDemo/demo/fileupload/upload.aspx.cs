using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.IO;

public partial class demo_fileUpload_fileUpload : System.Web.UI.Page {
    protected void Page_Load(object sender, EventArgs e) 
    {
        // 获得程序路径
        string tempFile = Request.PhysicalApplicationPath;

        //找到目标文件对象
        HttpPostedFile uploadFile = Request.Files["Fdata"];

        // 如果有文件, 则保存到一个地址
        if (uploadFile.ContentLength > 0)
        {
            uploadFile.SaveAs(string.Format("{0}{1}{2}", tempFile, "demo\\fileUpload\\upload\\", uploadFile.FileName));
        }

        Response.Write(uploadFile.FileName +"("+DateTime.Now+")");    //可以返回一个JSON字符串, 在客户端做更多处理
    }
}