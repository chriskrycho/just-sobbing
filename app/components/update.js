import Component from '@glimmer/component';
import { get, setProperties } from '@ember/object';

export default class Parent extends Component {
  get content() {
    return get(this.args, 'data.content');
  }

  updateBad = () => {
    doItLater(() => ({ content: {} }), 1).then((newContent) => {
      setProperties(this.args.data, newContent);
    });
  };

  updateGood = () => {
    doItLater(() => ({ content: { items: [4, 5, 6] } }), 1).then(
      (newContent) => {
        setProperties(this.args.data, newContent);
      }
    );
  };
}

// As if we were doing a `fetch` or something.
function doItLater(cb, time) {
  return new Promise((resolve) => setTimeout(() => resolve(cb()), time));
}
