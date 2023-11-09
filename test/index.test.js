import webpack from "webpack"
import options from "./webpack.config"

// TODO: Make this a bit smarter and mock a HTTP request instead
jest.mock("nodesi", () =>
  jest.fn().mockImplementation(() => ({
    process: jest.fn(() => "mock"),
  })),
)

test("should pass", (done) => {
  webpack(options, (err, stats) => {
    if (err) {
      throw new Error(err)
    }

    if (stats.hasErrors()) {
      throw new Error(stats.toString())
    }

    const files = stats.toJson().assets.map(({ name }) => name)

    expect(files.includes("index.html")).toBe(true)
    expect(files.includes("bundle.js")).toBe(true)

    done()
  })
})
