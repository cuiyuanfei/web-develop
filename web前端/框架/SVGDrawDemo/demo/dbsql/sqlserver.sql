USE [plusoft_test]
GO
/****** Object:  Table [dbo].[t_position]    Script Date: 03/31/2012 15:45:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[t_position](
	[id] [nvarchar](50) NULL,
	[name] [nvarchar](50) NULL,
	[dept_id] [nvarchar](50) NULL
) ON [PRIMARY]
GO
INSERT [dbo].[t_position] ([id], [name], [dept_id]) VALUES (N'cw1', N'财务总监', N'cw')
INSERT [dbo].[t_position] ([id], [name], [dept_id]) VALUES (N'cw2', N'会计', N'cw')
INSERT [dbo].[t_position] ([id], [name], [dept_id]) VALUES (N'cw3', N'出纳', N'cw')
INSERT [dbo].[t_position] ([id], [name], [dept_id]) VALUES (N'sc1', N'市场总监', N'sc')
INSERT [dbo].[t_position] ([id], [name], [dept_id]) VALUES (N'sc2', N'销售经理', N'sc')
INSERT [dbo].[t_position] ([id], [name], [dept_id]) VALUES (N'sc3', N'销售员', N'sc')
INSERT [dbo].[t_position] ([id], [name], [dept_id]) VALUES (N'js1', N'技术总监', N'js')
INSERT [dbo].[t_position] ([id], [name], [dept_id]) VALUES (N'js2', N'后台工程师', N'js')
INSERT [dbo].[t_position] ([id], [name], [dept_id]) VALUES (N'js3', N'前端工程师', N'js')
INSERT [dbo].[t_position] ([id], [name], [dept_id]) VALUES (N'js4', N'美工', N'js')
INSERT [dbo].[t_position] ([id], [name], [dept_id]) VALUES (N'js5', N'实习生', N'js')
INSERT [dbo].[t_position] ([id], [name], [dept_id]) VALUES (N'rs1', N'人事部经理', N'rs')
INSERT [dbo].[t_position] ([id], [name], [dept_id]) VALUES (N'rs2', N'人事助理', N'rs')
/****** Object:  Table [dbo].[t_employee]    Script Date: 03/31/2012 15:45:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[t_employee](
	[id] [nvarchar](50) NULL,
	[loginname] [nvarchar](50) NULL,
	[name] [nvarchar](50) NULL,
	[age] [int] NULL,
	[birthday] [datetime] NULL,
	[dept_id] [nvarchar](50) NULL,
	[position] [nvarchar](50) NULL,
	[gender] [int] NULL,
	[married] [int] NULL,
	[salary] [nvarchar](50) NULL,
	[educational] [nvarchar](50) NULL,
	[country] [nvarchar](50) NULL,
	[city] [nvarchar](50) NULL,
	[remarks] [nvarchar](1000) NULL,
	[school] [nvarchar](50) NULL,
	[createtime] [datetime] NULL,
	[email] [nvarchar](50) NULL
) ON [PRIMARY]
GO
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'8197fb45-2b60-4309-820c-e70824fc9b33', N'zm@163.com', N'张明', 27, CAST(0x0000767700000000 AS DateTime), N'cw', N'cw2', 1, 0, N'3839', N'2', N'', N'', N'爱好足球', N'贵州财经大学', CAST(0x00009FE900B29530 AS DateTime), N'zm@163.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'b3d3d2b2-460a-470e-a33c-aff1c8d8a652', N'sww@163.com', N'宋蔚伟', 25, CAST(0x00007C3400000000 AS DateTime), N'sc', N'sc3', 1, 0, N'3681', N'2', N'', N'', N'爱好篮球', N'天津科技大学', CAST(0x00009FE900B38314 AS DateTime), N'sww@163.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'410c0185-3c9c-44ec-b9fb-f5a856013157', N'cyj@163.com', N'陈英杰', 25, CAST(0x00007C3400000000 AS DateTime), N'sc', N'sc3', 1, 0, N'3681', N'2', N'', N'', N'', N'南京审计学院', CAST(0x00009FE900B39A84 AS DateTime), N'cyj@qq.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'70b7f3d2-b5d3-413f-b3ae-d56e07fbe5fe', N'zw@hotmail.com', N'张伟', 31, CAST(0x0000739E00000000 AS DateTime), N'rs', N'rs2', 1, 1, N'4760', N'2', N'', N'', N'', N'南京工业大学', CAST(0x00009FE900B67498 AS DateTime), N'zw@hotmail.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'ceb1ab63-c0c6-40fb-a481-65ed70b9e2a2', N'huang8373268@qq.com', N'黄磊', 37, NULL, N'sc', N'sc2', 2, 1, N'7398', N'2', N'', N'', N'', N'金陵科技学院', CAST(0x00009FE900B82F90 AS DateTime), N'huang8373268@qq.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'20ac24f7-a34c-4f12-89f0-91d65b2ddfa9', N'xucc198712@qq.com', N'徐承承', 27, CAST(0x00007A0B00000000 AS DateTime), N'sc', N'', 2, 0, N'4373', N'2', N'', N'', N'', N'南京邮电学院', CAST(0x00009FE900DE2844 AS DateTime), N'xucc198712@qq.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'd6fb5410-adde-46a9-9d2b-dee99c64a83d', N'xzz@163.com', N'谢忠哲', 25, CAST(0x00007D3700000000 AS DateTime), N'js', N'js3', 2, 0, N'3860', N'2', N'', N'', N'', N'宁波工程大学', CAST(0x00009FE900DE1458 AS DateTime), N'xzz@163.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'ac3c3166-e677-45a5-9d1b-da4f09d6fc2a', N'zhoulan2010@hotmail.com', N'周兰', 34, CAST(0x000070A500000000 AS DateTime), N'rs', N'rs1', 2, 1, N'6580', N'3', N'', N'', N'', N'南京理工大学', CAST(0x00009FE900DE132C AS DateTime), N'zhoulan2010@hotmail.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'61a6943f-990e-4169-b6a0-bed9bdc42a5f', N'xiaoqian18392342@qq.com', N'陈晓倩', 24, CAST(0x00007ECF00000000 AS DateTime), N'sc', N'sc3', 2, 0, N'3000', N'2', N'', N'', N'', N'南京信息工程大学', CAST(0x00009FE900DE10D4 AS DateTime), N'xiaoqian18392342@qq.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'54b12a07-1f7d-4616-b3e9-9dcc465a5f33', N'13625147852@163.com', N'张鹏楠', 25, CAST(0x00007CC200000000 AS DateTime), N'js', N'js3', 1, 0, N'3230', N'2', N'', N'', N'', N'南京邮电学院', CAST(0x00009FE900E7EBE0 AS DateTime), NULL)
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'b0171c0f-5064-4975-9f54-ebf28666aca6', N'jan3844@gmail.com', N'沈臻妍', 25, CAST(0x00007C6B00000000 AS DateTime), N'rs', N'rs2', 2, 0, N'3400', N'2', N'', N'', N'', N'浙江理工大学', CAST(0x00009FE900DE10D4 AS DateTime), N'jan3844@gmail.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'9252b4a2-8000-4b3e-b29a-ac7849163ca2', N'djf19830326@qq.com', N'杜鉴锋', 28, CAST(0x0000791000000000 AS DateTime), N'js', N'js2', 1, 1, N'5300', N'2', N'', N'', N'', N'南京理工大学', CAST(0x00009FE900DE0E7C AS DateTime), N'djf19830326@qq.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'8cb7e27c-ebab-48b5-bf83-67f8294e8797', N'shcheng@163.com', N'施华成', 30, CAST(0x0000757900000000 AS DateTime), N'sc', N'sc2', 2, 1, N'5600', N'2', N'', N'', N'', N'南京晓庄学院', CAST(0x00009FE900DE0D50 AS DateTime), N'shcheng@163.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'7ef2fc41-27b2-4991-9134-189f95d76c42', N'hk2006@qq.com', N'黄凯', 24, CAST(0x00007DA800000000 AS DateTime), N'sc', N'sc3', 1, 0, N'2900', N'2', N'', N'', N'', N'湖南科技大学', CAST(0x00009FE900DE0C24 AS DateTime), N'hk2006@qq.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'a817ca24-ede0-4932-8455-b1e86eb7772d', N'wl19861219@163.com', N'王岚', 25, CAST(0x00007D0600000000 AS DateTime), N'sc', N'sc3', 2, 0, N'3000', N'2', N'', N'', N'', N'南京审计学院', CAST(0x00009FE900DE0AF8 AS DateTime), N'wl19861219@163.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'b4366fb3-fb9c-4244-b3b6-c56de0c70cde', N'tangyue@gmail.com', N'唐岳', 35, CAST(0x00006E8700000000 AS DateTime), N'sc', N'sc1', 1, 1, N'6300', N'2', N'', N'', N'', N'金陵科技大学', CAST(0x00009FE900DE0AF8 AS DateTime), N'tangyue@gmail.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'7cc225c6-2673-4993-ab02-288e15fc351b', N'wss2005@qq.com', N'王珊珊', 27, CAST(0x0000798C00000000 AS DateTime), N'js', N'js4', 2, 1, N'3700', N'2', N'', N'', N'', N'南京审计学院', CAST(0x00009FE900B83C74 AS DateTime), N'wss2005@qq.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'a46d28db-c484-4e58-9076-166cb957a152', N'19880141x@qq.com', N'薛乃馨', 25, CAST(0x00007C3300000000 AS DateTime), N'cw', N'cw3', 2, 0, N'3100', N'2', N'', N'', N'', N'合肥学院', CAST(0x00009FE900B83C74 AS DateTime), N'19880141x@qq.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'beb61bb1-9c6c-4c93-8d82-ab784cc00b27', N'wwy@yahoo.com', N'吴蔚一', 28, CAST(0x0000787B00000000 AS DateTime), N'js', N'js4', 1, 1, N'4320', N'2', N'', N'', N'', N'铜陵学院', CAST(0x00009FE900B83C74 AS DateTime), N'wwy@yahoo.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'c95c8c42-9fa9-4188-9a6e-0cb676d824e5', N'jinyi1987@qq.com', N'金怡', 26, CAST(0x00007B1A00000000 AS DateTime), N'js', N'js2', 2, 0, N'3987', N'2', N'', N'', N'', N'江苏大学', CAST(0x00009FE900B8356C AS DateTime), N'jinyi1987@qq.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'6f1da849-7fea-4fe1-ba33-71f7d4a6412d', N'ywq2000@163.com', N'袁维琦', 27, CAST(0x0000794E00000000 AS DateTime), N'js', N'js3', 1, 1, N'4632', N'2', N'', N'', N'', N'三江学院', CAST(0x00009FE900B83440 AS DateTime), N'ywq2000@163.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'626c9bd1-c99b-4969-9af8-58d216c2a49b', N'hongweishi@hotmail.com', N'施宏伟', 37, CAST(0x00006C2100000000 AS DateTime), N'js', N'js1', 1, 1, N'6350', N'2', N'', N'', N'', N'江苏科技大学', CAST(0x00009FE900B83314 AS DateTime), N'hongweishi@hotmail.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'17ac00b0-ea98-4865-b006-38a462ad201a', N'wj1983417@qq.com', N'王军', 28, CAST(0x000077E100000000 AS DateTime), N'js', N'js2', 1, 1, N'4850', N'2', N'', N'', N'', N'扬州大学', CAST(0x00009FE900B831E8 AS DateTime), N'wj1983417@qq.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'd4d7b386-5030-4ef8-882f-0aa869217121', N'chenjie1866@qq.com', N'陈杰', 24, CAST(0x00007EAA00000000 AS DateTime), N'cw', N'cw3', 1, 0, N'3000', N'2', N'', N'', N'', N'徐州工程大学', CAST(0x00009FE900B831E8 AS DateTime), N'chenjie1866@qq.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'27eb622c-6b1b-431e-9cf5-c82a71fea2d5', N'wkliang123@163.com', N'王克良', 29, CAST(0x0000767700000000 AS DateTime), N'sc', N'sc2', 1, 1, N'5300', N'2', N'', N'', N'', N'常熟理工大学', CAST(0x00009FE900B830BC AS DateTime), N'wkliang123@163.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'77b8dd59-30a5-49cd-aaa2-095926770438', N'qinli3849087@qq.com', N'秦立', 25, CAST(0x00007D4E00000000 AS DateTime), N'sc', N'sc3', 2, 1, N'3000', N'2', N'', N'', N'', N'盐城师范学院', CAST(0x00009FE900B830BC AS DateTime), N'qinli3849087@qq.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'c7643283-f8f8-4329-9f06-276168ffc192', N'zhangliang@163.com', N'张亮', 25, CAST(0x00007CAC00000000 AS DateTime), N'sc', N'sc3', 2, 0, N'3500', N'2', N'', N'', N'', N'宿州学院', CAST(0x00009FE900B82F90 AS DateTime), N'zhangliang@163.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'10a9f701-e0e0-4506-8937-e7c0ae8c4ae6', N'glq@qq.com', N'顾乐琴', 24, CAST(0x00007D9900000000 AS DateTime), N'js', N'js5', 2, 0, N'2000', N'2', N'', N'', N'', N'上海交通大学', CAST(0x00009FE900B82C0C AS DateTime), N'glq@qq.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'5b68ce26-90d5-4df5-9fe3-cdbd2a325f23', N'gyj@qq.com', N'高英杰', 26, CAST(0x00007BD200000000 AS DateTime), N'cw', N'cw3', 1, 0, N'3232', N'2', N'', N'', N'', N'上海外贸大学', CAST(0x00009FE900B69B44 AS DateTime), N'gyj@qq.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'7804c632-5959-4c8e-b7e7-633926efa8d9', N'zhou123@163.com', N'周捷', 26, CAST(0x00007AC000000000 AS DateTime), N'js', N'js3', 1, 0, N'4600', N'2', N'', N'', N'', N'安徽农业大学', CAST(0x00009FE900B69568 AS DateTime), N'zhou123@163.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'14e8841e-9b41-485c-9cd4-de77f8ba4cfa', N'zhuming@163.com', N'朱敏', 24, CAST(0x00007D9900000000 AS DateTime), N'js', N'js5', 1, 0, N'2000', N'2', N'', N'', N'', N'汕头大学', CAST(0x00009FE900B68F8C AS DateTime), N'zhumin@163.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'ad62a74d-82b0-4ece-9d01-59965d60f86e', N'miaochun@qq.com', N'苗春', 30, CAST(0x000075A400000000 AS DateTime), N'rs', N'rs1', 2, 1, N'6000', N'2', N'', N'', N'', N'苏州大学', CAST(0x00009FE900B68884 AS DateTime), N'miaochun@qq.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'12dfbe12-8a80-4bd6-9d88-f36b505408f8', N'wjm@qq.com', N'王佳美', 27, CAST(0x00007A1300000000 AS DateTime), N'sc', N'sc3', 2, 1, N'3681', N'2', N'', N'', N'', N'河北科技大学', CAST(0x00009FE900B388F0 AS DateTime), N'wjm@qq.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'0ffa83ef-c0d2-4c9b-9c31-aa46b657c700', N'lili@163.com', N'李丽', 25, CAST(0x00007CCF00000000 AS DateTime), N'js', N'js3', 2, 0, N'3681', N'2', N'', N'', N'', N'上海工商学院', CAST(0x00009FE900B39700 AS DateTime), N'lili@163.com')
INSERT [dbo].[t_employee] ([id], [loginname], [name], [age], [birthday], [dept_id], [position], [gender], [married], [salary], [educational], [country], [city], [remarks], [school], [createtime], [email]) VALUES (N'92c2a9fb-5da1-4de5-a516-0c4c96d82ffd', N'wq@163.com', N'王强', 25, CAST(0x00007D7800000000 AS DateTime), N'js', N'js2', 1, 0, N'3201', N'2', N'', N'', N'', N'天津商业大学', CAST(0x00009FE900B387C4 AS DateTime), N'wq@163.com')
/****** Object:  Table [dbo].[t_educational]    Script Date: 03/31/2012 15:45:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[t_educational](
	[id] [nvarchar](50) NULL,
	[name] [nvarchar](50) NULL
) ON [PRIMARY]
GO
INSERT [dbo].[t_educational] ([id], [name]) VALUES (N'1', N'大专')
INSERT [dbo].[t_educational] ([id], [name]) VALUES (N'2', N'本科')
INSERT [dbo].[t_educational] ([id], [name]) VALUES (N'3', N'研究生')
INSERT [dbo].[t_educational] ([id], [name]) VALUES (N'4', N'博士')
/****** Object:  Table [dbo].[t_department]    Script Date: 03/31/2012 15:45:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[t_department](
	[id] [nvarchar](50) NULL,
	[name] [nvarchar](50) NULL,
	[manager] [nvarchar](500) NULL,
	[manager_name] [nvarchar](500) NULL
) ON [PRIMARY]
GO
INSERT [dbo].[t_department] ([id], [name], [manager]) VALUES (N'sc', N'市场销售部', N'61a6943f-990e-4169-b6a0-bed9bdc42a5f')
INSERT [dbo].[t_department] ([id], [name], [manager]) VALUES (N'rs', N'人事部', N'9252b4a2-8000-4b3e-b29a-ac7849163ca2')
INSERT [dbo].[t_department] ([id], [name], [manager]) VALUES (N'js', N'技术部', NULL)
INSERT [dbo].[t_department] ([id], [name], [manager]) VALUES (N'cw', N'财务部', N'')
/****** Object:  Table [dbo].[plus_file]    Script Date: 03/31/2012 15:45:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[plus_file](
	[id] [int] NULL,
	[name] [varchar](500) NULL,
	[type] [varchar](50) NULL,
	[size] [varchar](50) NULL,
	[url] [varchar](500) NULL,
	[pid] [varchar](50) NULL,
	[createdate] [datetime] NULL,
	[updatedate] [datetime] NULL,
	[folder] [int] NULL,
	[num] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (1, N'Files', NULL, N'0', NULL, N'-1', NULL, NULL, 1)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (2, N'Documents', NULL, NULL, NULL, N'1', NULL, NULL, 1)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (3, N'Images', NULL, NULL, NULL, N'1', NULL, NULL, 1)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (4, N'Music', NULL, NULL, NULL, N'1', NULL, NULL, 1)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (5, N'System', NULL, NULL, NULL, N'1', NULL, NULL, 1)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (6, N'Video', NULL, NULL, NULL, N'1', NULL, NULL, 1)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (7, N'Projects', NULL, NULL, NULL, N'2', NULL, NULL, 1)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (8, N'Reports', NULL, NULL, NULL, N'2', NULL, NULL, 1)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (9, N'Employees', NULL, NULL, NULL, N'3', NULL, NULL, 1)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (10, N'Product icons', NULL, NULL, NULL, N'3', NULL, NULL, 1)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (11, N'Description.rtf', N'rtf', NULL, NULL, N'1', NULL, NULL, 0)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (12, N'n.txt', N'txt', NULL, NULL, N'1', NULL, NULL, 0)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (13, N'o.txt', N'txt', NULL, NULL, N'1', NULL, NULL, 0)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (14, N'file1.txt', N'txt', NULL, NULL, N'2', NULL, NULL, 0)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (15, N'file2.txt', N'txt', NULL, NULL, N'2', NULL, NULL, 0)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (16, N'file3.txt', N'txt', NULL, NULL, N'3', NULL, NULL, 0)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (17, N'file4.txt', N'txt', NULL, NULL, N'3', NULL, NULL, 0)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (18, N'file5.txt', N'txt', NULL, NULL, N'4', NULL, NULL, 0)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (19, N'file6.txt', N'txt', NULL, NULL, N'5', NULL, NULL, 0)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (20, N'file7.txt', N'txt', NULL, NULL, N'6', NULL, NULL, 0)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (21, N'file8', N'txt', NULL, NULL, N'7', NULL, NULL, 0)
INSERT [dbo].[plus_file] ([id], [name], [type], [size], [url], [pid], [createdate], [updatedate], [folder]) VALUES (22, N'file9', N'txt', NULL, NULL, N'8', NULL, NULL, 0)
