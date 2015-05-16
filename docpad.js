module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name       : "Google I/O Extended 2015",
      description: "Somos um evento local e simultâneo ao Google I/O que acontece na Califórnia, trazendo palestras, keynote oficial, discussões e muito mais",
      date       : "28 de MAIO de 2015",
      // If your event is free, just comment this line
      price      : "R$ 20,00",
      venue      : "UNDB",
      address    : "Av. Colares Moreira, 443 - Renascença II, São Luís - MA",
      city       : "São Luís",
      state      : "MA"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
      text: "Garantir vaga",
      link: "https://goo.gl/HPy14C"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
      repository: "https://github.com/insign/conf-boilerplate"
    },

    // Site info
    site: {
      theme          : "meu-material",
      url            : "https://google.com",
      googleanalytics: "UA-2949123-21"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'evento',
      'local',
      'palestrantes',
      'programacao',
      'patrocinadores',
      'parceiros',
      'contato'
    ],

    // Labels which you can translate to other languages
    labels: {
      evento        : "Evento",
      local         : "Local",
      palestrantes  : "Palestras",
      programacao   : "Programação",
      patrocinadores: "Patrocinadores",
      parceiros     : "Parceiros",
      contato       : "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in / Breakfast",
        time: "8h00"
      },
      {
        name        : "Fábio Assunção",
        photo       : "themes/meu-material/img/perfil2.jpg",
        bio         : "Front / back-end web developer at VAT S/A. Graduando em Engenharia da Computação, pai do Gabriel, freelancer em tempo parcial e eterno aprendiz.",
        company     : "VAT",
        link        : {
          href: "http://twitter.com/fabiioassuncao",
          text: "@fabiioassuncao"
        },
        presentation: {
          title      : "JavaScript, um mundo além do browser.",
          description: "Quando alguém te fala em JavaScript o que lhe vem a mente? Manipular o DOM? Esqueça isso, você pode fazer muito mais com o JavaScript. Com ele você pode além de desenvolver complexas aplicações web, também fazer grandes apps para dispositivos móveis, desktop, servidor e até desenvolver para Arduíno, Raspberry e mais uma infinidade de possibilidades.",
          time       : "08h30"
        }
      },
      {
        name: "Almoço",
        time: "11h40"
      },
      {
        photo       : "themes/meu-material/img/google.png",
        company     : "Google",
        presentation:{
          title       : "Keynote Oficial Google I/O",
          description : "Apresentação do keynote oficial direto do evento Google I/O São Francisco.",  
          time        : "13h30"
        }
      },
      {
        name: "Coffee-break",
        time: "16h00"
      }, 
      {
        name: "Painel de debate sobre as novas tecnologias.",
        time: "16h30"
      },
      {
        name: "Sorteios e Encerramento.",
        time: "17h30"
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "9D studio",
        logo: "themes/meu-material/img/9d.jpg",
        url : "http://9d.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "PHP Maranhão",
        logo: "http://www.phpmaranhao.com.br/wp-content/themes/phpmaranhao/images/phpma.png",
        url : "http://phpmaranhao.com.br"
      }
    ],

    // Theme path
    getTheme: function () {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function () {
      return this.site.url;
    }
  }
};