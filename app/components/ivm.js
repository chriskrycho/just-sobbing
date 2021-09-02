import Component from '@glimmer/component';
import { assert } from '@ember/debug';

export default class IVM extends Component {
  get length() {
    assert('items is required', !!this.args.items);
    return this.args.items.length;
  }
}
