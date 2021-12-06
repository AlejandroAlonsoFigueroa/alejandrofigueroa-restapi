var url = "http://localhost:3300/api/instrumentos";



function guardarInstrumento(){
   var nombre = $('#nombre').val();
   var descripcion = $('#descripcion').val();
   var precio = $('#precio').val();

   var miInstrumento = {
      name: nombre,
      descripcion:  descripcion, 
      price: precio
   };
   console.log(miInstrumento);

   $.ajax({
      url: url, 
      type: 'post', 
      dataType: 'json',
      contentType: 'application/json', 
      success: function(data){
         console.log(data);
         $("#resultado").html(JSON.stringify(data.user));
      },
      data: JSON.stringify(miInstrumento),

   });
}



function obtenerInstrumentos(){
   
   console.log(url);
   


   $.getJSON(url, function(json){
      console.log(json);

      var vectorInstrumentos = json.instrumentos;

      var  htmlTableInstrumentos;
       
    
      htmlTableInstrumentos = "<h1>"+"hola mundo"+"</h1>"
      
      $('#resultado').html(htmlTableInstrumentos);

   })
}