use TP

--User
insert into User values(1,'king','king','default.jpg','牛逼','12345678910',1432176033);
insert into User values(2,'admin','admin','default.jpg','牛逼','12345678910',1432176033);
insert into User values(3,'user','user','default.jpg','牛逼','12345678910',1432176033);
insert into User values(4,'a','king','default.jpg','牛逼','12345678910',1432176033);
insert into User values(5,'b','king','default.jpg','牛逼','12345678910',1432176033);
insert into User values(6,'c','king','default.jpg','牛逼','12345678910',1432176033);

--Project
insert into Project values(1,'屌炸天',1432176033,1432176053,1432176073,1,1,'default.jpg');
insert into Project values(2,'屌爆了',1432174033,1432174053,1432174073,2,0,'default.jpg');
insert into Project values(3,'屌飞了',1432176033,1432176153,1432186073,3,0,'default.jpg');

--Group
insert into `Group` values(1,'king','牛逼',1,'a:3:{i:0;i:1;i:1;i:2;i:2;i:3;}');
insert into `Group` values(2,'admin','牛逼',1,'a:3:{i:0;i:4;i:1;i:5;i:2;i:6;}');
insert into `Group` values(3,'user','屌',2,'a:3:{i:0;i:7;i:1;i:8;i:2;i:9;}');

--Degree
insert into Degree values(1,1,1);
insert into Degree values(2,1,2);
insert into Degree values(3,1,4);
insert into Degree values(4,2,2);
insert into Degree values(5,2,1);
insert into Degree values(6,2,5);
insert into Degree values(7,3,3);
insert into Degree values(8,3,6);

--Stage
insert into Stage values(1,'one','a:1:{i:0;i:1;}',1);
insert into Stage values(2,'two','a:1:{i:0;i:2;}',1);
insert into Stage values(3,'three','a:1:{i:0;i:3;}',1);
insert into Stage values(4,'one','a:1:{i:0;i:4;}',2);
insert into Stage values(5,'two','a:1:{i:0;i:5;}',2);
insert into Stage values(6,'three','a:1:{i:0;i:6;}',2);
insert into Stage values(7,'one','a:1:{i:0;i:7;}',3);
insert into Stage values(8,'two','a:1:{i:0;i:8;}',3);
insert into Stage values(9,'three','a:1:{i:0;i:9;}',3);

--Task
insert into Task values(1,'哎哟',1432176043,1432176050,1432176070,1432176051,1,'普通','不重复','已完成','把妹',1,1);
insert into Task values(2,'哎哟',1432176043,1432176050,1432176070,1432176051,1,'紧急','重复','已完成','把妹',2,1);
insert into Task values(3,'哎哟',1432176043,1432176050,1432176070,1432176051,1,'非常紧急','不重复','已完成','把妹',3,1);
insert into Task values(4,'哎哟',1432174043,1432174050,1432174070,1432176051,2,'普通','不重复','未完成','把妹',4,0);
insert into Task values(5,'哎哟',1432174043,1432174050,1432174070,1432176051,2,'紧急','重复','未完成','把妹',5,0);
insert into Task values(6,'哎哟',1432174043,1432174050,1432174070,1432176051,2,'非常紧急','不重复','未完成','把妹',6,0);
insert into Task values(7,'哎哟',1432176035,1432176053,1432176073,1432176058,3,'普通','不重复','已完成','把妹',7,0);
insert into Task values(8,'哎哟',1432176043,1432176050,1432186070,1432176051,3,'紧急','重复','已完成','把妹',8,1);
insert into Task values(9,'哎哟',1432176043,1432186090,1432186070,1432186100,3,'非常紧急','不重复','未完成','把妹',9,0);

--Son
insert into Son values(1,'你妹',1);
insert into Son values(2,'滚粗',4);
insert into Son values(3,'草',7);

--Review
insert into Review values(1,1,1432178176,'不错',1,1,1);
insert into Review values(2,1,1432178176,'不错',2,1,1);
insert into Review values(3,2,1432178176,'不错',2,4,1);
insert into Review values(4,4,1434178176,'不错',1,1,1);
insert into Review values(5,5,1435178176,'不错',2,1,1);
insert into Review values(6,6,1436178176,'不错',2,4,1);

--Note
insert into Note values(1,1,1432178186,1432178196,'我和你','大家好才是真的好');
insert into Note values(2,2,1432178186,1432178196,'我和她','大家好才是真的不好');

--Share
insert into Share values(1,'我勒个',1432178404,1432178414,1,'麻痹的',1);
insert into Share values(2,'你勒个',1432178424,1432178434,2,'你麻痹的',2);

--Relevance
insert into Relevance values(1,1432178612,1432178622,1,1,1432178632,1432178642,'重复');
insert into Relevance values(2,1432178612,1432178622,2,2,1432178632,1432178642,'不重复');

--News
insert into News values(1,1,5,1,1,'把你加进项目');
insert into News values(2,2,5,2,4,'把你加任务');

--Discuss
insert into Discuss values(1,1,1,1,'垃圾');
insert into Discuss values(2,1,1,2,'菜鸟');
insert into Discuss values(3,1,2,1,'垃圾');
insert into Discuss values(4,2,2,2,'太难');

--Allot
insert into Allot values(1,2,1,4,1432178612);
insert into Allot values(2,3,1,5,1432178612);