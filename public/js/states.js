(function(window){
  //namespace our app
  window.App = window.App || {};

  class CommandingGeneral {
    constructor(){
      this.cg = [];
      this.ready = null;
      App.utils.Get('/data/CG.json', data => {
        const parsedCGData = JSON.parse(data);
        this.cg = parsedCGData.items;
        this.render(this.ready);

      });
    }
    //render our data when data is ready
    //send final render dom element to callback
    //call back is a function that we need to pass an element to
    rendered(callback){
      this.ready = callback;
    }

    render(readyFunc){
      const view = document.createElement('div');
      view.id = 'container';

      const items = this.cg.map(cg => {
        let item = document.createElement('div');
        let lineBreak = document.createElement('p');
        let header = document.createElement('H1');
        let title = document.createTextNode(cg.summary);
        header.appendChild(title);
        item.appendChild(header);

        console.log(item);
        return item;
      });

      items.forEach(view.appendChild.bind(view));
      //Appends from donut.js
      view.appendChild(chart.element);
      chart.element.id = 'chart';
      return readyFunc(view);
    }
  }

  class CommandingGeneral2 {
    constructor(){
      this.cg = [];
      this.ready = null;
      App.utils.Get('/data/CG.json', data => {
        const parsedCGData = JSON.parse(data);
        this.cg = parsedCGData.items;
        this.render(this.ready);

      });
    }
    //render our data when data is ready
    //send final render dom element to callback
    //call back is a function that we need to pass an element to
    rendered(callback){
      this.ready = callback;
    }

    render(readyFunc){
      const view = document.createElement('div');
      view.id = 'container';

      const items = this.cg.map(cg => {
        let item = document.createElement('div');
        let lineBreak = document.createElement('p');
        let header = document.createElement('H1');
        let title = document.createTextNode(cg.summary);
        header.appendChild(title);
        item.appendChild(header);

        console.log(item);
        return item;
      });

      items.forEach(view.appendChild.bind(view));
      //Appends from donut.js
      view.appendChild(chart.element);
      chart.element.id = 'chart';
      return readyFunc(view);
    }
  }


  window.App.states = {
    CommandingGeneral,
    CommandingGeneral2

  };

}(window));