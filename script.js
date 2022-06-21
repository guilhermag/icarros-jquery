$(document).ready(
  function(){
    $('button').click(function(){
      // $('#test').hide("slow")
      // $.ajax({
      //   url: 'https://webhook.site/2d78fbaf-fd1f-4bd3-80e0-55ca9e3fd850',
      //   type: 'POST',
      //   data: {
      //     name: 'nome',
      //   },
      //   contentType: 'application/json',
      //   success: function() {
      //     console.log('Sucesso!')
      //   }
      // })

      //adicionando classe
      // $('p').addClass('red')

      //removendo classe
      // $('p').removeClass('red')
    })
    $('#formulario').submit(function(e){
      e.preventDefault();
      let data = {
        name: $('#name').val(),
        phone: $('#phone').val(),
        email: $('#email').val(),
      }
      data = JSON.stringify(data)
    // $.ajax({
    //     url: 'https://webhook.site/2d78fbaf-fd1f-4bd3-80e0-55ca9e3fd850',
    //     type: 'POST',
    //     data: data,
    //     contentType: 'application/json',
    //     success: function() {
    //       alert('Sucesso!')
    //     }
    //   })
      // console.log(data);
      $('#content').text(data);
    })
  }
)