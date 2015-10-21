

delete from role;
delete from acct;
delete from usr;
delete from cif;





INSERT INTO CIF(CIFNO,BRANCHID,DEPTID,CIFNAME,STATUS,OPENDATE ) values('00000001','001','999','Client Server','0', '2005-02-22');

INSERT INTO USR(CIFNO,USERID,USERNAME, PASSWORD,STATUS,WAPTELNO,OPENDATE) values('00000001','user01','Operator','4edb20f5b21b363b2bcd93cc8a1a95a3','0','13910628163', '2005-02-22');

INSERT INTO USR(CIFNO,USERID,USERNAME, PASSWORD,STATUS,WAPTELNO,OPENDATE) values('00000001','user02','Overrider','b03ea7d7096bcaad81d86115cebfda62','0','13910628163', '2005-02-22');

insert into  ACCT(CIFNO, ACNO, STATUS, ACTYPE ,CURRENCY, TRANSFERTYPE) values('00000001','0019990000012','0', '7','HKD', '0' );

insert into  ACCT(CIFNO, ACNO, STATUS, ACTYPE ,CURRENCY, TRANSFERTYPE) values('00000001','0019990000029','0', '7','HKD', '1' );

insert into  ACCT(CIFNO, ACNO, STATUS, ACTYPE ,CURRENCY, TRANSFERTYPE) values('00000001','0019990000031','0', '1','HKD', '0' );

insert into  ACCT(CIFNO, ACNO, STATUS, ACTYPE ,CURRENCY, TRANSFERTYPE) values('00000001','0019990000045','0', '2','HKD', '1' );



insert into ROLE(USERID,ROLEID) values('user01','ACT010');
insert into ROLE(USERID,ROLEID) values('user01','ACT020');
insert into ROLE(USERID,ROLEID) values('user01','ACQ003');
insert into ROLE(USERID,ROLEID) values('user01','ACQ004');
insert into ROLE(USERID,ROLEID) values('user02','ACT030');

commit;

