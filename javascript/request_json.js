  (function(){      //funcao auto executavel//
    "use strict";   // para facilitar a localização de declaração de variaveis ou sintaxe//

        inicio();  //após a função auto executável, aqui é o ponto de start//

        function inicio(){   //função disparada no start acima, onde vai dar inicio a leitura do carregamento das listas//.
          carregarDadosBanner(); //aqui é disparada a função para carregar os dados do arquivo banner.js. Terão mais aqui//
          carregarDadosCloudtags();
          carregarDadosNoticias();
          carregarDadosVitrine();
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
          function carregarDadosNoticias(){  // função disparada acima para carregar e solicitar a lista banner.js//
            ajax("../resources/noticias.js","get",  // disparada a função de requisição, passando parâmetros referentes a lista banner.js, no caso url,method, callback(que é uma função e vai servir p retorno)//
               function(callback){    // função do parâmetro "callback" que vai ser passada la para a funcao ajax e servir para retorno da função ajax, esse retorno é o conteudo/arquivo/resposta //
                  var data = JSON.parse(callback);  //o arquivo vem em string , assim uma variavel chamada data é criada para armazenar a resposta convertida em JSON//
                  bindNoticias(data);  // disparada a função bindBanner, com ela que vamos inserir, bindar, as informações no html, O PARAMETRO(variavel) DATA É O JSON, assim dizendo//
              });
          }
          function carregarDadosVitrine(){  // função disparada acima para carregar e solicitar a lista banner.js//
            ajax("../resources/vitrine.js","get",  // disparada a função de requisição, passando parâmetros referentes a lista banner.js, no caso url,method, callback(que é uma função e vai servir p retorno)//
               function(callback){    // função do parâmetro "callback" que vai ser passada la para a funcao ajax e servir para retorno da função ajax, esse retorno é o conteudo/arquivo/resposta //
                  var data = JSON.parse(callback);  //o arquivo vem em string , assim uma variavel chamada data é criada para armazenar a resposta convertida em JSON//
                  bindVitrine(data);  // disparada a função bindBanner, com ela que vamos inserir, bindar, as informações no html, O PARAMETRO(variavel) DATA É O JSON, assim dizendo//
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
          var Cloudtag0 = document.querySelector("[data-cloudtag0='cloudtag']");
          Cloudtag0.innerHTML = cloud[0].tag;
          var Cloudtag1 = document.querySelector("[data-cloudtag1='cloudtag']");
          Cloudtag1.innerHTML = cloud[1].tag;
          var Cloudtag2 = document.querySelector("[data-cloudtag2='cloudtag']");
          Cloudtag2.innerHTML = cloud[2].tag;
          var Cloudtag3 = document.querySelector("[data-cloudtag3='cloudtag']");
          Cloudtag3.innerHTML = cloud[3].tag;
          var Cloudtag4 = document.querySelector("[data-cloudtag4='cloudtag']");
          Cloudtag4.innerHTML = cloud[4].tag;
          var Cloudtag5 = document.querySelector("[data-cloudtag5='cloudtag']");
          Cloudtag5.innerHTML = cloud[5].tag;
          var Cloudtag6 = document.querySelector("[data-cloudtag6='cloudtag']");
          Cloudtag6.innerHTML = cloud[6].tag;
        }

        function bindNoticias(noticia){  //função para inserir informações do json noticia.js no html//
          var TituloNot0 = document.querySelector("[data-TituloNoticia0='tit_noticias']");
          var ResumoNot0 = document.querySelector("[data-ResumoNoticia0='res_noticias']");
          TituloNot0.innerHTML = noticia[0].titulo;
          ResumoNot0.innerHTML = noticia[0].sumario;
          var TituloNot1 = document.querySelector("[data-TituloNoticia1='tit_noticias']");
          var ResumoNot1 = document.querySelector("[data-ResumoNoticia1='res_noticias']");
          TituloNot1.innerHTML = noticia[1].titulo;
          ResumoNot1.innerHTML = noticia[1].sumario;
          var TituloNot2 = document.querySelector("[data-TituloNoticia2='tit_noticias']");
          var ResumoNot2 = document.querySelector("[data-ResumoNoticia2='res_noticias']");
          TituloNot2.innerHTML = noticia[2].titulo;
          ResumoNot2.innerHTML = noticia[2].sumario;
          var TituloNot3 = document.querySelector("[data-TituloNoticia3='tit_noticias']");
          var ResumoNot3 = document.querySelector("[data-ResumoNoticia3='res_noticias']");
          TituloNot3.innerHTML = noticia[3].titulo;
          ResumoNot3.innerHTML = noticia[3].sumario;
        }

        function bindVitrine(vitrine){  //função para inserir informações do json vitrine.js no html//
          var TipoVit0 = document.querySelector("[data-tipoVitrine0='tipo_vit']");
          var BairroVit0 = document.querySelector("[data-bairroVitrine0='bairro_vit']");
          var QuartosVit0 = document.querySelector("[data-quartosVitrine0='quartos_vit']");
          var VagasVit0 = document.querySelector("[data-vagasVitrine0='vagas_vit']");
          var MetroVit0 = document.querySelector("[data-metrosVitrine0='metros_vit']");
          TipoVit0.innerHTML = vitrine[0].tipo;
          BairroVit0.innerHTML = vitrine[0].bairro + ' - RJ';
          QuartosVit0.innerHTML = vitrine[0].quartos;
          VagasVit0.innerHTML = vitrine[0].vagas;
          MetroVit0.innerHTML = vitrine[0].metragem;
          var TipoVit1 = document.querySelector("[data-tipoVitrine1='tipo_vit']");
          var BairroVit1 = document.querySelector("[data-bairroVitrine1='bairro_vit']");
          var QuartosVit1 = document.querySelector("[data-quartosVitrine1='quartos_vit']");
          var VagasVit1 = document.querySelector("[data-vagasVitrine1='vagas_vit']");
          var MetroVit1 = document.querySelector("[data-metrosVitrine1='metros_vit']");
          TipoVit1.innerHTML = vitrine[1].tipo;
          BairroVit1.innerHTML = vitrine[1].bairro + ' - RJ';
          QuartosVit1.innerHTML = vitrine[1].quartos;
          VagasVit1.innerHTML = vitrine[1].vagas;
          MetroVit1.innerHTML = vitrine[1].metragem;
          var TipoVit2 = document.querySelector("[data-tipoVitrine2='tipo_vit']");
          var BairroVit2 = document.querySelector("[data-bairroVitrine2='bairro_vit']");
          var QuartosVit2 = document.querySelector("[data-quartosVitrine2='quartos_vit']");
          var VagasVit2 = document.querySelector("[data-vagasVitrine2='vagas_vit']");
          var MetroVit2 = document.querySelector("[data-metrosVitrine2='metros_vit']");
          TipoVit2.innerHTML = vitrine[2].tipo;
          BairroVit2.innerHTML = vitrine[2].bairro + ' - RJ';
          QuartosVit2.innerHTML = vitrine[2].quartos;
          VagasVit2.innerHTML = vitrine[2].vagas;
          MetroVit2.innerHTML = vitrine[2].metragem;
          var TipoVit3 = document.querySelector("[data-tipoVitrine3='tipo_vit']");
          var BairroVit3 = document.querySelector("[data-bairroVitrine3='bairro_vit']");
          var QuartosVit3 = document.querySelector("[data-quartosVitrine3='quartos_vit']");
          var VagasVit3 = document.querySelector("[data-vagasVitrine3='vagas_vit']");
          var MetroVit3 = document.querySelector("[data-metrosVitrine3='metros_vit']");
          TipoVit3.innerHTML = vitrine[3].tipo;
          BairroVit3.innerHTML = vitrine[3].bairro + ' - RJ';
          QuartosVit3.innerHTML = vitrine[3].quartos;
          VagasVit3.innerHTML = vitrine[3].vagas;
          MetroVit3.innerHTML = vitrine[3].metragem;
          var TipoVit4 = document.querySelector("[data-tipoVitrine4='tipo_vit']");
          var BairroVit4 = document.querySelector("[data-bairroVitrine4='bairro_vit']");
          var QuartosVit4 = document.querySelector("[data-quartosVitrine4='quartos_vit']");
          var VagasVit4 = document.querySelector("[data-vagasVitrine4='vagas_vit']");
          var MetroVit4 = document.querySelector("[data-metrosVitrine4='metros_vit']");
          TipoVit4.innerHTML = vitrine[4].tipo;
          BairroVit4.innerHTML = vitrine[4].bairro + ' - RJ';
          QuartosVit4.innerHTML = vitrine[4].quartos;
          VagasVit4.innerHTML = vitrine[4].vagas;
          MetroVit4.innerHTML = vitrine[4].metragem;
          var TipoVit5 = document.querySelector("[data-tipoVitrine5='tipo_vit']");
          var BairroVit5 = document.querySelector("[data-bairroVitrine5='bairro_vit']");
          var QuartosVit5 = document.querySelector("[data-quartosVitrine5='quartos_vit']");
          var VagasVit5 = document.querySelector("[data-vagasVitrine5='vagas_vit']");
          var MetroVit5 = document.querySelector("[data-metrosVitrine5='metros_vit']");
          TipoVit5.innerHTML = vitrine[5].tipo;
          BairroVit5.innerHTML = vitrine[5].bairro + ' - RJ';
          QuartosVit5.innerHTML = vitrine[5].quartos;
          VagasVit5.innerHTML = vitrine[5].vagas;
          MetroVit5.innerHTML = vitrine[5].metragem;
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
