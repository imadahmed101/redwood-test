import { render } from '@redwoodjs/testing/web'

import WebsiteLayout from './WebsiteLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WebsiteLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WebsiteLayout />)
    }).not.toThrow()
  })
})
