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

    rendered(callback){
      this.ready = callback;
    }

    render(readyFunc){
      let staffArr = ['staff'];
      let jointArr = ['joint'];
      let armyArr = ['army'];
      let natoArr = ['nato'];
      let alliesArr = ['allies'];
      let supportersArr = ['supporters'];
      let officialsArr = ['officials'];

      const items = this.cg.map(cg => {
        let item = document.createElement('div');
        let title = cg.summary;
        let startTime = cg.start.dateTime.slice(11, -9);
        let endTime = cg.end.dateTime.slice(11, -9);
        startTime = startTime.split(':');
        endTime = endTime.split(':');
        startTime = startTime.join('.');
        endTime = endTime.join('.');
        let timeDiff = Math.abs(endTime - startTime);
        switch(title){
          case 'staff':
            staffArr.push(timeDiff);
            break;
          case 'joint':
            jointArr.push(timeDiff);
            break;
          case 'army':
            armyArr.push(timeDiff);
            break;
          case 'nato':
            natoArr.push(timeDiff);
            break;
          case 'allies':
            alliesArr.push(timeDiff);
            break;
          case 'supporters':
            supportersArr.push(timeDiff);
            break;
          case 'officials':
            officialsArr.push(timeDiff);
            break;
        }

        return item;
      });
      var chart = c3.generate({
          data: {
              columns: [
                  staffArr,
                  jointArr,
                  armyArr,
                  natoArr,
                  alliesArr,
                  supportersArr,
                  officialsArr,
              ],
              type : 'donut',
              onclick: function (d, i) { console.log("onclick", d, i); },
              onmouseover: function (d, i) { console.log("onmouseover", d, i); },
              onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          donut: {
              title: "Commanding General"
          },
          legend: {
            position: 'right'

          }
      });

      chart.id = 'graph';
      return readyFunc(chart.element);
    }
  }
class ChiefOfStaff {
    constructor(){
      this.cos = [];
      this.ready = null;
      App.utils.Get('/data/COS.json', data => {
        const parsedCOSData = JSON.parse(data);
        this.cos = parsedCOSData.items;
        this.render(this.ready);

      });
    }

    rendered(callback){
      this.ready = callback;
    }

    render(readyFunc){
      const view = document.createElement('div');
      view.id = 'container';
      let staffArr = ['staff'];
      let jointArr = ['joint'];
      let armyArr = ['army'];
      let natoArr = ['nato'];
      let alliesArr = ['allies'];
      let supportersArr = ['supporters'];
      let officialsArr = ['officials'];

      const items = this.cos.map(cos => {
        let item = document.createElement('div');
        let title = cos.summary;
        let startTime = cos.start.dateTime.slice(11, -9);
        let endTime = cos.end.dateTime.slice(11, -9);
        startTime = startTime.split(':');
        endTime = endTime.split(':');
        startTime = startTime.join('.');
        endTime = endTime.join('.');
        let timeDiff = Math.abs(endTime - startTime);
        switch(title){
          case 'staff':
            staffArr.push(timeDiff);
            break;
          case 'joint':
            jointArr.push(timeDiff);
            break;
          case 'army':
            armyArr.push(timeDiff);
            break;
          case 'nato':
            natoArr.push(timeDiff);
            break;
          case 'allies':
            alliesArr.push(timeDiff);
            break;
          case 'supporters':
            supportersArr.push(timeDiff);
            break;
          case 'officials':
            officialsArr.push(timeDiff);
            break;
        }

        return item;
      });
      var chart = c3.generate({
          data: {
              columns: [
                  staffArr,
                  jointArr,
                  armyArr,
                  natoArr,
                  alliesArr,
                  supportersArr,
                  officialsArr,
              ],
              type : 'donut',
              onclick: function (d, i) { console.log("onclick", d, i); },
              onmouseover: function (d, i) { console.log("onmouseover", d, i); },
              onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          donut: {
              title: "Chief of Staff"
          },
      });
      return readyFunc(chart.element);
    }
  }
  class DeputyCommandingGeneralArmy {
    constructor(){
      this.dcgar = [];
      this.ready = null;
      App.utils.Get('/data/DCGAR.json', data => {
        const parsedDCGARData = JSON.parse(data);
        this.dcgar = parsedDCGARData.items;
        this.render(this.ready);

      });
    }

    rendered(callback){
      this.ready = callback;
    }

