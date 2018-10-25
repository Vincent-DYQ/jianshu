import React from 'react';
import Loadable from 'react-loadable';

const LoadableWrite = Loadable({
  loader: () => import('./index'),
  loading() {
    return <div>Loading...</div>
  }
});

export default () => <LoadableWrite/>