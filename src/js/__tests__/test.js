import GameSavingLoader from '../GameSavingLoader';
import read from '../reader'


afterEach(() => jest.resetModules());

jest.mock('../reader', () =>
  jest.fn().mockImplementationOnce(() => Promise.reject('Error parsing data'))
);

test('Должен ловить ошибку', async () => {
  try {
    await GameSavingLoader.load();
  } catch (err) {
    expect(err).toBe('Error parsing data');
  }
});

read.mockImplementationOnce(() => jest.requireActual('../reader').default());

test('Проверка работы GameSavingLoader', async() => {
  const result = JSON.stringify({
    "id": 9,
    "created": 1546300800,
    "userInfo": {
      "id": 1,
      "name": "Hitman",
      "level": 10,
      "points": 2000,
    }
  })
  expect(result).toEqual(await GameSavingLoader.load());
})