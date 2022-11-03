import Parse from 'parse';

Parse.initialize('app');
Parse.serverURL = 'http://localhost:1337/parse';

export const parseData = async () => {
  const GameScore = Parse.Object.extend('GameScore');

  const query = new Parse.Query(GameScore);
  query.equalTo('playerName', 'Prakash raaj');
  const results = await query.find();

  console.log('Game Score checking', results);
};
