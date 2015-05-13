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
        time: "9h00"
      },
      {
        name        : "Linus Torvalds",
        photo       : "themes/meu-material/img/speaker.jpg",
        bio         : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company     : "Linux Foundation",
        link        : {
          href: "http://twitter.com/linus",
          text: "@linus"
        },
        presentation: {
          title      : "Conhecendo o Kernel do Linux",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time       : "10h00"
        }
      },
      {
        name        : "Bill Gates",
        photo       : "themes/meu-material/img/speaker.jpg",
        bio         : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company     : "Microsoft",
        link        : {
          href: "http://github.com/billy95",
          text: "@billy95"
        },
        presentation: {
          title      : "Apresentando o Windows 12",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time       : "11h00"
        }
      },
      {
        name: "Almoço",
        time: "12h00"
      },
      {
        name        : "Chuck Norris",
        photo       : "themes/meu-material/img/speaker.jpg",
        bio         : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company     : "Delta Command",
        link        : {
          href: "http://twitter.com/littlechuck",
          text: "@littlechuck"
        },
        presentation: {
          title      : "Como matar um elephant com um dedo",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time       : "13h00"
        }
      },
      {
        name        : "Steve Jobs",
        photo       : "themes/meu-material/img/speaker.jpg",
        bio         : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company     : "Apple, Inc.",
        link        : {
          href: "http://github.com/stevie",
          text: "@stevie"
        },
        presentation: {
          title      : "Apresentando o iPad",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time       : "14h00"
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      },
      {
        name        : "Mark Zuckerberg",
        photo       : "themes/meu-material/img/speaker.jpg",
        bio         : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company     : "Facebook",
        link        : {
          href: "http://twitter.com/zuck",
          text: "@zuck"
        },
        presentation: {
          title      : "Revelando os segredos do Facebook",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time       : "16h00"
        }
      },
      {
        name        : "Steve Wozniak",
        photo       : "themes/meu-material/img/speaker.jpg",
        bio         : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company     : "Apple, Inc.",
        link        : {
          href: "http://twitter.com/woz",
          text: "@woz"
        },
        presentation: {
          title      : "Porque eu prefiro Android em vez de iOS",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time       : "17h00"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "9D studio",
        logo: "themes/meu-material/img/9d.jpg",
        url : "http://9d.com.br"
      },
      {
        name: "Eventick",
        logo: "themes/meu-material/img/sponsor.png",
        url : "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/meu-material/img/partner.png",
        url : "http://braziljs.org"
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