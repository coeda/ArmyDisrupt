//goal is to instantiates when user requests it
(function(window) {
  window.App = window.App || {};

  //map routes to state
  class Router{
    constructor(containerId){
      this.container = document.getElementById(containerId);
    }
    //navigate function that takes in a route and renders to container
    navigate(route){
      let state = null;
      switch(route){
        case 'cg':
          state = new App.states.CommandingGeneral();
          break;
        case 'cos':
          state = new App.states.ChiefOfStaff();
          break;
        case 'dcgar':
          state = new App.states.DeputyCommandingGeneralArmy();
          break;
        case 'dcgng':
          state = new App.states.DeputyCommandingGeneralGuard();
          break;
        case 'dcgn':
          state = new App.states.DeputyCommandingGeneralNational();
          break;
        case 'dcgs':
          state = new App.states.DeputyCommandingGeneralSouth();
          break;
        case 'g3':
          state = new App.states.G3();
          break;
      }

      state.rendered( (element) => {

        this.container.appendChild( element );
      });

    }
  }
  window.App.Router = new Router('container');
}(window));