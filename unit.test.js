const axios = require('axios');
const mockResult = require('./testResult.json');

// * Global mock values
const mockResponse = [
  "https://www.youtube.com/watch?v=W4OTAOhPOLk",
  "https://www.youtube.com/watch?v=B6JYp-cKvhM",
  "https://www.youtube.com/watch?v=mNlS30GtSC0",
  "https://www.youtube.com/watch?v=wo1kO8m2Nik",
  "https://www.youtube.com/watch?v=GFty3DRKEqM",
  "https://www.youtube.com/watch?v=WR2c7LEtOCE",
  "https://www.youtube.com/watch?v=EFYEni2gsK0"
];
const link = 'https://content.viaplay.se/pc-se/film/wrath-of-man-2021';
jest.mock('axios');
describe("Test request adapter and port", () => {
  test("Adapter should receive a URL and return the array of link(s)", async () => {

    axios.mockResolvedValueOnce(link);
    // ? Mock the returned value
    const handleViaplayRequestAdapter = jest.fn().mockReturnValue(mockResponse).mockReturnValueOnce(mockResponse);

    await handleViaplayRequestAdapter(link);
    expect(handleViaplayRequestAdapter).toHaveBeenCalledTimes(1);
    expect(handleViaplayRequestAdapter.mock.calls[0][0]).toBe(link);
    expect(handleViaplayRequestAdapter()).toEqual(mockResponse);
  });

  test("Port should be passes the JSON data and return the array of link(s)", async () => {
    const handleViaplayRequestPort = jest.fn().mockReturnValue(mockResponse).mockReturnValueOnce(mockResponse);

    await handleViaplayRequestPort(mockResult);
    expect(handleViaplayRequestPort).toHaveBeenCalledTimes(1);
    expect(handleViaplayRequestPort.mock.calls[0][0]).toBe(mockResult);
    expect(handleViaplayRequestPort()).toEqual(mockResponse);
  });

});