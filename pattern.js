function Pattern1(){
    var num;
    var no=prompt("How Many Row In Patter... To Enter ");
    for(var i=1;i<=no;i++)
    {
        for(var j=1;j<=i;j++)
    {
          document.write("* ");
    }
    document.write("<br />");
    }
}
function Pattern2(){
    var num;
    var no=prompt("How Many Row In Patter... To Enter ");
    for(var i=no;i>=1;i--)
    {
        for(var j=1;j<=i;j++)
    {
          document.write("* ");
    }
    document.write("<br />");
    }
}
function Pattern3(){
    var num;
    var no=prompt("How Many Row In Patter... To Enter ");
    for(var i=1;i<=no;i++)
    {
        for(var j=1;j<=i;j++)
        {

            if(j==i)
            {
                continue;
            }
            else
            {
                document.write(""+j+" ");
            }
        }
    document.write("<br/>");
    }
}
function Pattern4(){
    var num;
    var no=prompt("How Many Row In Patter... To Enter ");
    for(var i=1;i<=no;i++)
    {
        for(var j=1;j<=i;j++)
    {
          document.write(""+j+" ");
    }
    document.write("<br/>");
    }
}
function Pattern5(){
    var num;
    var no=prompt("How Many Row In Patter... To Enter ");
    for(var i=1;i<=no;i++)
    {
        for(var j=1;j<=i;j++)
    {
          document.write(""+j+" ");
    }
    document.write("<br />");
    }
    for(var i=no;i>=1;i--)
    {
        for(var j=1;j<=i;j++)
    {
          document.write(""+j+" ");
    }
    document.write("<br />");
    }
}
function Patter6(){
    var num;
    var no=prompt("How Many Row In Patter... To Enter ");
    for(var i=1;i<=no;i++)
    {
        for(var j=1;j<=i;j++)
    {
          document.write("* ");
    }
    document.write("<br />");
    }
}