// Declaring Batch Variables--------------------------------------------------------------------------

let homeScore1 = document.querySelector(".game1_home_score");
let homeScore2 = document.querySelector(".game2_home_score");
let homeScore3 = document.querySelector(".game3_home_score");
let homeScore4 = document.querySelector(".game4_home_score");
let homeScore5 = document.querySelector(".game5_home_score");
let homeScore6 = document.querySelector(".game6_home_score");
let homeScore7 = document.querySelector(".game7_home_score");
let homeScore8 = document.querySelector(".game8_home_score");
let homeScore9 = document.querySelector(".game9_home_score");
let homeScore10 = document.querySelector(".game10_home_score");

let homeScore = [
  homeScore1,
  homeScore2,
  homeScore3,
  homeScore4,
  homeScore5,
  homeScore6,
  homeScore7,
  homeScore8,
  homeScore9,
  homeScore10,
];

let guestScore1 = document.querySelector(".game1_guest_score");
let guestScore2 = document.querySelector(".game2_guest_score");
let guestScore3 = document.querySelector(".game3_guest_score");
let guestScore4 = document.querySelector(".game4_guest_score");
let guestScore5 = document.querySelector(".game5_guest_score");
let guestScore6 = document.querySelector(".game6_guest_score");
let guestScore7 = document.querySelector(".game7_guest_score");
let guestScore8 = document.querySelector(".game8_guest_score");
let guestScore9 = document.querySelector(".game9_guest_score");
let guestScore10 = document.querySelector(".game10_guest_score");

let guestScore = [
  guestScore1,
  guestScore2,
  guestScore3,
  guestScore4,
  guestScore5,
  guestScore6,
  guestScore7,
  guestScore8,
  guestScore9,
  guestScore10,
];

let teamNo1 = document.querySelector(".team_no1");
let teamNo2 = document.querySelector(".team_no2");
let teamNo3 = document.querySelector(".team_no3");
let teamNo4 = document.querySelector(".team_no4");
let teamNo5 = document.querySelector(".team_no5");
let teamNo6 = document.querySelector(".team_no6");
let teamNo7 = document.querySelector(".team_no7");
let teamNo8 = document.querySelector(".team_no8");
let teamNo9 = document.querySelector(".team_no9");
let teamNo10 = document.querySelector(".team_no10");
let teamNo11 = document.querySelector(".team_no11");
let teamNo12 = document.querySelector(".team_no12");
let teamNo13 = document.querySelector(".team_no13");
let teamNo14 = document.querySelector(".team_no14");
let teamNo15 = document.querySelector(".team_no15");
let teamNo16 = document.querySelector(".team_no16");
let teamNo17 = document.querySelector(".team_no17");
let teamNo18 = document.querySelector(".team_no18");
let teamNo19 = document.querySelector(".team_no19");
let teamNo20 = document.querySelector(".team_no20");

let teamNames = [
  teamNo1,
  teamNo2,
  teamNo3,
  teamNo4,
  teamNo5,
  teamNo6,
  teamNo7,
  teamNo8,
  teamNo9,
  teamNo10,
  teamNo11,
  teamNo12,
  teamNo13,
  teamNo14,
  teamNo15,
  teamNo16,
  teamNo17,
  teamNo18,
  teamNo19,
  teamNo20,
];

let standingNo1 = document.querySelector(".standings_no1_teams");
let standingNo2 = document.querySelector(".standings_no2_teams");
let standingNo3 = document.querySelector(".standings_no3_teams");
let standingNo4 = document.querySelector(".standings_no4_teams");
let standingNo5 = document.querySelector(".standings_no5_teams");
let standingNo6 = document.querySelector(".standings_no6_teams");
let standingNo7 = document.querySelector(".standings_no7_teams");
let standingNo8 = document.querySelector(".standings_no8_teams");
let standingNo9 = document.querySelector(".standings_no9_teams");
let standingNo10 = document.querySelector(".standings_no10_teams");
let standingNo11 = document.querySelector(".standings_no11_teams");
let standingNo12 = document.querySelector(".standings_no12_teams");
let standingNo13 = document.querySelector(".standings_no13_teams");
let standingNo14 = document.querySelector(".standings_no14_teams");
let standingNo15 = document.querySelector(".standings_no15_teams");
let standingNo16 = document.querySelector(".standings_no16_teams");
let standingNo17 = document.querySelector(".standings_no17_teams");
let standingNo18 = document.querySelector(".standings_no18_teams");
let standingNo19 = document.querySelector(".standings_no19_teams");
let standingNo20 = document.querySelector(".standings_no20_teams");

let standingTeams = [
  standingNo1,
  standingNo2,
  standingNo3,
  standingNo4,
  standingNo5,
  standingNo6,
  standingNo7,
  standingNo8,
  standingNo9,
  standingNo10,
  standingNo11,
  standingNo12,
  standingNo13,
  standingNo14,
  standingNo15,
  standingNo16,
  standingNo17,
  standingNo18,
  standingNo19,
  standingNo20,
];

let playedTeam1 = document.querySelector(".standings_no1_played");
let playedTeam2 = document.querySelector(".standings_no2_played");
let playedTeam3 = document.querySelector(".standings_no3_played");
let playedTeam4 = document.querySelector(".standings_no4_played");
let playedTeam5 = document.querySelector(".standings_no5_played");
let playedTeam6 = document.querySelector(".standings_no6_played");
let playedTeam7 = document.querySelector(".standings_no7_played");
let playedTeam8 = document.querySelector(".standings_no8_played");
let playedTeam9 = document.querySelector(".standings_no9_played");
let playedTeam10 = document.querySelector(".standings_no10_played");
let playedTeam11 = document.querySelector(".standings_no11_played");
let playedTeam12 = document.querySelector(".standings_no12_played");
let playedTeam13 = document.querySelector(".standings_no13_played");
let playedTeam14 = document.querySelector(".standings_no14_played");
let playedTeam15 = document.querySelector(".standings_no15_played");
let playedTeam16 = document.querySelector(".standings_no16_played");
let playedTeam17 = document.querySelector(".standings_no17_played");
let playedTeam18 = document.querySelector(".standings_no18_played");
let playedTeam19 = document.querySelector(".standings_no19_played");
let playedTeam20 = document.querySelector(".standings_no20_played");

let playedTeams = [
  playedTeam1,
  playedTeam2,
  playedTeam3,
  playedTeam4,
  playedTeam5,
  playedTeam6,
  playedTeam7,
  playedTeam8,
  playedTeam9,
  playedTeam10,
  playedTeam11,
  playedTeam12,
  playedTeam13,
  playedTeam14,
  playedTeam15,
  playedTeam16,
  playedTeam17,
  playedTeam18,
  playedTeam19,
  playedTeam20,
];

let winsTeam1 = document.querySelector(".standings_no1_wins");
let winsTeam2 = document.querySelector(".standings_no2_wins");
let winsTeam3 = document.querySelector(".standings_no3_wins");
let winsTeam4 = document.querySelector(".standings_no4_wins");
let winsTeam5 = document.querySelector(".standings_no5_wins");
let winsTeam6 = document.querySelector(".standings_no6_wins");
let winsTeam7 = document.querySelector(".standings_no7_wins");
let winsTeam8 = document.querySelector(".standings_no8_wins");
let winsTeam9 = document.querySelector(".standings_no9_wins");
let winsTeam10 = document.querySelector(".standings_no10_wins");
let winsTeam11 = document.querySelector(".standings_no11_wins");
let winsTeam12 = document.querySelector(".standings_no12_wins");
let winsTeam13 = document.querySelector(".standings_no13_wins");
let winsTeam14 = document.querySelector(".standings_no14_wins");
let winsTeam15 = document.querySelector(".standings_no15_wins");
let winsTeam16 = document.querySelector(".standings_no16_wins");
let winsTeam17 = document.querySelector(".standings_no17_wins");
let winsTeam18 = document.querySelector(".standings_no18_wins");
let winsTeam19 = document.querySelector(".standings_no19_wins");
let winsTeam20 = document.querySelector(".standings_no20_wins");

