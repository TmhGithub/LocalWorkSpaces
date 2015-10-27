var timerID=null;
var server_now=null;
function ServerTime()
{
	server_now=new Date();
	tim();
}
function tim()
{
	var diff;
	vartime = Date.parse(server_now);
	server_now.setTime(vartime+1000);
	var year = server_now.getYear();
	var month = server_now.getMonth()+1;
	var date = server_now.getDate();
	var hrs = server_now.getHours();
	var mins = server_now.getMinutes();
	var sec = server_now.getSeconds();
	window.status =  ' 服务器时间(仅供参考):'+year+"年" +month+"月"+date+"日"+ hrs + '时' + mins + '分' + sec + '秒';
	timerID=setTimeout('tim()',1000);
}
ServerTime();

<!--
function Year_Month()
{
 var now = server_now;
 var yyyy = now.getYear();
 var mmmm = now.getMonth() + 1;
 var cl = '<font color = "#3A6EA5">';
 if ( now.getDay() == 0 )
  cl = '<font color = "#C00000">';
 if ( now.getDay() == 6 )
  cl = '<font color = "#00C000">';
 //return( cl + yyyy + '年' + mmmm + '月</font>' );
 return(yyyy + '年' + mmmm + '月' );
}
function Date_of_Today()
{
 var now = server_now;
 var cl = '<font color = "#FF0000">';
 if ( now.getDay() == 0 )
  cl = '<font color = "#C00000">';
 if ( now.getDay() == 6 )
  cl = '<font color = "#00C000">';
 //return( cl + now.getDate() + '</font>' );
 return(now.getDate());
}
function CurentTime()
{
 var now = server_now;
 var hh = now.getHours();
 var mm = now.getMinutes();
 var ss = now.getTime() % 60000;
 ss = ( ss - ( ss % 1000 ) ) / 1000;
 var clock = hh + ':';
 if( mm < 10 )
  clock += '0';
 clock += mm + ':';
 if( ss < 10 )
  clock += '0';
 clock += ss;
 return( clock );
}
function Day_of_Today()
{
 var day = new Array();
 day[0] = "星期日";
 day[1] = "星期一";
 day[2] = "星期二";
 day[3] = "星期三";
 day[4] = "星期四";
 day[5] = "星期五";
 day[6] = "星期六";
 var now = server_now;
 var cl = '<font color = "#0000DF">';
 if ( now.getDay() == 0 )
  cl = '<font color = "#C00000">';
 if ( now.getDay() == 6 )
  cl = '<font color = "#00C000">';
 //return( cl +  day[ now.getDay() ] + '</font>' );
 return( day[ now.getDay() ]);
}
function refreshCalendarClock()
{
 document.all.C1.innerHTML = Year_Month();
 document.all.C2.innerHTML = Date_of_Today();
 document.all.C3.innerHTML = Day_of_Today();
 document.all.C4.innerHTML = CurentTime();
}

 
 refreshCalendarClock();
 setInterval( 'refreshCalendarClock()', 1000);
-->


