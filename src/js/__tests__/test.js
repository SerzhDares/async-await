import GameSavingLoader from '../GameSavingLoader';

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

test('Проверка вывода ошибки', async() => {
  expect.assertions(1);
  try {
    await GameSavingLoader.load()
  } catch(error) {
    // throw new Error('ERROR!');
    expect(error).toEqual('error');
  }
})