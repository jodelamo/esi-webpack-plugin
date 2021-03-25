import webpack from 'webpack'
import options from './webpack.config'

jest.mock('nodesi', () =>
  jest.fn().mockImplementation(() => ({
    process: jest.fn(() => ''),
  }))
)

test('should pass', (done) => {
  webpack(options, (err, stats) => {
    if (err) {
      throw new Error(err)
    }

    if (stats.hasErrors()) {
      throw new Error(stats.toString())
    }

    const files = stats.toJson().assets.map(({ name }) => name)

    expect(files.indexOf('index.html') !== -1).toBe(true)
    expect(files.indexOf('bundle.js') !== -1).toBe(true)

    done()
  })
})
