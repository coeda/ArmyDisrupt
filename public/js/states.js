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

      return readyFunc(view);
    }
  }
  class Random {
    //constructor prepares data
    constructor(){
      this.random = [];
      this.ready = null;
      App.utils.Get('https://www.reddit.com/r/gifs.json', data => {
        const parsedRandomData = JSON.parse(data);
        this.random = parsedRandomData.data.children;

        this.render(this.ready);

      });
    }
    //return single dom element to be added to view
    rendered(callback){
      this.ready = callback;
    }

    render(readyFunc){
      const view = document.createElement('div');
      view.id = 'container';
      this.random.shift();
      this.random.shift();
      const items = this.random.map(random => {
        let item = document.createElement('div');
        let lineBreak = document.createElement('p');
        let header = document.createElement('H1');
        let title = document.createTextNode(random.data.title);
        let video = document.createElement('video');
        let author = document.createTextNode(random.data.author);
        let source = document.createElement('source');
        let changedUrl = random.data.url;
        changedUrl = changedUrl.split('.');
        if(changedUrl[changedUrl.length - 1] === 'gifv' || changedUrl[changedUrl.length - 1] === 'gif'){
          changedUrl.pop();
        }
        changedUrl.push('mp4');
        changedUrl = changedUrl.join('.');
        source.src = changedUrl;
        source.type = 'video/mp4';
        video.autoplay = 'autoplay';
        video.loop = 'loop';
        video.style.width = '400px';
        video.style.height = '500px';
        video.preload = 'auto';
        video.appendChild(source);
        header.appendChild(title);

        item.className = 'boxDisplay gifs';
        item.appendChild(header);
        item.appendChild(lineBreak);
        item.appendChild(video);
        item.appendChild(lineBreak);
        item.appendChild(author);
        return item;
      });

      items.forEach(view.appendChild.bind(view));

      return readyFunc(view);
    }
  }

  window.App.states = {
    CommandingGeneral,
    Random
  };

}(window));