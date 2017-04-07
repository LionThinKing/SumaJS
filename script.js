(function()
{
	var titulo = document.getElementById('titulo');
	var num1 = document.getElementById('num1');
	var num2 = document.getElementById('num2');
	var result = document.getElementById('result');
	
});

var temp=""; 
var pos=0;



$(document).keyup(function(e) 
{
    if (e.keyCode == 27) 
    { 
    	pos=0; 
    	temp="";
    	num1.innerHTML = 0;
    	num2.innerHTML = 0;
    	result.innerHTML = 0;
    }
});

$(document).keypress(function(e) 
{
	console.log(e.keyCode);
	if( (e.keyCode>47 && e.keyCode<58) || e.keyCode == 45  )
	{

		if(e.keyCode==45)
		{
			if(temp=="")
			{
				temp="-";
				if(pos==0){num1.innerHTML = temp;}
				else if(pos==1){num2.innerHTML = temp;}
			}
		}
		else
		{
		
			temp += e.key+"";
			if(pos==0){if(parseInt(temp)){num1.innerHTML = parseInt(temp);}}
			else if(pos==1){num2.innerHTML = parseInt(temp);}
		}
	}


    if(e.which == 13)
    {
        pos++;
        temp = "";
        if(pos==1){titulo.innerHTML = "Digite el SEGUNDO entero y presione enter";}
        if(pos==2)
        {
        	result.innerHTML = parseInt(num1.innerHTML) + parseInt(num2.innerHTML);
        	titulo.innerHTML = "Presione ESC para borrar";
        }
    }
});