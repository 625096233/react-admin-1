export default [{
  path: '/403',
  exact: true,
  getComponent: () => System.import('./403')
}, {
  path: '/404',
  exact: true,
  getComponent: () => System.import('./404')
}]
