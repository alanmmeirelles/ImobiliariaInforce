  (function(){      //funcao auto executavel//
    "use strict";   // para facilitar a localização de declaração de variaveis ou sintaxe//

        inicio();  //após a função auto executável, aqui é o ponto de start//

        function inicio(){   //função disparada no start acima, onde vai dar inicio a leitura do carregamento das listas//.
          carregarDadosBanner(); //aqui é disparada a função para carregar os dados do arquivo banner.js. Terão mais aqui//
          carregarDadosCloudtags();
        }



  //inicio da área para carregamento de listas //

          function carregarDadosBanner(){  // função disparada acima para carregar e solicitar a lista banner.js//
            ajax("../resources/banner.js","get",  // disparada a função de requisição, passando parâmetros referentes a lista banner.js, no caso url,method, callback(que é uma função e vai servir p retorno)//
               function(callback){    // função do parâmetro "callback" que vai ser passada la para a funcao ajax e servir para retorno da função ajax, esse retorno é o conteudo/arquivo/resposta //
                  var data = JSON.parse(callback);  //o arquivo vem em string , assim uma variavel chamada data é criada para armazenar a resposta convertida em JSON//
                  bindBanner(data);  // disparada a função bindBanner, com ela que vamos inserir, bindar, as informações no html, O PARAMETRO(variavel) DATA É O JSON, assim dizendo//
              });
          }
          function carregarDadosCloudtags(){  // função disparada acima para carregar e solicitar a lista banner.js//
            ajax("../resources/cloudtag.js","get",  // disparada a função de requisição, passando parâmetros referentes a lista banner.js, no caso url,method, callback(que é uma função e vai servir p retorno)//
               function(callback){    // função do parâmetro "callback" que vai ser passada la para a funcao ajax e servir para retorno da função ajax, esse retorno é o conteudo/arquivo/resposta //
                  var data = JSON.parse(callback);  //o arquivo vem em string , assim uma variavel chamada data é criada para armazenar a resposta convertida em JSON//
                  bindCloud(data);  // disparada a função bindBanner, com ela que vamos inserir, bindar, as informações no html, O PARAMETRO(variavel) DATA É O JSON, assim dizendo//
              });
          }

  //fim  da área para carregamento de listas //





//inicio da área para bindar o conteudo no html //

        function bindBanner(banner){  //função para inserir informações do json banner.js no html//
          var TituloBanner0 = document.querySelector("[data-banner0='banner0Titulo']");
          TituloBanner0.innerHTML = banner[0].titulo;
          var TituloBanner1 = document.querySelector("[data-banner1='banner1Titulo']");
          TituloBanner1.innerHTML = banner[1].titulo;
        }
        function bindCloud(cloud){  //função para inserir informações do json cloud.js no html//
          var cloudtag0 = document.querySelector("[data-cloudtag0='cloudtag']");
          cloudtag0.innerHTML = cloud[0].tag;
          var cloudtag1 = document.querySelector("[data-cloudtag1='cloudtag']");
          cloudtag1.innerHTML = cloud[1].tag;
          var cloudtag2 = document.querySelector("[data-cloudtag2='cloudtag']");
          cloudtag2.innerHTML = cloud[2].tag;
          var cloudtag3 = document.querySelector("[data-cloudtag3='cloudtag']");
          cloudtag3.innerHTML = cloud[3].tag;
          var cloudtag4 = document.querySelector("[data-cloudtag4='cloudtag']");
          cloudtag4.innerHTML = cloud[4].tag;
          var cloudtag5 = document.querySelector("[data-cloudtag5='cloudtag']");
          cloudtag5.innerHTML = cloud[5].tag;
          var cloudtag6 = document.querySelector("[data-cloudtag6='cloudtag']");
          cloudtag6.innerHTML = cloud[6].tag;
        }


//fim da área para bindar o conteudo no html //








        //    FUNÇÃO DE REQUISIÇÃO   //
        function ajax(url,method,callback){    //criando a função pegando/passando os parametros Url, metodo e callback//
          var request = new XMLHttpRequest();   // criando o objeto para receber a requisição(prepara p receber)//
          request.open(method, url, true);  //abre a requisição pedindo no url e com o metodo passados, true quer dizer que sera async//
          request.onload =  //carregando a variavel request ou o objeto XMLHttpRequest com a resposta da requisição//
            function(){   //funcao para inserir  a resposta no parametro callback que vai servir de retorno.//
                callback(request.response); // o parametro callback retorna com a resposta e é armazenado na variavel/objeto request,
            };
          request.send();   // retornar a variavel request pelo parametro callback //
        }

}()) //essas () fazem parte da função auto executavel//
