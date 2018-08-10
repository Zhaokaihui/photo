create database TP
use TP

-- user用户表
create table User(
	User_id int auto_increment primary key,
	User_name varchar(50) not null,
	Email varchar(50) not null,
	Pwd char(32) not null,
	Face varchar(60) not null,
	User_introduction varchar(255) null,
	User_tel varchar(11) null,
	Visit_time int null,
	Status int not null,
	Role int null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Project项目表
create table Project(
	Project_id int auto_increment primary key,
	Project_name varchar(50) not null,
	Create_time int not null,
	Stop_time int not null,
	Final_time int not null,
	User_id int not null,
	Pigeonhole int not null,
	picture varchar(255) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table Project add constraint fk_Project_User 
	foreign key (User_id) references User(User_id);

-- Group组表
create table `Group`(
	Group_id int auto_increment primary key,
	Group_name varchar(50) not null,
	`Describe` varchar(255) not null,
	Project_id int not null,
	`Order` varchar(255) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table `Group` add constraint fk_Group_Project
	foreign key (Project_id) references Project(Project_id);

-- Degree组成员表
create table Degree(
	Degree_id int auto_increment primary key,
	Project_id int not null,
	User_id int not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table Degree add constraint fk_Degree_User 
	foreign key (User_id) references User(User_id);
alter table Degree add constraint fk_Degree_Project 
	foreign key (Project_id) references Project(Project_id);

-- Stage阶段表
create table Stage(
	Stage_id int auto_increment primary key,
	Stage_name varchar(255) Not null,
	`Order` varchar(255) Not null,
	Group_id Int not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table Stage add constraint fk_Stage_Group 
	foreign key (Group_id) references `Group`(Group_id);

-- Task任务表
create table Task(
	Task_id int auto_increment primary key,
	Task_name varchar(50) not null,
	Create_time int not null,
	Stop_time int not null,
	Final_time int not null,
	Edit_time int not null,
	User_id int not null,
	Priority char(4) not null,
	`Repeat` char(3) not null,
	State char(3) not null,
	Content varchar(255),
	Stage_id int not null,
	Pigeonhole int not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table Task add constraint fk_Task_User 
	foreign key (User_id) references User(User_id);
alter table Task add constraint fk_Task_Stage 
	foreign key (Stage_id) references Stage(Stage_id);

-- Son子任务表
create table Son(
	Son_id int auto_increment primary key,
	Content varchar(50) not null,
	Task_id int not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table Son add constraint fk_Son_Task
	foreign key (Task_id) references Task(Task_id);

-- Review回顾表
create table Review(
	Review_id int auto_increment primary key,
	User_id int not null,
	Review_time int not null,
	Content varchar(255) not null,
	Review_tab int not null,
	Parallelism int not null,
	Project_id int not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table Review add constraint fk_Review_User
	foreign key (User_id) references User(User_id);
alter table Review add constraint fk_Review_Project
	foreign key (Project_id) references Project(Project_id);

-- Note笔记表
create table Note(
	Note_id int auto_increment primary key,
	User_id int not null,
	Create_time int not null,
	Edit_time int not null,
	Note_title varchar(255) not null,
	Note_text text not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table Note add constraint fk_Note_User
	foreign key (User_id) references User(User_id);

-- Share分享墙表
create table Share(
	Share_id int auto_increment primary key,
	Share_title varchar(255) not null,
	Create_time int not null,
	Edit_time int not null,
	User_id int not null,
	Share_text text not null,
	Project_id int not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table Share add constraint fk_Share_User
	foreign key (User_id) references User(User_id);
alter table Share add constraint fk_Share_Project
	foreign key (Project_id) references Project(Project_id);

-- Relevance日程表
create table Relevance(
	Relevance_id int auto_increment primary key,
	Create_time int not null,
	Edit_time int not null,
	User_id int not null,
	Project_id int not null,
	Start_time int not null,
	Stop_time int not null,
	`Repeat` char(3) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table Relevance add constraint fk_Relevance_User 
	foreign key (User_id) references User(User_id);
alter table Relevance add constraint fk_Relevance_Project 
	foreign key (Project_id) references Project(Project_id);

-- News消息表
create table News(
	News_id int auto_increment primary key,
	Put_id int not null,
	Get_id int not null,
	News_tab int not null,
	Parallelism int not null,
	Content varchar(255) not null,
	Project_id int not null,
	Is_read int not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table News add constraint fk_News_Put 
	foreign key (Put_id) references User(User_id);
alter table News add constraint fk_News_Get
	foreign key (Get_id) references User(User_id);
alter table News add constraint fk_News_Project
	foreign key (Project_id) references Project(Project_id);

-- Discuss评论表
create table Discuss(
	Discuss_id int auto_increment primary key,
	User_id int not null,
	Discuss_tab int not null,
	Parallelism int not null,
	Content varchar(255) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table Discuss add constraint fk_Discuss_User 
	foreign key (User_id) references User(User_id);

-- Allot分配表
create table Allot(
	Allot_id int auto_increment primary key,
	Allot_tab int not null,
	Parallelism int not null,
	User_id int not null,
	Visit_time int null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table Allot add constraint fk_Allot_User 
	foreign key (User_id) references User(User_id);

-- Record操作记录表
create table Record(
	Record_id int auto_increment primary key,
	Task_id int not null,
	User_id int not null,
	Content varchar(255) not null,
	Do_time int not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table Record add constraint fk_Record_User 
	foreign key (User_id) references User(User_id);
alter table Record add constraint fk_Record_Task 
	foreign key (Task_id) references User(Task_id);