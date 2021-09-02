import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

function doItLater(cb, time) {
  return new Promise((resolve) => setTimeout(() => resolve(cb()), time));
}

class Data {
  @tracked content = {
    items: [1, 2, 3],
  };
}

export default class ApplicationController extends Controller {
  @tracked data = new Data();

  update = () => {
    doItLater(() => ({}), 1000).then((newContent) => {
      this.data.content = newContent;
    });
  };
}