let winsTeams = [
  winsTeam1,
  winsTeam2,
  winsTeam3,
  winsTeam4,
  winsTeam5,
  winsTeam6,
  winsTeam7,
  winsTeam8,
  winsTeam9,
  winsTeam10,
  winsTeam11,
  winsTeam12,
  winsTeam13,
  winsTeam14,
  winsTeam15,
  winsTeam16,
  winsTeam17,
  winsTeam18,
  winsTeam19,
  winsTeam20,
];

let drawsTeam1 = document.querySelector(".standings_no1_draws");
let drawsTeam2 = document.querySelector(".standings_no2_draws");
let drawsTeam3 = document.querySelector(".standings_no3_draws");
let drawsTeam4 = document.querySelector(".standings_no4_draws");
let drawsTeam5 = document.querySelector(".standings_no5_draws");
let drawsTeam6 = document.querySelector(".standings_no6_draws");
let drawsTeam7 = document.querySelector(".standings_no7_draws");
let drawsTeam8 = document.querySelector(".standings_no8_draws");
let drawsTeam9 = document.querySelector(".standings_no9_draws");
let drawsTeam10 = document.querySelector(".standings_no10_draws");
let drawsTeam11 = document.querySelector(".standings_no11_draws");
let drawsTeam12 = document.querySelector(".standings_no12_draws");
let drawsTeam13 = document.querySelector(".standings_no13_draws");
let drawsTeam14 = document.querySelector(".standings_no14_draws");
let drawsTeam15 = document.querySelector(".standings_no15_draws");
let drawsTeam16 = document.querySelector(".standings_no16_draws");
let drawsTeam17 = document.querySelector(".standings_no17_draws");
let drawsTeam18 = document.querySelector(".standings_no18_draws");
let drawsTeam19 = document.querySelector(".standings_no19_draws");
let drawsTeam20 = document.querySelector(".standings_no20_draws");

let drawsTeams = [
  drawsTeam1,
  drawsTeam2,
  drawsTeam3,
  drawsTeam4,
  drawsTeam5,
  drawsTeam6,
  drawsTeam7,
  drawsTeam8,
  drawsTeam9,
  drawsTeam10,
  drawsTeam11,
  drawsTeam12,
  drawsTeam13,
  drawsTeam14,
  drawsTeam15,
  drawsTeam16,
  drawsTeam17,
  drawsTeam18,
  drawsTeam19,
  drawsTeam20,
];

let lostTeam1 = document.querySelector(".standings_no1_lost");
let lostTeam2 = document.querySelector(".standings_no2_lost");
let lostTeam3 = document.querySelector(".standings_no3_lost");
let lostTeam4 = document.querySelector(".standings_no4_lost");
let lostTeam5 = document.querySelector(".standings_no5_lost");
let lostTeam6 = document.querySelector(".standings_no6_lost");
let lostTeam7 = document.querySelector(".standings_no7_lost");
let lostTeam8 = document.querySelector(".standings_no8_lost");
let lostTeam9 = document.querySelector(".standings_no9_lost");
let lostTeam10 = document.querySelector(".standings_no10_lost");
let lostTeam11 = document.querySelector(".standings_no11_lost");
let lostTeam12 = document.querySelector(".standings_no12_lost");
let lostTeam13 = document.querySelector(".standings_no13_lost");
let lostTeam14 = document.querySelector(".standings_no14_lost");
let lostTeam15 = document.querySelector(".standings_no15_lost");
let lostTeam16 = document.querySelector(".standings_no16_lost");
let lostTeam17 = document.querySelector(".standings_no17_lost");
let lostTeam18 = document.querySelector(".standings_no18_lost");
let lostTeam19 = document.querySelector(".standings_no19_lost");
let lostTeam20 = document.querySelector(".standings_no20_lost");

let lostTeams = [
  lostTeam1,
  lostTeam2,
  lostTeam3,
  lostTeam4,
  lostTeam5,
  lostTeam6,
  lostTeam7,
  lostTeam8,
  lostTeam9,
  lostTeam10,
  lostTeam11,
  lostTeam12,
  lostTeam13,
  lostTeam14,
  lostTeam15,
  lostTeam16,
  lostTeam17,
  lostTeam18,
  lostTeam19,
  lostTeam20,
];

let goalsTeam1 = document.querySelector(".standings_no1_goals");
let goalsTeam2 = document.querySelector(".standings_no2_goals");
let goalsTeam3 = document.querySelector(".standings_no3_goals");
let goalsTeam4 = document.querySelector(".standings_no4_goals");
let goalsTeam5 = document.querySelector(".standings_no5_goals");
let goalsTeam6 = document.querySelector(".standings_no6_goals");
let goalsTeam7 = document.querySelector(".standings_no7_goals");
let goalsTeam8 = document.querySelector(".standings_no8_goals");
let goalsTeam9 = document.querySelector(".standings_no9_goals");
let goalsTeam10 = document.querySelector(".standings_no10_goals");
let goalsTeam11 = document.querySelector(".standings_no11_goals");
let goalsTeam12 = document.querySelector(".standings_no12_goals");
let goalsTeam13 = document.querySelector(".standings_no13_goals");
let goalsTeam14 = document.querySelector(".standings_no14_goals");
let goalsTeam15 = document.querySelector(".standings_no15_goals");
let goalsTeam16 = document.querySelector(".standings_no16_goals");
let goalsTeam17 = document.querySelector(".standings_no17_goals");
let goalsTeam18 = document.querySelector(".standings_no18_goals");
let goalsTeam19 = document.querySelector(".standings_no19_goals");
let goalsTeam20 = document.querySelector(".standings_no20_goals");

let goalsTeams = [
  goalsTeam1,
  goalsTeam2,
  goalsTeam3,
  goalsTeam4,
  goalsTeam5,
  goalsTeam6,
  goalsTeam7,
  goalsTeam8,
  goalsTeam9,
  goalsTeam10,
  goalsTeam11,
  goalsTeam12,
  goalsTeam13,
  goalsTeam14,
  goalsTeam15,
  goalsTeam16,
  goalsTeam17,
  goalsTeam18,
  goalsTeam19,
  goalsTeam20,
];

let pointsTeam1 = document.querySelector(".standings_no1_points");
let pointsTeam2 = document.querySelector(".standings_no2_points");
let pointsTeam3 = document.querySelector(".standings_no3_points");
let pointsTeam4 = document.querySelector(".standings_no4_points");
let pointsTeam5 = document.querySelector(".standings_no5_points");
let pointsTeam6 = document.querySelector(".standings_no6_points");
let pointsTeam7 = document.querySelector(".standings_no7_points");
let pointsTeam8 = document.querySelector(".standings_no8_points");
let pointsTeam9 = document.querySelector(".standings_no9_points");
let pointsTeam10 = document.querySelector(".standings_no10_points");
let pointsTeam11 = document.querySelector(".standings_no11_points");
let pointsTeam12 = document.querySelector(".standings_no12_points");
let pointsTeam13 = document.querySelector(".standings_no13_points");
let pointsTeam14 = document.querySelector(".standings_no14_points");
let pointsTeam15 = document.querySelector(".standings_no15_points");
let pointsTeam16 = document.querySelector(".standings_no16_points");
let pointsTeam17 = document.querySelector(".standings_no17_points");
let pointsTeam18 = document.querySelector(".standings_no18_points");
let pointsTeam19 = document.querySelector(".standings_no19_points");
let pointsTeam20 = document.querySelector(".standings_no20_points");

