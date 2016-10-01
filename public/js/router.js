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
        case 'random':
          state = new App.states.Random();
          break;
      }
      this.container.innerHTML = '';
      state.rendered( (element) => {
        this.container.innerHTML = '';
        this.container.appendChild( element );
      });

    }
  }
  window.App.Router = new Router('container');
}(window));