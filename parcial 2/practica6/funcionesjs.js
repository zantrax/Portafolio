var clave="";
while(clave !="1234")
{
	clave=prompt("introduzca contraseña: ","");
	
}
alert("contraseña correcta!!");
function Sum(){ var num1=0,num2=0,suma=0;
	num1=prompt("Numero 1: ","");
	num2=prompt("Numero 2: ","");
	suma=parseInt(num1)+parseInt(num2);
	alert("la suma es: " +String(suma));
}
function res(){var num1=0,num2=0,resta=0;
	num1=prompt("Numero 1: ","");
	num2=prompt("Numero 2: ","");
	resta=parseInt(num1)-parseInt(num2);
	alert("la resta es: " +String(resta));
}
function mult(){var num1=0,num2=0,multiplicacion=0;
	num1=prompt("Numero 1: ","");
	num2=prompt("Numero 2: ","");
	multiplicacion=parseInt(num1)*parseInt(num2);
	alert("la multiplicacion es: " +String(multiplicacion));
}
function div(){var num1=0,num2=0,division=0;
	num1=prompt("Numero 1: ","");
	num2=prompt("Numero 2: ","");
	division=parseInt(num1)/parseInt(num2);
	alert("la division es: " +String(division));
}
function mod(){var num1=0,num2=0,modulo=0;
	num1=prompt("Numero 1: ","");
	num2=prompt("Numero 2: ","");
	modulo=parseInt(num1)%parseInt(num2);
	alert("el modulo es: " +String(modulo));
}
function pot(){var num1=0,num2=0,potencia=0;
	potencia=Math.pow(num1=prompt("Numero 1: ",""),num2=prompt("Numero 2: ",""));
	alert("la potencia es: " +String(potencia));
}
function ayuda(){
	alert("Ingresa 2 numeros, y elige una opcion: ¿sencillo no?");
}