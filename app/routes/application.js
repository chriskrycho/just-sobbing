import Route from '@ember/routing/route';

class Data {
  content = {
    items: [1, 2, 3],
  };
}

export default class ApplicationRoute extends Route {
  model() {
    return new Data();
  }
}