let pointsTeams = [
  pointsTeam1,
  pointsTeam2,
  pointsTeam3,
  pointsTeam4,
  pointsTeam5,
  pointsTeam6,
  pointsTeam7,
  pointsTeam8,
  pointsTeam9,
  pointsTeam10,
  pointsTeam11,
  pointsTeam12,
  pointsTeam13,
  pointsTeam14,
  pointsTeam15,
  pointsTeam16,
  pointsTeam17,
  pointsTeam18,
  pointsTeam19,
  pointsTeam20,
];

// Declaring Additional Functions ----------------------------------------------------------------

let roundNo = document.querySelector(".rounds");
let startGames = document.querySelector(".start_games");
let clearResults = document.querySelector(".clear_results");
let round = 1;
let isRed = true;
let roundCounter = 0;

clearResults.disabled = true;

for (let i = 0; i < teamNames.length; i++) {
  teamNames[i].style.opacity = "0";
}

let scheduleCounter = 1;

function schedulePairings() {
  fetch(`fixtures_en.json`)
    .then((response) => response.json())
    .then((data) => {
      let matchday = `Matchday ${scheduleCounter}`;

      for (let i = 0; i < teamNames.length; i++) {
        let dataFilter = data.filter((match) => match.round === matchday);
        let index = Math.floor(i / 2);
        let team = i % 2 === 0 ? "team1" : "team2";
        teamNames[i].innerHTML = `${dataFilter[index][team]}`;
      }
      scheduleCounter++;
    });
}

// for (let i = 0; i < teamNames.length; i++) {
//   console.log(teamNames[i].innerHTML);
// }

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Start Playing button------------------------------------------------------

startGames.addEventListener("click", function startPlaying() {
  clearResults.disabled = false;

  roundCounter++;

  if (roundCounter >= 38) {
    startGames.disabled = true;
  }

  for (let i = 0; i < teamNames.length; i++) {
    teamNames[i].style.opacity = "1";
  }

  const gameTimeDay = document.querySelectorAll("#game_time_day");
  const gameTimeHour = document.querySelectorAll("#game_time_hour");
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const monthWithLeadingZero = month < 10 ? `0${month}` : month;
  const dayWithLeadingZero = day < 10 ? `0${day}` : day;
  const hoursWithLeadingZero = hours < 10 ? `0${hours}` : hours;
  const minutesWithLeadingZero = minutes < 10 ? `0${minutes}` : minutes;

  for (const element of gameTimeDay) {
    element.innerHTML = `${dayWithLeadingZero}.${monthWithLeadingZero}.${year}`;
  }

  for (const element of gameTimeHour) {
    element.innerHTML = `${hoursWithLeadingZero}:${minutesWithLeadingZero}`;
  }

  roundNo.style.opacity = "1";
  roundNo.style.color = isRed ? "red" : "blue";
  roundNo.innerHTML = `Round ${round}/38`;

  if (round === 38) {
    round = 1;
  } else {
    round++;
  }
  isRed = !isRed;

  let dummy1 = getRandomInt(7);
  let dummy2 = getRandomInt(7);
  let dummy3 = getRandomInt(7);
  let dummy4 = getRandomInt(7);
  let dummy5 = getRandomInt(7);
  let dummy6 = getRandomInt(7);
  let dummy7 = getRandomInt(7);
  let dummy8 = getRandomInt(7);
  let dummy9 = getRandomInt(7);
  let dummy10 = getRandomInt(7);
  homeScore1.innerHTML = getRandomInt(dummy1);
  guestScore1.innerHTML = getRandomInt(dummy1);
  homeScore2.innerHTML = getRandomInt(dummy2);
  guestScore2.innerHTML = getRandomInt(dummy2);
  homeScore3.innerHTML = getRandomInt(dummy3);
  guestScore3.innerHTML = getRandomInt(dummy3);
  homeScore4.innerHTML = getRandomInt(dummy4);
  guestScore4.innerHTML = getRandomInt(dummy4);
  homeScore5.innerHTML = getRandomInt(dummy5);
  guestScore5.innerHTML = getRandomInt(dummy5);
  homeScore6.innerHTML = getRandomInt(dummy6);
  guestScore6.innerHTML = getRandomInt(dummy6);
  homeScore7.innerHTML = getRandomInt(dummy7);
  guestScore7.innerHTML = getRandomInt(dummy7);
  homeScore8.innerHTML = getRandomInt(dummy8);
  guestScore8.innerHTML = getRandomInt(dummy8);
  homeScore9.innerHTML = getRandomInt(dummy9);
  guestScore9.innerHTML = getRandomInt(dummy9);
  homeScore10.innerHTML = getRandomInt(dummy10);
  guestScore10.innerHTML = getRandomInt(dummy10);

  schedulePairings();
  results();

  const standingDetails = {
    team1: {
      name: standingNo1.innerHTML,
      games: playedTeam1.innerHTML,
      wins: winsTeam1.innerHTML,
      draws: drawsTeam1.innerHTML,
      lost: lostTeam1.innerHTML,
      goals: goalsTeam1.innerHTML,
      points: pointsTeam1.innerHTML,
    },
    team2: {
      name: standingNo2.innerHTML,
      games: playedTeam2.innerHTML,
      wins: winsTeam2.innerHTML,
      draws: drawsTeam2.innerHTML,
      lost: lostTeam2.innerHTML,
      goals: goalsTeam2.innerHTML,
      points: pointsTeam2.innerHTML,
    },
    team3: {
      name: standingNo3.innerHTML,
      games: playedTeam3.innerHTML,
      wins: winsTeam3.innerHTML,
      draws: drawsTeam3.innerHTML,
      lost: lostTeam3.innerHTML,
      goals: goalsTeam3.innerHTML,
      points: pointsTeam3.innerHTML,
    },
    team4: {
      name: standingNo4.innerHTML,
      games: playedTeam4.innerHTML,
      wins: winsTeam4.innerHTML,
      draws: drawsTeam4.innerHTML,
      lost: lostTeam4.innerHTML,
      goals: goalsTeam4.innerHTML,
      points: pointsTeam4.innerHTML,
    },
    team5: {
      name: standingNo5.innerHTML,
      games: playedTeam5.innerHTML,
      wins: winsTeam5.innerHTML,
      draws: drawsTeam5.innerHTML,
      lost: lostTeam5.innerHTML,
      goals: goalsTeam5.innerHTML,
      points: pointsTeam5.innerHTML,
    },
    team6: {
      name: standingNo6.innerHTML,
      games: playedTeam6.innerHTML,
      wins: winsTeam6.innerHTML,
      draws: drawsTeam6.innerHTML,
      lost: lostTeam6.innerHTML,
      goals: goalsTeam6.innerHTML,
      points: pointsTeam6.innerHTML,
    },
    team7: {
      name: standingNo7.innerHTML,
      games: playedTeam7.innerHTML,
      wins: winsTeam7.innerHTML,
      draws: drawsTeam7.innerHTML,
      lost: lostTeam7.innerHTML,
      goals: goalsTeam7.innerHTML,
      points: pointsTeam7.innerHTML,
    },
    team8: {
      name: standingNo8.innerHTML,
      games: playedTeam8.innerHTML,
      wins: winsTeam8.innerHTML,
      draws: drawsTeam8.innerHTML,
      lost: lostTeam8.innerHTML,
      goals: goalsTeam8.innerHTML,
      points: pointsTeam8.innerHTML,
    },
    team9: {
      name: standingNo9.innerHTML,
      games: playedTeam9.innerHTML,
      wins: winsTeam9.innerHTML,
      draws: drawsTeam9.innerHTML,
      lost: lostTeam9.innerHTML,
      goals: goalsTeam9.innerHTML,
      points: pointsTeam9.innerHTML,
    },
    team10: {
      name: standingNo10.innerHTML,
      games: playedTeam10.innerHTML,
      wins: winsTeam10.innerHTML,
      draws: drawsTeam10.innerHTML,
      lost: lostTeam10.innerHTML,
      goals: goalsTeam10.innerHTML,
      points: pointsTeam10.innerHTML,
    },
    team11: {
      name: standingNo11.innerHTML,
      games: playedTeam11.innerHTML,
      wins: winsTeam11.innerHTML,
      draws: drawsTeam11.innerHTML,
      lost: lostTeam11.innerHTML,
      goals: goalsTeam11.innerHTML,
      points: pointsTeam11.innerHTML,
    },
    team12: {
      name: standingNo12.innerHTML,
      games: playedTeam12.innerHTML,
      wins: winsTeam12.innerHTML,
      draws: drawsTeam12.innerHTML,
      lost: lostTeam12.innerHTML,
      goals: goalsTeam12.innerHTML,
      points: pointsTeam12.innerHTML,
    },
    team13: {
      name: standingNo13.innerHTML,
      games: playedTeam13.innerHTML,
      wins: winsTeam13.innerHTML,
      draws: drawsTeam13.innerHTML,
      lost: lostTeam13.innerHTML,
      goals: goalsTeam13.innerHTML,
      points: pointsTeam13.innerHTML,
    },
    team14: {
      name: standingNo14.innerHTML,
      games: playedTeam14.innerHTML,
      wins: winsTeam14.innerHTML,
      draws: drawsTeam14.innerHTML,
      lost: lostTeam14.innerHTML,
      goals: goalsTeam14.innerHTML,
      points: pointsTeam14.innerHTML,
    },
    team15: {
      name: standingNo15.innerHTML,
      games: playedTeam15.innerHTML,
      wins: winsTeam15.innerHTML,
      draws: drawsTeam15.innerHTML,
      lost: lostTeam15.innerHTML,
      goals: goalsTeam15.innerHTML,
      points: pointsTeam15.innerHTML,
    },
    team16: {
      name: standingNo16.innerHTML,
      games: playedTeam16.innerHTML,
      wins: winsTeam16.innerHTML,
      draws: drawsTeam16.innerHTML,
      lost: lostTeam16.innerHTML,
      goals: goalsTeam16.innerHTML,
      points: pointsTeam16.innerHTML,
    },
    team17: {
      name: standingNo17.innerHTML,
      games: playedTeam17.innerHTML,
      wins: winsTeam17.innerHTML,
      draws: drawsTeam17.innerHTML,
      lost: lostTeam17.innerHTML,
      goals: goalsTeam17.innerHTML,
      points: pointsTeam17.innerHTML,
    },
    team18: {
      name: standingNo18.innerHTML,
      games: playedTeam18.innerHTML,
      wins: winsTeam18.innerHTML,
      draws: drawsTeam18.innerHTML,
      lost: lostTeam18.innerHTML,
      goals: goalsTeam18.innerHTML,
      points: pointsTeam18.innerHTML,
    },
    team19: {
      name: standingNo19.innerHTML,
      games: playedTeam19.innerHTML,
      wins: winsTeam19.innerHTML,
      draws: drawsTeam19.innerHTML,
      lost: lostTeam19.innerHTML,
      goals: goalsTeam19.innerHTML,
      points: pointsTeam19.innerHTML,
    },
    team20: {
      name: standingNo20.innerHTML,
      games: playedTeam20.innerHTML,
      wins: winsTeam20.innerHTML,
      draws: drawsTeam20.innerHTML,
      lost: lostTeam20.innerHTML,
      goals: goalsTeam20.innerHTML,
      points: pointsTeam20.innerHTML,
    },
  };

  // let sortedStanding = Object.values(standingDetails)
  //   .map((team) => ({
  //     team: team.name,
  //     games: team.games,
  //     wins: team.wins,
  //     draws: team.draws,
  //     lost: team.lost,
  //     goals: team.goals,
  //     points: team.points,
  //   }))
  //   .sort((a, b) => {
  //     if (b.points !== a.points) {
  //       return parseInt(b.points) - parseInt(a.points);
  //     } else {
  //       let diffA =
  //         parseInt(a.goals.split("-")[0]) - parseInt(a.goals.split("-")[1]);
  //       let diffB =
  //         parseInt(b.goals.split("-")[0]) - parseInt(b.goals.split("-")[1]);
  //       if (diffB !== diffA) {
  //         return diffB - diffA;
  //       } else {
  //         return (
  //           parseInt(b.goals.split("-")[0]) - parseInt(a.goals.split("-")[0])
  //         );
  //       }
  //     }
  //   });

  // for (let i = 0; i < sortedStanding.length; i++) {
  //   standingTeams[i].innerHTML = sortedStanding[i].team;
  //   playedTeams[i].innerHTML = sortedStanding[i].games;
  //   winsTeams[i].innerHTML = sortedStanding[i].wins;
  //   drawsTeams[i].innerHTML = sortedStanding[i].draws;
  //   lostTeams[i].innerHTML = sortedStanding[i].lost;
  //   goalsTeams[i].innerHTML = sortedStanding[i].goals;
  //   pointsTeams[i].innerHTML = sortedStanding[i].points;
  // }
});