    render(readyFunc){
      const view = document.createElement('div');
      view.id = 'container';
      let staffArr = ['staff'];
      let jointArr = ['joint'];
      let armyArr = ['army'];
      let natoArr = ['nato'];
      let alliesArr = ['allies'];
      let supportersArr = ['supporters'];
      let officialsArr = ['officials'];

      const items = this.dcgar.map(dcgar => {
        let item = document.createElement('div');
        let title = dcgar.summary;
        let startTime = dcgar.start.dateTime.slice(11, -9);
        let endTime = dcgar.end.dateTime.slice(11, -9);
        startTime = startTime.split(':');
        endTime = endTime.split(':');
        startTime = startTime.join('.');
        endTime = endTime.join('.');
        let timeDiff = Math.abs(endTime - startTime);
        switch(title){
          case 'staff':
            staffArr.push(timeDiff);
            break;
          case 'joint':
            jointArr.push(timeDiff);
            break;
          case 'army':
            armyArr.push(timeDiff);
            break;
          case 'nato':
            natoArr.push(timeDiff);
            break;
          case 'allies':
            alliesArr.push(timeDiff);
            break;
          case 'supporters':
            supportersArr.push(timeDiff);
            break;
          case 'officials':
            officialsArr.push(timeDiff);
            break;
        }

        return item;
      });
      var chart = c3.generate({
          data: {
              columns: [
                  staffArr,
                  jointArr,
                  armyArr,
                  natoArr,
                  alliesArr,
                  supportersArr,
                  officialsArr,
              ],
              type : 'donut',
              onclick: function (d, i) { console.log("onclick", d, i); },
              onmouseover: function (d, i) { console.log("onmouseover", d, i); },
              onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          donut: {
              title: "DCG - Army Reserve"
          }
      });

      return readyFunc(chart.element);
    }
  }
  class DeputyCommandingGeneralGuard {
    constructor(){
      this.dcgng = [];
      this.ready = null;
      App.utils.Get('/data/DCGNG.json', data => {
        const parsedDCGNGData = JSON.parse(data);
        this.dcgng = parsedDCGNGData.items;
        this.render(this.ready);

      });
    }

    rendered(callback){
      this.ready = callback;
    }

    render(readyFunc){
      const view = document.createElement('div');
      view.id = 'container';
      let staffArr = ['staff'];
      let jointArr = ['joint'];
      let armyArr = ['army'];
      let natoArr = ['nato'];
      let alliesArr = ['allies'];
      let supportersArr = ['supporters'];
      let officialsArr = ['officials'];

      const items = this.dcgng.map(dcgng => {
        let item = document.createElement('div');
        let title = dcgng.summary;
        let startTime = dcgng.start.dateTime.slice(11, -9);
        let endTime = dcgng.end.dateTime.slice(11, -9);
        startTime = startTime.split(':');
        endTime = endTime.split(':');
        startTime = startTime.join('.');
        endTime = endTime.join('.');
        let timeDiff = Math.abs(endTime - startTime);
        switch(title){
          case 'staff':
            staffArr.push(timeDiff);
            break;
          case 'joint':
            jointArr.push(timeDiff);
            break;
          case 'army':
            armyArr.push(timeDiff);
            break;
          case 'nato':
            natoArr.push(timeDiff);
            break;
          case 'allies':
            alliesArr.push(timeDiff);
            break;
          case 'supporters':
            supportersArr.push(timeDiff);
            break;
          case 'officials':
            officialsArr.push(timeDiff);
            break;
        }

        return item;
      });
      var chart = c3.generate({
          data: {
              columns: [
                  staffArr,
                  jointArr,
                  armyArr,
                  natoArr,
                  alliesArr,
                  supportersArr,
                  officialsArr,
              ],
              type : 'donut',
              onclick: function (d, i) { console.log("onclick", d, i); },
              onmouseover: function (d, i) { console.log("onmouseover", d, i); },
              onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          donut: {
              title: "DCG - National Guard"
          }
      });

      return readyFunc(chart.element);
  }
}
  class DeputyCommandingGeneralNational {
    constructor(){
      this.dcgn = [];
      this.ready = null;
      App.utils.Get('/data/DCGN.json', data => {
        const parsedDCGNData = JSON.parse(data);
        this.dcgn = parsedDCGNData.items;
        this.render(this.ready);

      });
    }

    rendered(callback){
      this.ready = callback;
    }

    render(readyFunc){
      const view = document.createElement('div');
      view.id = 'container';
      let staffArr = ['staff'];
      let jointArr = ['joint'];
      let armyArr = ['army'];
      let natoArr = ['nato'];
      let alliesArr = ['allies'];
      let supportersArr = ['supporters'];
      let officialsArr = ['officials'];

      const items = this.dcgn.map(dcgn => {
        let item = document.createElement('div');
        let title = dcgn.summary;
        let startTime = dcgn.start.dateTime.slice(11, -9);
        let endTime = dcgn.end.dateTime.slice(11, -9);
        startTime = startTime.split(':');
        endTime = endTime.split(':');
        startTime = startTime.join('.');
        endTime = endTime.join('.');
        let timeDiff = Math.abs(endTime - startTime);
        switch(title){
          case 'staff':
            staffArr.push(timeDiff);
            break;
          case 'joint':
            jointArr.push(timeDiff);
            break;
          case 'army':
            armyArr.push(timeDiff);
            break;
          case 'nato':
            natoArr.push(timeDiff);
            break;
          case 'allies':
            alliesArr.push(timeDiff);
            break;
          case 'supporters':
            supportersArr.push(timeDiff);
            break;
          case 'officials':
            officialsArr.push(timeDiff);
            break;
        }

        return item;
      });
      var chart = c3.generate({
          data: {
              columns: [
                  staffArr,
                  jointArr,
                  armyArr,
                  natoArr,
                  alliesArr,
                  supportersArr,
                  officialsArr,
              ],
              type : 'donut',
              onclick: function (d, i) { console.log("onclick", d, i); },
              onmouseover: function (d, i) { console.log("onmouseover", d, i); },
              onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          donut: {
              title: "DCG - National"
          }
      });
      return readyFunc(chart.element);
  }
}
class DeputyCommandingGeneralSouth {
    constructor(){
      this.dcgs = [];
      this.ready = null;
      App.utils.Get('/data/DCGS.json', data => {
        const parsedDCGSData = JSON.parse(data);
        this.dcgs = parsedDCGSData.items;
        this.render(this.ready);
      });
    }

