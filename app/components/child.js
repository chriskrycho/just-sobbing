import Component from '@glimmer/component';
import { assert } from '@ember/debug';

export default class ChildComponent extends Component {
  get length() {
    assert('whoopsie', !!this.args.data?.items?.length);
    return this.args.data.items.length;
  }
}
