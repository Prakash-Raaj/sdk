import Parse from 'parse';

export const initSdk = (appId: string, serverUrl: string) => {
  Parse.initialize(appId);
  Parse.serverURL = serverUrl;
  return Parse;
};

export const getParseData = async () => {
  const GameScore = Parse.Object.extend('GameScore');

  const query = new Parse.Query(GameScore);
  query.equalTo('playerName', 'Prakash raaj');
  const results = await query.find();

  console.log('Game Score checking', results);
};
