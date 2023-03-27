import { renderAllPlayers } from './renderHelpers';

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2301-FTB-MT-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}players`);
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    console.log(error);
  }
};
fetchAllPlayers();

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}players/${playerId}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const addNewPlayer = async (playerObj) => {
  try {
    //Send post request to add player
    await fetch(`${APIURL}/players`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(playerObj),
    });
    //renderallplayers
    const newPlayerList = await fetchAllPlayers();
    renderAllPlayers(newPlayerList);
    //clearforminputs
  } catch (error) {
    console.error;
  }
};

export const removePlayer = async (playerId) => {
  try {
    const playerResponse = await fetch(`${APIURL}players/${playerId}`, {
      method: 'DELETE',
    });
    const result = await playerResponse.json();
    if (result.error) throw result.error;
    return;
  } catch (error) {
    console.error;
  }
};