import { observable } from 'mobx';

const websiteState = observable({
  routes: {},
  loading: false,
});

export default websiteState;