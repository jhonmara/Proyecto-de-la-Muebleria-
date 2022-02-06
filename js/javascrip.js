var usuario = prompt("base");
        var mueble = parseInt(prompt("Elige tu mueble\n2 es Cabecera, 3 es Colchon"));
        var muebles = parseInt(prompt("Elige tu mueble\n4 es Buros, 5 es Tocador"));
        var precio = parseInt(usuario);
        var g_Base = 1200;
        var g_Cabecera = 1200;
        var g_Colchon = 3900;
        var g_Buros = 1100;  
        var g_Tocador = 2000;
        var valor_total;
        var nombre;
        if(mueble == 2)
     {
         valor_total = precio + g_Cabecera + g_Base;
         nombre = "Cabecera y base";
     }
     else if(mueble == 3)
     {
         valor_total = precio + g_Colchon + g_Base;
         nombre = "Colchon y Base";

     }
     else if(mueble == 4)
     {
       valor_total = precio + g_Buros + g_Base;
       nombre = "Base y Buros";
     }
     else if(mueble == 5)
     {
       valor_total = precio + g_Tocador + g_Base;
       nombre = "Base y Tocador";
     }
     
     valor_total = parseInt(valor_total);      

       
     document.write("Tu mueble " + nombre+ " es <strong> " + valor_total + " Pesos</strong>");