    rendered(callback){
      this.ready = callback;
    }

    render(readyFunc){
      const view = document.createElement('div');
      view.id = 'container';
      let staffArr = ['staff'];
      let jointArr = ['joint'];
      let armyArr = ['army'];
      let natoArr = ['nato'];
      let alliesArr = ['allies'];
      let supportersArr = ['supporters'];
      let officialsArr = ['officials'];

      const items = this.dcgs.map(dcgs => {
        let item = document.createElement('div');
        let title = dcgs.summary;
        let startTime = dcgs.start.dateTime.slice(11, -9);
        let endTime = dcgs.end.dateTime.slice(11, -9);
        startTime = startTime.split(':');
        endTime = endTime.split(':');
        startTime = startTime.join('.');
        endTime = endTime.join('.');
        let timeDiff = Math.abs(endTime - startTime);
        switch(title){
          case 'staff':
            staffArr.push(timeDiff);
            break;
          case 'joint':
            jointArr.push(timeDiff);
            break;
          case 'army':
            armyArr.push(timeDiff);
            break;
          case 'nato':
            natoArr.push(timeDiff);
            break;
          case 'allies':
            alliesArr.push(timeDiff);
            break;
          case 'supporters':
            supportersArr.push(timeDiff);
            break;
          case 'officials':
            officialsArr.push(timeDiff);
            break;
        }

        return item;
      });
      var chart = c3.generate({
          data: {
              columns: [
                  staffArr,
                  jointArr,
                  armyArr,
                  natoArr,
                  alliesArr,
                  supportersArr,
                  officialsArr,
              ],
              type : 'donut',
              onclick: function (d, i) { console.log("onclick", d, i); },
              onmouseover: function (d, i) { console.log("onmouseover", d, i); },
              onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          donut: {
              title: "DCG - South"
          }
      });
      return readyFunc(chart.element);
    }
  }
  class G3 {
    constructor(){
      this.g3 = [];
      this.ready = null;
      App.utils.Get('/data/G3.json', data => {
        const parsedG3Data = JSON.parse(data);
        this.g3 = parsedG3Data.items;
        this.render(this.ready);

      });
    }

    rendered(callback){
      this.ready = callback;
    }

    render(readyFunc){
      const view = document.createElement('div');
      view.id = 'container';
      let staffArr = ['staff'];
      let jointArr = ['joint'];
      let armyArr = ['army'];
      let natoArr = ['nato'];
      let alliesArr = ['allies'];
      let supportersArr = ['supporters'];
      let officialsArr = ['officials'];
      const items = this.g3.map(g3 => {
        let item = document.createElement('div');
        let title = g3.summary;
        let startTime = g3.start.dateTime.slice(11, -9);
        let endTime = g3.end.dateTime.slice(11, -9);
        startTime = startTime.split(':');
        endTime = endTime.split(':');
        startTime = startTime.join('.');
        endTime = endTime.join('.');
        let timeDiff = Math.abs(endTime - startTime);
        switch(title){
          case 'staff':
            staffArr.push(timeDiff);
            break;
          case 'joint':
            jointArr.push(timeDiff);
            break;
          case 'army':
            armyArr.push(timeDiff);
            break;
          case 'nato':
            natoArr.push(timeDiff);
            break;
          case 'allies':
            alliesArr.push(timeDiff);
            break;
          case 'supporters':
            supportersArr.push(timeDiff);
            break;
          case 'officials':
            officialsArr.push(timeDiff);
            break;
        }

        return item;
      });
      var chart = c3.generate({
          data: {
              columns: [
                  staffArr,
                  jointArr,
                  armyArr,
                  natoArr,
                  alliesArr,
                  supportersArr,
                  officialsArr,
              ],
              type : 'donut',
              onclick: function (d, i) { console.log("onclick", d, i); },
              onmouseover: function (d, i) { console.log("onmouseover", d, i); },
              onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          donut: {
              title: "G3"
          }
      });
      return readyFunc(chart.element);
  }
}
  window.App.states = {
    CommandingGeneral,
    ChiefOfStaff,
    DeputyCommandingGeneralArmy,
    DeputyCommandingGeneralGuard,
    DeputyCommandingGeneralNational,
    DeputyCommandingGeneralSouth,
    G3

  };

}(window));