startGames.focus();
function startPlayingWithEnter(event) {
  if (event.key === "13") {
    startPlaying();
  }
}

let h1 = 0;
let h2 = 0;
let h3 = 0;
let h4 = 0;
let h5 = 0;
let h6 = 0;
let h7 = 0;
let h8 = 0;
let h9 = 0;
let h10 = 0;

let g1 = 0;
let g2 = 0;
let g3 = 0;
let g4 = 0;
let g5 = 0;
let g6 = 0;
let g7 = 0;
let g8 = 0;
let g9 = 0;
let g10 = 0;

// Calculating Games, Wins, Draws, Loses, Goals, Points---------------------------------------

function results() {
  h1 += parseInt(homeScore1.innerHTML);
  g1 += parseInt(guestScore1.innerHTML);
  h2 += parseInt(homeScore2.innerHTML);
  g2 += parseInt(guestScore2.innerHTML);
  h3 += parseInt(homeScore3.innerHTML);
  g3 += parseInt(guestScore3.innerHTML);
  h4 += parseInt(homeScore4.innerHTML);
  g4 += parseInt(guestScore4.innerHTML);
  h5 += parseInt(homeScore5.innerHTML);
  g5 += parseInt(guestScore5.innerHTML);
  h6 += parseInt(homeScore6.innerHTML);
  g6 += parseInt(guestScore6.innerHTML);
  h7 += parseInt(homeScore7.innerHTML);
  g7 += parseInt(guestScore7.innerHTML);
  h8 += parseInt(homeScore8.innerHTML);
  g8 += parseInt(guestScore8.innerHTML);
  h9 += parseInt(homeScore9.innerHTML);
  g9 += parseInt(guestScore9.innerHTML);
  h10 += parseInt(homeScore10.innerHTML);
  g10 += parseInt(guestScore10.innerHTML);

  goalsTeam3.innerHTML = h2 + "-" + g2;
  goalsTeam4.innerHTML = g2 + "-" + h2;
  goalsTeam5.innerHTML = h3 + "-" + g3;
  goalsTeam6.innerHTML = g3 + "-" + h3;
  goalsTeam7.innerHTML = h4 + "-" + g4;
  goalsTeam8.innerHTML = g4 + "-" + h4;
  goalsTeam9.innerHTML = h5 + "-" + g5;
  goalsTeam10.innerHTML = g5 + "-" + h5;
  goalsTeam11.innerHTML = h6 + "-" + g6;
  goalsTeam12.innerHTML = g6 + "-" + h6;
  goalsTeam13.innerHTML = h7 + "-" + g7;
  goalsTeam14.innerHTML = g7 + "-" + h7;
  goalsTeam15.innerHTML = h8 + "-" + g8;
  goalsTeam16.innerHTML = g8 + "-" + h8;
  goalsTeam17.innerHTML = h9 + "-" + g9;
  goalsTeam18.innerHTML = g9 + "-" + h9;
  goalsTeam19.innerHTML = h10 + "-" + g10;
  goalsTeam20.innerHTML = g10 + "-" + h10;

  if (homeScore1.innerHTML > guestScore1.innerHTML) {
    pointsTeam1.innerHTML = parseInt(pointsTeam1.innerHTML) + 3;
    pointsTeam2.innerHTML = parseInt(pointsTeam2.innerHTML) + 0;
    playedTeam1.innerHTML = parseInt(playedTeam1.innerHTML) + 1;
    playedTeam2.innerHTML = parseInt(playedTeam2.innerHTML) + 1;
    winsTeam1.innerHTML = parseInt(winsTeam1.innerHTML) + 1;
    winsTeam2.innerHTML = parseInt(winsTeam2.innerHTML) + 0;
    drawsTeam1.innerHTML = parseInt(drawsTeam1.innerHTML) + 0;
    drawsTeam2.innerHTML = parseInt(drawsTeam2.innerHTML) + 0;
    lostTeam1.innerHTML = parseInt(lostTeam1.innerHTML) + 0;
    lostTeam2.innerHTML = parseInt(lostTeam2.innerHTML) + 1;
    goalsTeam1.innerHTML = h1 + "-" + g1;
    goalsTeam2.innerHTML = g1 + "-" + h1;
  } else if (homeScore1.innerHTML < guestScore1.innerHTML) {
    pointsTeam1.innerHTML = parseInt(pointsTeam1.innerHTML) + 0;
    pointsTeam2.innerHTML = parseInt(pointsTeam2.innerHTML) + 3;
    playedTeam1.innerHTML = parseInt(playedTeam1.innerHTML) + 1;
    playedTeam2.innerHTML = parseInt(playedTeam2.innerHTML) + 1;
    winsTeam1.innerHTML = parseInt(winsTeam1.innerHTML) + 0;
    winsTeam2.innerHTML = parseInt(winsTeam2.innerHTML) + 1;
    drawsTeam1.innerHTML = parseInt(drawsTeam1.innerHTML) + 0;
    drawsTeam2.innerHTML = parseInt(drawsTeam2.innerHTML) + 0;
    lostTeam1.innerHTML = parseInt(lostTeam1.innerHTML) + 1;
    lostTeam2.innerHTML = parseInt(lostTeam2.innerHTML) + 0;
    goalsTeam1.innerHTML = h1 + "-" + g1;
    goalsTeam2.innerHTML = g1 + "-" + h1;
  } else {
    pointsTeam1.innerHTML = parseInt(pointsTeam1.innerHTML) + 1;
    pointsTeam2.innerHTML = parseInt(pointsTeam2.innerHTML) + 1;
    playedTeam1.innerHTML = parseInt(playedTeam1.innerHTML) + 1;
    playedTeam2.innerHTML = parseInt(playedTeam2.innerHTML) + 1;
    winsTeam1.innerHTML = parseInt(winsTeam1.innerHTML) + 0;
    winsTeam2.innerHTML = parseInt(winsTeam2.innerHTML) + 0;
    drawsTeam1.innerHTML = parseInt(drawsTeam1.innerHTML) + 1;
    drawsTeam2.innerHTML = parseInt(drawsTeam2.innerHTML) + 1;
    lostTeam1.innerHTML = parseInt(lostTeam1.innerHTML) + 0;
    lostTeam2.innerHTML = parseInt(lostTeam2.innerHTML) + 0;
    goalsTeam1.innerHTML = h1 + "-" + g1;
    goalsTeam2.innerHTML = g1 + "-" + h1;
  }

  if (homeScore2.innerHTML > guestScore2.innerHTML) {
    pointsTeam3.innerHTML = parseInt(pointsTeam3.innerHTML) + 3;
    pointsTeam4.innerHTML = parseInt(pointsTeam4.innerHTML) + 0;
    playedTeam3.innerHTML = parseInt(playedTeam3.innerHTML) + 1;
    playedTeam4.innerHTML = parseInt(playedTeam4.innerHTML) + 1;
    winsTeam3.innerHTML = parseInt(winsTeam3.innerHTML) + 1;
    winsTeam4.innerHTML = parseInt(winsTeam4.innerHTML) + 0;
    drawsTeam3.innerHTML = parseInt(drawsTeam3.innerHTML) + 0;
    drawsTeam4.innerHTML = parseInt(drawsTeam4.innerHTML) + 0;
    lostTeam3.innerHTML = parseInt(lostTeam3.innerHTML) + 0;
    lostTeam4.innerHTML = parseInt(lostTeam4.innerHTML) + 1;
  } else if (homeScore2.innerHTML < guestScore2.innerHTML) {
    pointsTeam3.innerHTML = parseInt(pointsTeam3.innerHTML) + 0;
    pointsTeam4.innerHTML = parseInt(pointsTeam4.innerHTML) + 3;
    playedTeam3.innerHTML = parseInt(playedTeam3.innerHTML) + 1;
    playedTeam4.innerHTML = parseInt(playedTeam4.innerHTML) + 1;
    winsTeam3.innerHTML = parseInt(winsTeam3.innerHTML) + 0;
    winsTeam4.innerHTML = parseInt(winsTeam4.innerHTML) + 1;
    drawsTeam3.innerHTML = parseInt(drawsTeam3.innerHTML) + 0;
    drawsTeam4.innerHTML = parseInt(drawsTeam4.innerHTML) + 0;
    lostTeam3.innerHTML = parseInt(lostTeam3.innerHTML) + 1;
    lostTeam4.innerHTML = parseInt(lostTeam4.innerHTML) + 0;
  } else {
    pointsTeam3.innerHTML = parseInt(pointsTeam3.innerHTML) + 1;
    pointsTeam4.innerHTML = parseInt(pointsTeam4.innerHTML) + 1;
    playedTeam3.innerHTML = parseInt(playedTeam3.innerHTML) + 1;
    playedTeam4.innerHTML = parseInt(playedTeam4.innerHTML) + 1;
    winsTeam3.innerHTML = parseInt(winsTeam3.innerHTML) + 0;
    winsTeam4.innerHTML = parseInt(winsTeam4.innerHTML) + 0;
    drawsTeam3.innerHTML = parseInt(drawsTeam3.innerHTML) + 1;
    drawsTeam4.innerHTML = parseInt(drawsTeam4.innerHTML) + 1;
    lostTeam3.innerHTML = parseInt(lostTeam3.innerHTML) + 0;
    lostTeam4.innerHTML = parseInt(lostTeam4.innerHTML) + 0;
  }

  if (homeScore3.innerHTML > guestScore3.innerHTML) {
    pointsTeam5.innerHTML = parseInt(pointsTeam5.innerHTML) + 3;
    pointsTeam6.innerHTML = parseInt(pointsTeam6.innerHTML) + 0;
    playedTeam5.innerHTML = parseInt(playedTeam5.innerHTML) + 1;
    playedTeam6.innerHTML = parseInt(playedTeam6.innerHTML) + 1;
    winsTeam5.innerHTML = parseInt(winsTeam5.innerHTML) + 1;
    winsTeam6.innerHTML = parseInt(winsTeam6.innerHTML) + 0;
    drawsTeam5.innerHTML = parseInt(drawsTeam5.innerHTML) + 0;
    drawsTeam6.innerHTML = parseInt(drawsTeam6.innerHTML) + 0;
    lostTeam5.innerHTML = parseInt(lostTeam5.innerHTML) + 0;
    lostTeam6.innerHTML = parseInt(lostTeam6.innerHTML) + 1;
  } else if (homeScore3.innerHTML < guestScore3.innerHTML) {
    pointsTeam5.innerHTML = parseInt(pointsTeam5.innerHTML) + 0;
    pointsTeam6.innerHTML = parseInt(pointsTeam6.innerHTML) + 3;
    playedTeam5.innerHTML = parseInt(playedTeam5.innerHTML) + 1;
    playedTeam6.innerHTML = parseInt(playedTeam6.innerHTML) + 1;
    winsTeam5.innerHTML = parseInt(winsTeam5.innerHTML) + 0;
    winsTeam6.innerHTML = parseInt(winsTeam6.innerHTML) + 1;
    drawsTeam5.innerHTML = parseInt(drawsTeam5.innerHTML) + 0;
    drawsTeam6.innerHTML = parseInt(drawsTeam6.innerHTML) + 0;
    lostTeam5.innerHTML = parseInt(lostTeam5.innerHTML) + 1;
    lostTeam6.innerHTML = parseInt(lostTeam6.innerHTML) + 0;
  } else {
    pointsTeam5.innerHTML = parseInt(pointsTeam5.innerHTML) + 1;
    pointsTeam6.innerHTML = parseInt(pointsTeam6.innerHTML) + 1;
    playedTeam5.innerHTML = parseInt(playedTeam5.innerHTML) + 1;
    playedTeam6.innerHTML = parseInt(playedTeam6.innerHTML) + 1;
    winsTeam5.innerHTML = parseInt(winsTeam5.innerHTML) + 0;
    winsTeam6.innerHTML = parseInt(winsTeam6.innerHTML) + 0;
    drawsTeam5.innerHTML = parseInt(drawsTeam5.innerHTML) + 1;
    drawsTeam6.innerHTML = parseInt(drawsTeam6.innerHTML) + 1;
    lostTeam5.innerHTML = parseInt(lostTeam5.innerHTML) + 0;
    lostTeam6.innerHTML = parseInt(lostTeam6.innerHTML) + 0;
  }

  if (homeScore4.innerHTML > guestScore4.innerHTML) {
    pointsTeam7.innerHTML = parseInt(pointsTeam7.innerHTML) + 3;
    pointsTeam8.innerHTML = parseInt(pointsTeam8.innerHTML) + 0;
    playedTeam7.innerHTML = parseInt(playedTeam7.innerHTML) + 1;
    playedTeam8.innerHTML = parseInt(playedTeam8.innerHTML) + 1;
    winsTeam7.innerHTML = parseInt(winsTeam7.innerHTML) + 1;
    winsTeam8.innerHTML = parseInt(winsTeam8.innerHTML) + 0;
    drawsTeam7.innerHTML = parseInt(drawsTeam7.innerHTML) + 0;
    drawsTeam8.innerHTML = parseInt(drawsTeam8.innerHTML) + 0;
    lostTeam7.innerHTML = parseInt(lostTeam7.innerHTML) + 0;
    lostTeam8.innerHTML = parseInt(lostTeam8.innerHTML) + 1;
  } else if (homeScore4.innerHTML < guestScore4.innerHTML) {
    pointsTeam7.innerHTML = parseInt(pointsTeam7.innerHTML) + 0;
    pointsTeam8.innerHTML = parseInt(pointsTeam8.innerHTML) + 3;
    playedTeam7.innerHTML = parseInt(playedTeam7.innerHTML) + 1;
    playedTeam8.innerHTML = parseInt(playedTeam8.innerHTML) + 1;
    winsTeam7.innerHTML = parseInt(winsTeam7.innerHTML) + 0;
    winsTeam8.innerHTML = parseInt(winsTeam8.innerHTML) + 1;
    drawsTeam7.innerHTML = parseInt(drawsTeam7.innerHTML) + 0;
    drawsTeam8.innerHTML = parseInt(drawsTeam8.innerHTML) + 0;
    lostTeam7.innerHTML = parseInt(lostTeam7.innerHTML) + 1;
    lostTeam8.innerHTML = parseInt(lostTeam8.innerHTML) + 0;
  } else {
    pointsTeam7.innerHTML = parseInt(pointsTeam7.innerHTML) + 1;
    pointsTeam8.innerHTML = parseInt(pointsTeam8.innerHTML) + 1;
    playedTeam7.innerHTML = parseInt(playedTeam7.innerHTML) + 1;
    playedTeam8.innerHTML = parseInt(playedTeam8.innerHTML) + 1;
    winsTeam7.innerHTML = parseInt(winsTeam7.innerHTML) + 0;
    winsTeam8.innerHTML = parseInt(winsTeam8.innerHTML) + 0;
    drawsTeam7.innerHTML = parseInt(drawsTeam7.innerHTML) + 1;
    drawsTeam8.innerHTML = parseInt(drawsTeam8.innerHTML) + 1;
    lostTeam7.innerHTML = parseInt(lostTeam7.innerHTML) + 0;
    lostTeam8.innerHTML = parseInt(lostTeam8.innerHTML) + 0;
  }

  if (homeScore5.innerHTML > guestScore5.innerHTML) {
    pointsTeam9.innerHTML = parseInt(pointsTeam9.innerHTML) + 3;
    pointsTeam10.innerHTML = parseInt(pointsTeam10.innerHTML) + 0;
    playedTeam9.innerHTML = parseInt(playedTeam9.innerHTML) + 1;
    playedTeam10.innerHTML = parseInt(playedTeam10.innerHTML) + 1;
    winsTeam9.innerHTML = parseInt(winsTeam9.innerHTML) + 1;
    winsTeam10.innerHTML = parseInt(winsTeam10.innerHTML) + 0;
    drawsTeam9.innerHTML = parseInt(drawsTeam9.innerHTML) + 0;
    drawsTeam10.innerHTML = parseInt(drawsTeam10.innerHTML) + 0;
    lostTeam9.innerHTML = parseInt(lostTeam9.innerHTML) + 0;
    lostTeam10.innerHTML = parseInt(lostTeam10.innerHTML) + 1;
  } else if (homeScore5.innerHTML < guestScore5.innerHTML) {
    pointsTeam9.innerHTML = parseInt(pointsTeam9.innerHTML) + 0;
    pointsTeam10.innerHTML = parseInt(pointsTeam10.innerHTML) + 3;
    playedTeam9.innerHTML = parseInt(playedTeam9.innerHTML) + 1;
    playedTeam10.innerHTML = parseInt(playedTeam10.innerHTML) + 1;
    winsTeam9.innerHTML = parseInt(winsTeam9.innerHTML) + 0;
    winsTeam10.innerHTML = parseInt(winsTeam10.innerHTML) + 1;
    drawsTeam9.innerHTML = parseInt(drawsTeam9.innerHTML) + 0;
    drawsTeam10.innerHTML = parseInt(drawsTeam10.innerHTML) + 0;
    lostTeam9.innerHTML = parseInt(lostTeam9.innerHTML) + 1;
    lostTeam10.innerHTML = parseInt(lostTeam10.innerHTML) + 0;
  } else {
    pointsTeam9.innerHTML = parseInt(pointsTeam9.innerHTML) + 1;
    pointsTeam10.innerHTML = parseInt(pointsTeam10.innerHTML) + 1;
    playedTeam9.innerHTML = parseInt(playedTeam9.innerHTML) + 1;
    playedTeam10.innerHTML = parseInt(playedTeam10.innerHTML) + 1;
    winsTeam9.innerHTML = parseInt(winsTeam9.innerHTML) + 0;
    winsTeam10.innerHTML = parseInt(winsTeam10.innerHTML) + 0;
    drawsTeam9.innerHTML = parseInt(drawsTeam9.innerHTML) + 1;
    drawsTeam10.innerHTML = parseInt(drawsTeam10.innerHTML) + 1;
    lostTeam9.innerHTML = parseInt(lostTeam9.innerHTML) + 0;
    lostTeam10.innerHTML = parseInt(lostTeam10.innerHTML) + 0;
  }

  if (homeScore6.innerHTML > guestScore6.innerHTML) {
    pointsTeam11.innerHTML = parseInt(pointsTeam11.innerHTML) + 3;
    pointsTeam12.innerHTML = parseInt(pointsTeam12.innerHTML) + 0;
    playedTeam11.innerHTML = parseInt(playedTeam11.innerHTML) + 1;
    playedTeam12.innerHTML = parseInt(playedTeam12.innerHTML) + 1;
    winsTeam11.innerHTML = parseInt(winsTeam11.innerHTML) + 1;
    winsTeam12.innerHTML = parseInt(winsTeam12.innerHTML) + 0;
    drawsTeam11.innerHTML = parseInt(drawsTeam11.innerHTML) + 0;
    drawsTeam12.innerHTML = parseInt(drawsTeam12.innerHTML) + 0;
    lostTeam11.innerHTML = parseInt(lostTeam11.innerHTML) + 0;
    lostTeam12.innerHTML = parseInt(lostTeam12.innerHTML) + 1;
  } else if (homeScore6.innerHTML < guestScore6.innerHTML) {
    pointsTeam11.innerHTML = parseInt(pointsTeam11.innerHTML) + 0;
    pointsTeam12.innerHTML = parseInt(pointsTeam12.innerHTML) + 3;
    playedTeam11.innerHTML = parseInt(playedTeam11.innerHTML) + 1;
    playedTeam12.innerHTML = parseInt(playedTeam12.innerHTML) + 1;
    winsTeam11.innerHTML = parseInt(winsTeam11.innerHTML) + 0;
    winsTeam12.innerHTML = parseInt(winsTeam12.innerHTML) + 1;
    drawsTeam11.innerHTML = parseInt(drawsTeam11.innerHTML) + 0;
    drawsTeam12.innerHTML = parseInt(drawsTeam12.innerHTML) + 0;
    lostTeam11.innerHTML = parseInt(lostTeam11.innerHTML) + 1;
    lostTeam12.innerHTML = parseInt(lostTeam12.innerHTML) + 0;
  } else {
    pointsTeam11.innerHTML = parseInt(pointsTeam11.innerHTML) + 1;
    pointsTeam12.innerHTML = parseInt(pointsTeam12.innerHTML) + 1;
    playedTeam11.innerHTML = parseInt(playedTeam11.innerHTML) + 1;
    playedTeam12.innerHTML = parseInt(playedTeam12.innerHTML) + 1;
    winsTeam11.innerHTML = parseInt(winsTeam11.innerHTML) + 0;
    winsTeam12.innerHTML = parseInt(winsTeam12.innerHTML) + 0;
    drawsTeam11.innerHTML = parseInt(drawsTeam11.innerHTML) + 1;
    drawsTeam12.innerHTML = parseInt(drawsTeam12.innerHTML) + 1;
    lostTeam11.innerHTML = parseInt(lostTeam11.innerHTML) + 0;
    lostTeam12.innerHTML = parseInt(lostTeam12.innerHTML) + 0;
  }

  if (homeScore7.innerHTML > guestScore7.innerHTML) {
    pointsTeam13.innerHTML = parseInt(pointsTeam13.innerHTML) + 3;
    pointsTeam14.innerHTML = parseInt(pointsTeam14.innerHTML) + 0;
    playedTeam13.innerHTML = parseInt(playedTeam13.innerHTML) + 1;
    playedTeam14.innerHTML = parseInt(playedTeam14.innerHTML) + 1;
    winsTeam13.innerHTML = parseInt(winsTeam13.innerHTML) + 1;
    winsTeam14.innerHTML = parseInt(winsTeam14.innerHTML) + 0;
    drawsTeam13.innerHTML = parseInt(drawsTeam13.innerHTML) + 0;
    drawsTeam14.innerHTML = parseInt(drawsTeam14.innerHTML) + 0;
    lostTeam13.innerHTML = parseInt(lostTeam13.innerHTML) + 0;
    lostTeam14.innerHTML = parseInt(lostTeam14.innerHTML) + 1;
  } else if (homeScore7.innerHTML < guestScore7.innerHTML) {
    pointsTeam13.innerHTML = parseInt(pointsTeam13.innerHTML) + 0;
    pointsTeam14.innerHTML = parseInt(pointsTeam14.innerHTML) + 3;
    playedTeam13.innerHTML = parseInt(playedTeam13.innerHTML) + 1;
    playedTeam14.innerHTML = parseInt(playedTeam14.innerHTML) + 1;
    winsTeam13.innerHTML = parseInt(winsTeam13.innerHTML) + 0;
    winsTeam14.innerHTML = parseInt(winsTeam14.innerHTML) + 1;
    drawsTeam13.innerHTML = parseInt(drawsTeam13.innerHTML) + 0;
    drawsTeam14.innerHTML = parseInt(drawsTeam14.innerHTML) + 0;
    lostTeam13.innerHTML = parseInt(lostTeam13.innerHTML) + 1;
    lostTeam14.innerHTML = parseInt(lostTeam14.innerHTML) + 0;
  } else {
    pointsTeam13.innerHTML = parseInt(pointsTeam13.innerHTML) + 1;
    pointsTeam14.innerHTML = parseInt(pointsTeam14.innerHTML) + 1;
    playedTeam13.innerHTML = parseInt(playedTeam13.innerHTML) + 1;
    playedTeam14.innerHTML = parseInt(playedTeam14.innerHTML) + 1;
    winsTeam13.innerHTML = parseInt(winsTeam13.innerHTML) + 0;
    winsTeam14.innerHTML = parseInt(winsTeam14.innerHTML) + 0;
    drawsTeam13.innerHTML = parseInt(drawsTeam13.innerHTML) + 1;
    drawsTeam14.innerHTML = parseInt(drawsTeam14.innerHTML) + 1;
    lostTeam13.innerHTML = parseInt(lostTeam13.innerHTML) + 0;
    lostTeam14.innerHTML = parseInt(lostTeam14.innerHTML) + 0;
  }

  if (homeScore8.innerHTML > guestScore8.innerHTML) {
    pointsTeam15.innerHTML = parseInt(pointsTeam15.innerHTML) + 3;
    pointsTeam16.innerHTML = parseInt(pointsTeam16.innerHTML) + 0;
    playedTeam15.innerHTML = parseInt(playedTeam15.innerHTML) + 1;
    playedTeam16.innerHTML = parseInt(playedTeam16.innerHTML) + 1;
    winsTeam15.innerHTML = parseInt(winsTeam15.innerHTML) + 1;
    winsTeam16.innerHTML = parseInt(winsTeam16.innerHTML) + 0;
    drawsTeam15.innerHTML = parseInt(drawsTeam15.innerHTML) + 0;
    drawsTeam16.innerHTML = parseInt(drawsTeam16.innerHTML) + 0;
    lostTeam15.innerHTML = parseInt(lostTeam15.innerHTML) + 0;
    lostTeam16.innerHTML = parseInt(lostTeam16.innerHTML) + 1;
  } else if (homeScore8.innerHTML < guestScore8.innerHTML) {
    pointsTeam15.innerHTML = parseInt(pointsTeam15.innerHTML) + 0;
    pointsTeam16.innerHTML = parseInt(pointsTeam16.innerHTML) + 3;
    playedTeam15.innerHTML = parseInt(playedTeam15.innerHTML) + 1;
    playedTeam16.innerHTML = parseInt(playedTeam16.innerHTML) + 1;
    winsTeam15.innerHTML = parseInt(winsTeam15.innerHTML) + 0;
    winsTeam16.innerHTML = parseInt(winsTeam16.innerHTML) + 1;
    drawsTeam15.innerHTML = parseInt(drawsTeam15.innerHTML) + 0;
    drawsTeam16.innerHTML = parseInt(drawsTeam16.innerHTML) + 0;
    lostTeam15.innerHTML = parseInt(lostTeam15.innerHTML) + 1;
    lostTeam16.innerHTML = parseInt(lostTeam16.innerHTML) + 0;
  } else {
    pointsTeam15.innerHTML = parseInt(pointsTeam15.innerHTML) + 1;
    pointsTeam16.innerHTML = parseInt(pointsTeam16.innerHTML) + 1;
    playedTeam15.innerHTML = parseInt(playedTeam15.innerHTML) + 1;
    playedTeam16.innerHTML = parseInt(playedTeam16.innerHTML) + 1;
    winsTeam15.innerHTML = parseInt(winsTeam15.innerHTML) + 0;
    winsTeam16.innerHTML = parseInt(winsTeam16.innerHTML) + 0;
    drawsTeam15.innerHTML = parseInt(drawsTeam15.innerHTML) + 1;
    drawsTeam16.innerHTML = parseInt(drawsTeam16.innerHTML) + 1;
    lostTeam15.innerHTML = parseInt(lostTeam15.innerHTML) + 0;
    lostTeam16.innerHTML = parseInt(lostTeam16.innerHTML) + 0;
  }

  if (homeScore9.innerHTML > guestScore9.innerHTML) {
    pointsTeam17.innerHTML = parseInt(pointsTeam17.innerHTML) + 3;
    pointsTeam18.innerHTML = parseInt(pointsTeam18.innerHTML) + 0;
    playedTeam17.innerHTML = parseInt(playedTeam17.innerHTML) + 1;
    playedTeam18.innerHTML = parseInt(playedTeam18.innerHTML) + 1;
    winsTeam17.innerHTML = parseInt(winsTeam17.innerHTML) + 1;
    winsTeam18.innerHTML = parseInt(winsTeam18.innerHTML) + 0;
    drawsTeam17.innerHTML = parseInt(drawsTeam17.innerHTML) + 0;
    drawsTeam18.innerHTML = parseInt(drawsTeam18.innerHTML) + 0;
    lostTeam17.innerHTML = parseInt(lostTeam17.innerHTML) + 0;
    lostTeam18.innerHTML = parseInt(lostTeam18.innerHTML) + 1;
  } else if (homeScore9.innerHTML < guestScore9.innerHTML) {
    pointsTeam17.innerHTML = parseInt(pointsTeam17.innerHTML) + 0;
    pointsTeam18.innerHTML = parseInt(pointsTeam18.innerHTML) + 3;
    playedTeam17.innerHTML = parseInt(playedTeam17.innerHTML) + 1;
    playedTeam18.innerHTML = parseInt(playedTeam18.innerHTML) + 1;
    winsTeam17.innerHTML = parseInt(winsTeam17.innerHTML) + 0;
    winsTeam18.innerHTML = parseInt(winsTeam18.innerHTML) + 1;
    drawsTeam17.innerHTML = parseInt(drawsTeam17.innerHTML) + 0;
    drawsTeam18.innerHTML = parseInt(drawsTeam18.innerHTML) + 0;
    lostTeam17.innerHTML = parseInt(lostTeam17.innerHTML) + 1;
    lostTeam18.innerHTML = parseInt(lostTeam18.innerHTML) + 0;
  } else {
    pointsTeam17.innerHTML = parseInt(pointsTeam17.innerHTML) + 1;
    pointsTeam18.innerHTML = parseInt(pointsTeam18.innerHTML) + 1;
    playedTeam17.innerHTML = parseInt(playedTeam17.innerHTML) + 1;
    playedTeam18.innerHTML = parseInt(playedTeam18.innerHTML) + 1;
    winsTeam17.innerHTML = parseInt(winsTeam17.innerHTML) + 0;
    winsTeam18.innerHTML = parseInt(winsTeam18.innerHTML) + 0;
    drawsTeam17.innerHTML = parseInt(drawsTeam17.innerHTML) + 1;
    drawsTeam18.innerHTML = parseInt(drawsTeam18.innerHTML) + 1;
    lostTeam17.innerHTML = parseInt(lostTeam17.innerHTML) + 0;
    lostTeam18.innerHTML = parseInt(lostTeam18.innerHTML) + 0;
  }

  if (homeScore10.innerHTML > guestScore10.innerHTML) {
    pointsTeam19.innerHTML = parseInt(pointsTeam19.innerHTML) + 3;
    pointsTeam20.innerHTML = parseInt(pointsTeam20.innerHTML) + 0;
    playedTeam19.innerHTML = parseInt(playedTeam19.innerHTML) + 1;
    playedTeam20.innerHTML = parseInt(playedTeam20.innerHTML) + 1;
    winsTeam19.innerHTML = parseInt(winsTeam19.innerHTML) + 1;
    winsTeam20.innerHTML = parseInt(winsTeam20.innerHTML) + 0;
    drawsTeam19.innerHTML = parseInt(drawsTeam19.innerHTML) + 0;
    drawsTeam20.innerHTML = parseInt(drawsTeam20.innerHTML) + 0;
    lostTeam19.innerHTML = parseInt(lostTeam19.innerHTML) + 0;
    lostTeam20.innerHTML = parseInt(lostTeam20.innerHTML) + 1;
  } else if (homeScore10.innerHTML < guestScore10.innerHTML) {
    pointsTeam19.innerHTML = parseInt(pointsTeam19.innerHTML) + 0;
    pointsTeam20.innerHTML = parseInt(pointsTeam20.innerHTML) + 3;
    playedTeam19.innerHTML = parseInt(playedTeam19.innerHTML) + 1;
    playedTeam20.innerHTML = parseInt(playedTeam20.innerHTML) + 1;
    winsTeam19.innerHTML = parseInt(winsTeam19.innerHTML) + 0;
    winsTeam20.innerHTML = parseInt(winsTeam20.innerHTML) + 1;
    drawsTeam19.innerHTML = parseInt(drawsTeam19.innerHTML) + 0;
    drawsTeam20.innerHTML = parseInt(drawsTeam20.innerHTML) + 0;
    lostTeam19.innerHTML = parseInt(lostTeam19.innerHTML) + 1;
    lostTeam20.innerHTML = parseInt(lostTeam20.innerHTML) + 0;
  } else {
    pointsTeam19.innerHTML = parseInt(pointsTeam19.innerHTML) + 1;
    pointsTeam20.innerHTML = parseInt(pointsTeam20.innerHTML) + 1;
    playedTeam19.innerHTML = parseInt(playedTeam19.innerHTML) + 1;
    playedTeam20.innerHTML = parseInt(playedTeam20.innerHTML) + 1;
    winsTeam19.innerHTML = parseInt(winsTeam19.innerHTML) + 0;
    winsTeam20.innerHTML = parseInt(winsTeam20.innerHTML) + 0;
    drawsTeam19.innerHTML = parseInt(drawsTeam19.innerHTML) + 1;
    drawsTeam20.innerHTML = parseInt(drawsTeam20.innerHTML) + 1;
    lostTeam19.innerHTML = parseInt(lostTeam19.innerHTML) + 0;
    lostTeam20.innerHTML = parseInt(lostTeam20.innerHTML) + 0;
  }
}
clearResults.addEventListener("click", () => {
  location.reload(true);
});
