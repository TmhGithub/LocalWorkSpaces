--==============================================================
-- DBMS name:      IBM DB2 UDB 8.x Common Server
-- Created on:     2008-2-19 14:27:51
--==============================================================


alter table ACCT drop foreign key F_REF_CIF_ACCT;

alter table CSSMAPPING drop foreign key "F_Reference_3";

alter table ROLE drop foreign key F_REF_ROLE_USER;

alter table USR drop foreign key F_REF_CIF_USER;

drop index "I_accifno";

drop index "I_ucifno";

drop table ACCESSLOG;

drop table ACCT;

drop table AUTHQUEUE;

drop table CIF;

drop table CSJNL;

drop table CSSDEF;

drop table CSSMAPPING;

drop table JNL;

drop table ROLE;

drop table SEQNO;

drop table TELLERJNL;

drop table UAPROF;

drop table USR;

drop sequence CSSEQNO;

drop sequence JNLSEQ;

create sequence CSSEQNO;

create sequence JNLSEQ;

--==============================================================
-- Table: ACCESSLOG
--==============================================================
create table ACCESSLOG
(
   JNLNO                VARCHAR(20)            not null,
   STATUS               CHAR(1),
   ACCESSDATE           DATE                   not null,
   DATETIME             TIMESTAMP              not null,
   USERID               VARCHAR(20),
   TRANSNAME            VARCHAR(30),
   IPADDR               VARCHAR(16),
   WAPTELNO             VARCHAR(20),
   REJCODE              VARCHAR(80),
   REJMSG               VARCHAR(160),
   ENDTIME              TIMESTAMP,
   constraint "P_Key_1" primary key (JNLNO)
);

--==============================================================
-- Table: ACCT
--==============================================================
create table ACCT
(
   ACNO                 VARCHAR(30)            not null,
   CIFNO                VARCHAR(20)            not null,
   STATUS               CHAR(1)                not null,
   ACTYPE               VARCHAR(3),
   CURRENCY             VARCHAR(3),
   CURRTYPE             CHAR(1),
   TRANSFERTYPE         CHAR(1)                not null,
   LASTDATE             DATE,
   constraint PK_ACCT primary key (ACNO)
);

--==============================================================
-- Index: "I_accifno"
--==============================================================
create index "I_accifno" on ACCT (
   CIFNO                ASC
);

--==============================================================
-- Table: AUTHQUEUE
--==============================================================
create table AUTHQUEUE
(
   SEQNO                VARCHAR(20)            not null,
   DATETIME             DATE                   not null,
   TRSSTATUS            VARCHAR(2),
   TRANSNAME            VARCHAR(30)            not null,
   CIFNO                VARCHAR(20),
   USERID               VARCHAR(20),
   ACNO                 VARCHAR(20),
   ACNO2                VARCHAR(20),
   AMOUNT               NUMERIC(15,2)          default 0,
   "DATA"               LONG VARCHAR           for bit data,
   constraint P_PK_JNL primary key (SEQNO)
);

--==============================================================
-- Table: CIF
--==============================================================
create table CIF
(
   CIFNO                VARCHAR(20)            not null,
   BRANCHID             VARCHAR(4)             not null,
   DEPTID               VARCHAR(4)             not null,
   CIFNAME              VARCHAR(80)            not null,
   STATUS               CHAR(1)                not null,
   OPENDATE             DATE                   not null,
   CLOSEDATE            DATE,
   constraint PK_CIF primary key (CIFNO)
);

--==============================================================
-- Table: CSJNL
--==============================================================
create table CSJNL
(
   TRSDATE              DATE                   not null,
   JNLNO                VARCHAR(20)            not null,
   STATUS               CHAR(1)                not null,
   BEGINTIME            DATE                   not null,
   USERID               VARCHAR(20),
   TRANSNAME            VARCHAR(30)            not null,
   IPADDR               VARCHAR(16),
   REJCODE              VARCHAR(250),
   REJMSG               VARCHAR(250),
   ENDTIME              DATE,
   JNLDATA              LONG VARCHAR           for bit data,
   constraint P_PK_JNL primary key (JNLNO, TRSDATE)
);

--==============================================================
-- Table: CSSDEF
--==============================================================
create table CSSDEF
(
   CSSID                VARCHAR(20)            not null,
   FILENAME             VARCHAR(80)            not null,
   "DATA"               LONG VARCHAR,
   constraint "P_Key_1" primary key (CSSID)
);

--==============================================================
-- Table: CSSMAPPING
--==============================================================
create table CSSMAPPING
(
   VENDOR               VARCHAR(80)            not null,
   MODEL                VARCHAR(20)            not null,
   BEARER               VARCHAR(20)            not null,
   CSSID                VARCHAR(20),
   "EXTERNAL"           CHAR(1)                not null,
   constraint "P_Key_1" primary key (VENDOR, MODEL, BEARER)
);

