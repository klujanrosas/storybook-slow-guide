import { configure } from '@storybook/react'

function loadStories() {
  require('../stories/index.js')
  // require more stories here ...
}

configure(loadStories, module)