--==============================================================
-- Table: JNL
--==============================================================
create table JNL
(
   JNLNO                VARCHAR(20)            not null,
   STATUS               CHAR(1)                not null,
   JNLDATE              DATE,
   DATETIME             TIMESTAMP              not null,
   USERID               VARCHAR(20),
   TRANSNAME            VARCHAR(30)            not null,
   IPADDR               VARCHAR(16),
   REJCODE              VARCHAR(80),
   REJMSG               VARCHAR(160),
   ACNO                 VARCHAR(20),
   ACNO2                VARCHAR(20),
   CURRENCY             VARCHAR(3),
   CURTYPE              CHAR(1),
   AMOUNT               DECIMAL(15,2)          not null default 0,
   ENDTIME              TIMESTAMP,
   "DATA"               LONG VARCHAR           for bit data,
   constraint P_PK_JNL primary key (JNLNO)
);

--==============================================================
-- Table: ROLE
--==============================================================
create table ROLE
(
   USERID               VARCHAR(20)            not null,
   ROLEID               VARCHAR(20)            not null,
   constraint "P_Key_1" primary key (ROLEID, USERID)
);

--==============================================================
-- Table: SEQNO
--==============================================================
create table SEQNO
(
   "TYPE"               CHAR(1)                not null,
   SEQNO                NUMERIC(15)            not null default 0,
   constraint P_PK_SEQNO primary key ("TYPE")
);

--==============================================================
-- Table: TELLERJNL
--==============================================================
create table TELLERJNL
(
   ACDATE               DATE                   not null,
   ORGID                VARCHAR(11)            not null,
   JNLNO                VARCHAR(20)            not null,
   STATUS               CHAR(1)                not null,
   BEGINTIME            DATE                   not null,
   USERID               VARCHAR(20),
   AUTHTELLER           VARCHAR(20),
   TRANSNAME            VARCHAR(30)            not null,
   IPADDR               VARCHAR(16),
   REJCODE              VARCHAR(250),
   REJMSG               VARCHAR(250),
   ENDTIME              DATE,
   ACNO                 VARCHAR(50),
   CIFNAME              VARCHAR(250),
   JNLDATA              LONG VARCHAR           for bit data,
   constraint P_PK_JNL primary key (ACDATE, ORGID, JNLNO)
);

--==============================================================
-- Table: UAPROF
--==============================================================
create table UAPROF
(
   PROFURL              VARCHAR(255)           not null,
   VENDOR               VARCHAR(80)            not null,
   MODEL                VARCHAR(20)            not null,
   RATIO_X              SMALLINT               not null default 1,
   RATIO_Y              SMALLINT               not null,
   SCR_SZ_X             SMALLINT               not null,
   SCR_SZ_Y             SMALLINT               not null,
   SCR_SZ_CHAR_X        SMALLINT               not null,
   SCR_SZ_CHAR_Y        SMALLINT               not null,
   SCR_STD_FONT_PP      CHAR(1)                not null,
   BITS_PERPIXEL        SMALLINT               not null,
   COLOR_CAPABLE        CHAR(1)                not null,
   IMAGE_CAPABLE        CHAR(1)                not null,
   SOFTKEYS             SMALLINT               not null,
   XHTML_VER            VARCHAR(10)            not null,
   FRAME_CAPABLE        CHAR(1)                not null,
   WAP_VER              VARCHAR(10)            not null,
   JAVASCRIPT           CHAR(1)                not null,
   ENABLED              CHAR(1)                not null,
   XMLDATA              LONG VARCHAR,
   constraint "P_Key_1" primary key (PROFURL)
);

--==============================================================
-- Table: USR
--==============================================================
create table USR
(
   USERID               VARCHAR(20)            not null,
   USERNAME             VARCHAR(50),
   CIFNO                VARCHAR(20)            not null,
   PASSWORD             VARCHAR(100)           not null,
   STATUS               CHAR(1)                not null,
   WAPTELNO             VARCHAR(20)            not null,
   OPENDATE             DATE                   not null,
   CLOSEDATE            DATE,
   constraint PK_USER primary key (USERID)
);

--==============================================================
-- Index: "I_ucifno"
--==============================================================
create index "I_ucifno" on USR (
   CIFNO                ASC
);

alter table ACCT add constraint F_REF_CIF_ACCT foreign key (CIFNO) references CIF (CIFNO) on delete restrict on update restrict;

alter table CSSMAPPING add constraint "F_Reference_3" foreign key (CSSID) references CSSDEF (CSSID) on delete restrict on update restrict;

alter table ROLE add constraint F_REF_ROLE_USER foreign key (USERID) references USR (USERID) on delete restrict on update restrict;

alter table USR add constraint F_REF_CIF_USER foreign key (CIFNO) references CIF (CIFNO) on delete restrict on update restrict;

