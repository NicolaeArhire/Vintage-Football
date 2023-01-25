// Declaring Batch Variables--------------------------------------------------------------------------
let leaguePick = document.querySelector(".container");
let wrapperContainer = document.querySelector(".wrapper");
let england = document.querySelector(".england");
let spain = document.querySelector(".spain");
let italy = document.querySelector(".italy");
let france = document.querySelector(".france");
let leagueAll = ["en", "sp", "it", "fr"];
let leagueSelected = [];

england.onclick = () => {
  leaguePick.style.visibility = "hidden";
  wrapperContainer.style.visibility = "visible";
  leagueSelected = [leagueAll[0]];
  getData();
  firstPairings();
  startGames.focus();
};

spain.onclick = () => {
  leaguePick.style.visibility = "hidden";
  wrapperContainer.style.visibility = "visible";
  leagueSelected = [leagueAll[1]];
  getData();
  firstPairings();
  startGames.focus();
};

italy.onclick = () => {
  leaguePick.style.visibility = "hidden";
  wrapperContainer.style.visibility = "visible";
  leagueSelected = [leagueAll[2]];
  getData();
  firstPairings();
  startGames.focus();
};

france.onclick = () => {
  leaguePick.style.visibility = "hidden";
  wrapperContainer.style.visibility = "visible";
  leagueSelected = [leagueAll[3]];
  getData();
  firstPairings();
  startGames.focus();
};

async function getData() {
  let response = await fetch(`clubs_${leagueSelected[0]}.json`);
  let data = await response.json();

  for (let i = 0; i < standingTeams.length; i++) {
    standingTeams[i].innerHTML = data.clubs[i].name;
  }
}

async function firstPairings() {
  let response = await fetch(`fixtures_${leagueSelected[0]}.json`);
  let data = await response.json();
  let matchday = `Matchday 1`;

  for (let i = 0; i < teamNames.length; i++) {
    let dataFilter = data.filter((match) => match.round === matchday);
    let index = Math.floor(i / 2);
    let team = i % 2 === 0 ? "team1" : "team2";
    teamNames[i].innerHTML = `${dataFilter[index][team]}`;
  }
}

let scheduleCounter = 1;
let gamesPlayedCounter = 0;

async function schedulePairings() {
  let response = await fetch(`fixtures_${leagueSelected[0]}.json`);
  let data = await response.json();

  let matchday = `Matchday ${scheduleCounter}`;

  for (let i = 0; i < teamNames.length; i++) {
    let dataFilter = data.filter((match) => match.round === matchday);
    let index = Math.floor(i / 2);
    let team = i % 2 === 0 ? "team1" : "team2";
    teamNames[i].innerHTML = `${dataFilter[index][team]}`;
  }
  scheduleCounter++;

  // let indexStandings = [];
  // let indexPairings = [];

  // for (let i = 0; i < standingTeams.length; i++) {
  //   for (let j = 0; j < teamNames.length; j++) {
  //     if (standingTeams[i].innerHTML === teamNames[j].innerHTML) {
  //       indexStandings.push(i);
  //       indexPairings.push(j);
  //     }
  //   }
  // }

  let res = await fetch(`clubs_${leagueSelected[0]}.json`);
  let resData = await res.json();

  // Calculate Games played
  gamesPlayedCounter++;
  for (let i = 0; i <= 19; i++) {
    playedTeams[i].innerHTML = gamesPlayedCounter;
  }

  // Calculate goals scored by a team
  if (!window.totalGoalsFor) window.totalGoalsFor = Array(20).fill(0);
  for (let i = 0; i <= 19; i++) {
    let clubName = resData.clubs[i].name;
    let teamIndex = teamNames.findIndex((team) => team.innerHTML === clubName);
    homeResult = fixtureTeams[teamIndex].innerHTML;
    window.totalGoalsFor[i] += parseInt(homeResult);
    goalsFor[i].innerHTML = window.totalGoalsFor[i];
  }

  // Calculate goals against a team
  let resp = await fetch(`fixtures_${leagueSelected[0]}.json`);
  let respData = await resp.json();

  let currentRound = `Matchday ${scheduleCounter - 1}`;

  let matchdayNo = respData.filter((round) => round.round === currentRound);

  for (let i = 0; i < matchdayNo.length; i++) {
    for (let j = 0; j < resData.clubs.length; j++) {
      let currentGoalsAgainst = parseInt(goalsAgainst[j].innerHTML);
      if (matchdayNo[i].team1 === resData.clubs[j].name) {
        let teamIndex = teamNames.findIndex(
          (team) => team.innerHTML === matchdayNo[i].team2
        );
        homeResult = fixtureTeams[teamIndex].innerHTML;
        goalsAgainst[j].innerHTML = currentGoalsAgainst + parseInt(homeResult);
      } else if (matchdayNo[i].team2 === resData.clubs[j].name) {
        let teamIndex = teamNames.findIndex(
          (team) => team.innerHTML === matchdayNo[i].team1
        );
        guestResult = fixtureTeams[teamIndex].innerHTML;
        goalsAgainst[j].innerHTML = currentGoalsAgainst + parseInt(guestResult);
      }
    }
  }
}

let fixtureTeam1 = document.querySelector(".game1_home_score");
let fixtureTeam2 = document.querySelector(".game1_guest_score");
let fixtureTeam3 = document.querySelector(".game2_home_score");
let fixtureTeam4 = document.querySelector(".game2_guest_score");
let fixtureTeam5 = document.querySelector(".game3_home_score");
let fixtureTeam6 = document.querySelector(".game3_guest_score");
let fixtureTeam7 = document.querySelector(".game4_home_score");
let fixtureTeam8 = document.querySelector(".game4_guest_score");
let fixtureTeam9 = document.querySelector(".game5_home_score");
let fixtureTeam10 = document.querySelector(".game5_guest_score");
let fixtureTeam11 = document.querySelector(".game6_home_score");
let fixtureTeam12 = document.querySelector(".game6_guest_score");
let fixtureTeam13 = document.querySelector(".game7_home_score");
let fixtureTeam14 = document.querySelector(".game7_guest_score");
let fixtureTeam15 = document.querySelector(".game8_home_score");
let fixtureTeam16 = document.querySelector(".game8_guest_score");
let fixtureTeam17 = document.querySelector(".game9_home_score");
let fixtureTeam18 = document.querySelector(".game9_guest_score");
let fixtureTeam19 = document.querySelector(".game10_home_score");
let fixtureTeam20 = document.querySelector(".game10_guest_score");

let fixtureTeams = [
  fixtureTeam1,
  fixtureTeam2,
  fixtureTeam3,
  fixtureTeam4,
  fixtureTeam5,
  fixtureTeam6,
  fixtureTeam7,
  fixtureTeam8,
  fixtureTeam9,
  fixtureTeam10,
  fixtureTeam11,
  fixtureTeam12,
  fixtureTeam13,
  fixtureTeam14,
  fixtureTeam15,
  fixtureTeam16,
  fixtureTeam17,
  fixtureTeam18,
  fixtureTeam19,
  fixtureTeam20,
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

let goalsForTeam1 = document.querySelector(".standings_no1_goalsFor");
let goalsForTeam2 = document.querySelector(".standings_no2_goalsFor");
let goalsForTeam3 = document.querySelector(".standings_no3_goalsFor");
let goalsForTeam4 = document.querySelector(".standings_no4_goalsFor");
let goalsForTeam5 = document.querySelector(".standings_no5_goalsFor");
let goalsForTeam6 = document.querySelector(".standings_no6_goalsFor");
let goalsForTeam7 = document.querySelector(".standings_no7_goalsFor");
let goalsForTeam8 = document.querySelector(".standings_no8_goalsFor");
let goalsForTeam9 = document.querySelector(".standings_no9_goalsFor");
let goalsForTeam10 = document.querySelector(".standings_no10_goalsFor");
let goalsForTeam11 = document.querySelector(".standings_no11_goalsFor");
let goalsForTeam12 = document.querySelector(".standings_no12_goalsFor");
let goalsForTeam13 = document.querySelector(".standings_no13_goalsFor");
let goalsForTeam14 = document.querySelector(".standings_no14_goalsFor");
let goalsForTeam15 = document.querySelector(".standings_no15_goalsFor");
let goalsForTeam16 = document.querySelector(".standings_no16_goalsFor");
let goalsForTeam17 = document.querySelector(".standings_no17_goalsFor");
let goalsForTeam18 = document.querySelector(".standings_no18_goalsFor");
let goalsForTeam19 = document.querySelector(".standings_no19_goalsFor");
let goalsForTeam20 = document.querySelector(".standings_no20_goalsFor");

let goalsFor = [
  goalsForTeam1,
  goalsForTeam2,
  goalsForTeam3,
  goalsForTeam4,
  goalsForTeam5,
  goalsForTeam6,
  goalsForTeam7,
  goalsForTeam8,
  goalsForTeam9,
  goalsForTeam10,
  goalsForTeam11,
  goalsForTeam12,
  goalsForTeam13,
  goalsForTeam14,
  goalsForTeam15,
  goalsForTeam16,
  goalsForTeam17,
  goalsForTeam18,
  goalsForTeam19,
  goalsForTeam20,
];

let goalsAgainstTeam1 = document.querySelector(".standings_no1_goalsAgainst");
let goalsAgainstTeam2 = document.querySelector(".standings_no2_goalsAgainst");
let goalsAgainstTeam3 = document.querySelector(".standings_no3_goalsAgainst");
let goalsAgainstTeam4 = document.querySelector(".standings_no4_goalsAgainst");
let goalsAgainstTeam5 = document.querySelector(".standings_no5_goalsAgainst");
let goalsAgainstTeam6 = document.querySelector(".standings_no6_goalsAgainst");
let goalsAgainstTeam7 = document.querySelector(".standings_no7_goalsAgainst");
let goalsAgainstTeam8 = document.querySelector(".standings_no8_goalsAgainst");
let goalsAgainstTeam9 = document.querySelector(".standings_no9_goalsAgainst");
let goalsAgainstTeam10 = document.querySelector(".standings_no10_goalsAgainst");
let goalsAgainstTeam11 = document.querySelector(".standings_no11_goalsAgainst");
let goalsAgainstTeam12 = document.querySelector(".standings_no12_goalsAgainst");
let goalsAgainstTeam13 = document.querySelector(".standings_no13_goalsAgainst");
let goalsAgainstTeam14 = document.querySelector(".standings_no14_goalsAgainst");
let goalsAgainstTeam15 = document.querySelector(".standings_no15_goalsAgainst");
let goalsAgainstTeam16 = document.querySelector(".standings_no16_goalsAgainst");
let goalsAgainstTeam17 = document.querySelector(".standings_no17_goalsAgainst");
let goalsAgainstTeam18 = document.querySelector(".standings_no18_goalsAgainst");
let goalsAgainstTeam19 = document.querySelector(".standings_no19_goalsAgainst");
let goalsAgainstTeam20 = document.querySelector(".standings_no20_goalsAgainst");

let goalsAgainst = [
  goalsAgainstTeam1,
  goalsAgainstTeam2,
  goalsAgainstTeam3,
  goalsAgainstTeam4,
  goalsAgainstTeam5,
  goalsAgainstTeam6,
  goalsAgainstTeam7,
  goalsAgainstTeam8,
  goalsAgainstTeam9,
  goalsAgainstTeam10,
  goalsAgainstTeam11,
  goalsAgainstTeam12,
  goalsAgainstTeam13,
  goalsAgainstTeam14,
  goalsAgainstTeam15,
  goalsAgainstTeam16,
  goalsAgainstTeam17,
  goalsAgainstTeam18,
  goalsAgainstTeam19,
  goalsAgainstTeam20,
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

let modal = document.querySelector(".winner");
let modalContent = document.querySelector(".modal");
let modalClose = document.querySelector(".modal_close");
let roundNo = document.querySelector(".rounds");
let startGames = document.querySelector(".start_games");
let clearResults = document.querySelector(".clear_results");
let round = 1;
let isRed = true;
let roundCounter = 0;

clearResults.disabled = true;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let f1 = 0;
let f2 = 0;
let f3 = 0;
let f4 = 0;
let f5 = 0;
let f6 = 0;
let f7 = 0;
let f8 = 0;
let f9 = 0;
let f10 = 0;
let f11 = 0;
let f12 = 0;
let f13 = 0;
let f14 = 0;
let f15 = 0;
let f16 = 0;
let f17 = 0;
let f18 = 0;
let f19 = 0;
let f20 = 0;

// Calculating Games, Wins, Draws, Loses, Goals, Points---------------------------------------

function results() {
  f1 += parseInt(fixtureTeam1.innerHTML);
  f2 += parseInt(fixtureTeam2.innerHTML);
  f3 += parseInt(fixtureTeam3.innerHTML);
  f4 += parseInt(fixtureTeam4.innerHTML);
  f5 += parseInt(fixtureTeam5.innerHTML);
  f6 += parseInt(fixtureTeam6.innerHTML);
  f7 += parseInt(fixtureTeam7.innerHTML);
  f8 += parseInt(fixtureTeam8.innerHTML);
  f9 += parseInt(fixtureTeam9.innerHTML);
  f10 += parseInt(fixtureTeam10.innerHTML);
  f11 += parseInt(fixtureTeam11.innerHTML);
  f12 += parseInt(fixtureTeam12.innerHTML);
  f13 += parseInt(fixtureTeam13.innerHTML);
  f14 += parseInt(fixtureTeam14.innerHTML);
  f15 += parseInt(fixtureTeam15.innerHTML);
  f16 += parseInt(fixtureTeam16.innerHTML);
  f17 += parseInt(fixtureTeam17.innerHTML);
  f18 += parseInt(fixtureTeam18.innerHTML);
  f19 += parseInt(fixtureTeam19.innerHTML);
  f20 += parseInt(fixtureTeam20.innerHTML);

  let fixtures = [
    f1,
    f2,
    f3,
    f4,
    f5,
    f6,
    f7,
    f8,
    f9,
    f10,
    f11,
    f12,
    f13,
    f14,
    f15,
    f16,
    f17,
    f18,
    f19,
    f20,
  ];

  // for (let i = 0; i < 20; i += 2) {
  //   if (fixtureTeams[i].innerHTML > fixtureTeams[i + 1].innerHTML) {
  //     pointsTeams[i].innerHTML = parseInt(pointsTeams[i].innerHTML) + 3;
  //     pointsTeams[i + 1].innerHTML = parseInt(pointsTeams[i + 1].innerHTML) + 0;

  //     winsTeams[i].innerHTML = parseInt(winsTeams[i].innerHTML) + 1;
  //     winsTeams[i + 1].innerHTML = parseInt(winsTeams[i + 1].innerHTML) + 0;
  //     drawsTeams[i].innerHTML = parseInt(drawsTeams[i].innerHTML) + 0;
  //     drawsTeams[i + 1].innerHTML = parseInt(drawsTeams[i + 1].innerHTML) + 0;
  //     lostTeams[i].innerHTML = parseInt(lostTeams[i].innerHTML) + 0;
  //     lostTeams[i + 1].innerHTML = parseInt(lostTeams[i + 1].innerHTML) + 1;
  //     goalsFor[i].innerHTML = fixtures[i];
  //     goalsAgainst[i + 1].innerHTML = fixtures[i + 1];
  //   } else if (fixtureTeams[i].innerHTML < fixtureTeams[i + 1].innerHTML) {
  //     pointsTeams[i].innerHTML = parseInt(pointsTeams[i].innerHTML) + 0;
  //     pointsTeams[i + 1].innerHTML = parseInt(pointsTeams[i + 1].innerHTML) + 3;

  //     winsTeams[i].innerHTML = parseInt(winsTeams[i].innerHTML) + 0;
  //     winsTeams[i + 1].innerHTML = parseInt(winsTeams[i + 1].innerHTML) + 1;
  //     drawsTeams[i].innerHTML = parseInt(drawsTeams[i].innerHTML) + 0;
  //     drawsTeams[i + 1].innerHTML = parseInt(drawsTeams[i + 1].innerHTML) + 0;
  //     lostTeams[i].innerHTML = parseInt(lostTeams[i].innerHTML) + 1;
  //     lostTeams[i + 1].innerHTML = parseInt(lostTeams[i + 1].innerHTML) + 0;
  //     goalsFor[i].innerHTML = fixtures[i];
  //     goalsAgainst[i + 1].innerHTML = fixtures[i + 1];
  //   } else {
  //     pointsTeams[i].innerHTML = parseInt(pointsTeams[i].innerHTML) + 1;
  //     pointsTeams[i + 1].innerHTML = parseInt(pointsTeams[i + 1].innerHTML) + 1;

  //     winsTeams[i].innerHTML = parseInt(winsTeams[i].innerHTML) + 0;
  //     winsTeams[i + 1].innerHTML = parseInt(winsTeams[i + 1].innerHTML) + 0;
  //     drawsTeams[i].innerHTML = parseInt(drawsTeams[i].innerHTML) + 1;
  //     drawsTeams[i + 1].innerHTML = parseInt(drawsTeams[i + 1].innerHTML) + 1;
  //     lostTeams[i].innerHTML = parseInt(lostTeams[i].innerHTML) + 0;
  //     lostTeams[i + 1].innerHTML = parseInt(lostTeams[i + 1].innerHTML) + 0;
  //     goalsFor[i].innerHTML = fixtures[i];
  //     goalsAgainst[i + 1].innerHTML = fixtures[i + 1];
  //   }
  // }
}

// Start Playing button------------------------------------------------------
startGames.onclick = function startPlaying() {
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

  fixtureTeam1.innerHTML = getRandomInt(4 - fixtureTeam2.innerHTML);
  fixtureTeam2.innerHTML = getRandomInt(4 - fixtureTeam1.innerHTML);
  fixtureTeam3.innerHTML = getRandomInt(4 - fixtureTeam4.innerHTML) + 1;
  fixtureTeam4.innerHTML = getRandomInt(4 - fixtureTeam3.innerHTML);
  fixtureTeam5.innerHTML = getRandomInt(4 - fixtureTeam6.innerHTML) + 1;
  fixtureTeam6.innerHTML = getRandomInt(4 - fixtureTeam5.innerHTML);
  fixtureTeam7.innerHTML = getRandomInt(4 - fixtureTeam8.innerHTML) + 1;
  fixtureTeam8.innerHTML = getRandomInt(4 - fixtureTeam7.innerHTML);
  fixtureTeam9.innerHTML = getRandomInt(4 - fixtureTeam10.innerHTML) + 1;
  fixtureTeam10.innerHTML = getRandomInt(4 - fixtureTeam9.innerHTML);
  fixtureTeam11.innerHTML = getRandomInt(4 - fixtureTeam12.innerHTML) + 1;
  fixtureTeam12.innerHTML = getRandomInt(4 - fixtureTeam11.innerHTML);
  fixtureTeam13.innerHTML = getRandomInt(4 - fixtureTeam14.innerHTML) + 1;
  fixtureTeam14.innerHTML = getRandomInt(4 - fixtureTeam13.innerHTML);
  fixtureTeam15.innerHTML = getRandomInt(4 - fixtureTeam16.innerHTML) + 1;
  fixtureTeam16.innerHTML = getRandomInt(4 - fixtureTeam15.innerHTML);
  fixtureTeam17.innerHTML = getRandomInt(4 - fixtureTeam18.innerHTML) + 1;
  fixtureTeam18.innerHTML = getRandomInt(4 - fixtureTeam17.innerHTML);
  fixtureTeam19.innerHTML = getRandomInt(4 - fixtureTeam20.innerHTML) + 1;
  fixtureTeam20.innerHTML = getRandomInt(4 - fixtureTeam19.innerHTML);

  schedulePairings();
  results();

  const standingDetails = {
    team1: {
      name: standingNo1.innerHTML,
      games: playedTeam1.innerHTML,
      wins: winsTeam1.innerHTML,
      draws: drawsTeam1.innerHTML,
      lost: lostTeam1.innerHTML,
      goalsFor: goalsForTeam1.innerHTML,
      goalsAgainst: goalsAgainstTeam1.innerHTML,
      points: pointsTeam1.innerHTML,
    },
    team2: {
      name: standingNo2.innerHTML,
      games: playedTeam2.innerHTML,
      wins: winsTeam2.innerHTML,
      draws: drawsTeam2.innerHTML,
      lost: lostTeam2.innerHTML,
      goalsFor: goalsForTeam2.innerHTML,
      goalsAgainst: goalsAgainstTeam2.innerHTML,
      points: pointsTeam2.innerHTML,
    },
    team3: {
      name: standingNo3.innerHTML,
      games: playedTeam3.innerHTML,
      wins: winsTeam3.innerHTML,
      draws: drawsTeam3.innerHTML,
      lost: lostTeam3.innerHTML,
      goalsFor: goalsForTeam3.innerHTML,
      goalsAgainst: goalsAgainstTeam3.innerHTML,
      points: pointsTeam3.innerHTML,
    },
    team4: {
      name: standingNo4.innerHTML,
      games: playedTeam4.innerHTML,
      wins: winsTeam4.innerHTML,
      draws: drawsTeam4.innerHTML,
      lost: lostTeam4.innerHTML,
      goalsFor: goalsForTeam4.innerHTML,
      goalsAgainst: goalsAgainstTeam4.innerHTML,
      points: pointsTeam4.innerHTML,
    },
    team5: {
      name: standingNo5.innerHTML,
      games: playedTeam5.innerHTML,
      wins: winsTeam5.innerHTML,
      draws: drawsTeam5.innerHTML,
      lost: lostTeam5.innerHTML,
      goalsFor: goalsForTeam5.innerHTML,
      goalsAgainst: goalsAgainstTeam5.innerHTML,
      points: pointsTeam5.innerHTML,
    },
    team6: {
      name: standingNo6.innerHTML,
      games: playedTeam6.innerHTML,
      wins: winsTeam6.innerHTML,
      draws: drawsTeam6.innerHTML,
      lost: lostTeam6.innerHTML,
      goalsFor: goalsForTeam6.innerHTML,
      goalsAgainst: goalsAgainstTeam6.innerHTML,
      points: pointsTeam6.innerHTML,
    },
    team7: {
      name: standingNo7.innerHTML,
      games: playedTeam7.innerHTML,
      wins: winsTeam7.innerHTML,
      draws: drawsTeam7.innerHTML,
      lost: lostTeam7.innerHTML,
      goalsFor: goalsForTeam7.innerHTML,
      goalsAgainst: goalsAgainstTeam7.innerHTML,
      points: pointsTeam7.innerHTML,
    },
    team8: {
      name: standingNo8.innerHTML,
      games: playedTeam8.innerHTML,
      wins: winsTeam8.innerHTML,
      draws: drawsTeam8.innerHTML,
      lost: lostTeam8.innerHTML,
      goalsFor: goalsForTeam8.innerHTML,
      goalsAgainst: goalsAgainstTeam8.innerHTML,
      points: pointsTeam8.innerHTML,
    },
    team9: {
      name: standingNo9.innerHTML,
      games: playedTeam9.innerHTML,
      wins: winsTeam9.innerHTML,
      draws: drawsTeam9.innerHTML,
      lost: lostTeam9.innerHTML,
      goalsFor: goalsForTeam9.innerHTML,
      goalsAgainst: goalsAgainstTeam9.innerHTML,
      points: pointsTeam9.innerHTML,
    },
    team10: {
      name: standingNo10.innerHTML,
      games: playedTeam10.innerHTML,
      wins: winsTeam10.innerHTML,
      draws: drawsTeam10.innerHTML,
      lost: lostTeam10.innerHTML,
      goalsFor: goalsForTeam10.innerHTML,
      goalsAgainst: goalsAgainstTeam10.innerHTML,
      points: pointsTeam10.innerHTML,
    },
    team11: {
      name: standingNo11.innerHTML,
      games: playedTeam11.innerHTML,
      wins: winsTeam11.innerHTML,
      draws: drawsTeam11.innerHTML,
      lost: lostTeam11.innerHTML,
      goalsFor: goalsForTeam11.innerHTML,
      goalsAgainst: goalsAgainstTeam11.innerHTML,
      points: pointsTeam11.innerHTML,
    },
    team12: {
      name: standingNo12.innerHTML,
      games: playedTeam12.innerHTML,
      wins: winsTeam12.innerHTML,
      draws: drawsTeam12.innerHTML,
      lost: lostTeam12.innerHTML,
      goalsFor: goalsForTeam12.innerHTML,
      goalsAgainst: goalsAgainstTeam12.innerHTML,
      points: pointsTeam12.innerHTML,
    },
    team13: {
      name: standingNo13.innerHTML,
      games: playedTeam13.innerHTML,
      wins: winsTeam13.innerHTML,
      draws: drawsTeam13.innerHTML,
      lost: lostTeam13.innerHTML,
      goalsFor: goalsForTeam13.innerHTML,
      goalsAgainst: goalsAgainstTeam13.innerHTML,
      points: pointsTeam13.innerHTML,
    },
    team14: {
      name: standingNo14.innerHTML,
      games: playedTeam14.innerHTML,
      wins: winsTeam14.innerHTML,
      draws: drawsTeam14.innerHTML,
      lost: lostTeam14.innerHTML,
      goalsFor: goalsForTeam14.innerHTML,
      goalsAgainst: goalsAgainstTeam14.innerHTML,
      points: pointsTeam14.innerHTML,
    },
    team15: {
      name: standingNo15.innerHTML,
      games: playedTeam15.innerHTML,
      wins: winsTeam15.innerHTML,
      draws: drawsTeam15.innerHTML,
      lost: lostTeam15.innerHTML,
      goalsFor: goalsForTeam15.innerHTML,
      goalsAgainst: goalsAgainstTeam15.innerHTML,
      points: pointsTeam15.innerHTML,
    },
    team16: {
      name: standingNo16.innerHTML,
      games: playedTeam16.innerHTML,
      wins: winsTeam16.innerHTML,
      draws: drawsTeam16.innerHTML,
      lost: lostTeam16.innerHTML,
      goalsFor: goalsForTeam16.innerHTML,
      goalsAgainst: goalsAgainstTeam16.innerHTML,
      points: pointsTeam16.innerHTML,
    },
    team17: {
      name: standingNo17.innerHTML,
      games: playedTeam17.innerHTML,
      wins: winsTeam17.innerHTML,
      draws: drawsTeam17.innerHTML,
      lost: lostTeam17.innerHTML,
      goalsFor: goalsForTeam17.innerHTML,
      goalsAgainst: goalsAgainstTeam17.innerHTML,
      points: pointsTeam17.innerHTML,
    },
    team18: {
      name: standingNo18.innerHTML,
      games: playedTeam18.innerHTML,
      wins: winsTeam18.innerHTML,
      draws: drawsTeam18.innerHTML,
      lost: lostTeam18.innerHTML,
      goalsFor: goalsForTeam18.innerHTML,
      goalsAgainst: goalsAgainstTeam18.innerHTML,
      points: pointsTeam18.innerHTML,
    },
    team19: {
      name: standingNo19.innerHTML,
      games: playedTeam19.innerHTML,
      wins: winsTeam19.innerHTML,
      draws: drawsTeam19.innerHTML,
      lost: lostTeam19.innerHTML,
      goalsFor: goalsForTeam19.innerHTML,
      goalsAgainst: goalsAgainstTeam19.innerHTML,
      points: pointsTeam19.innerHTML,
    },
    team20: {
      name: standingNo20.innerHTML,
      games: playedTeam20.innerHTML,
      wins: winsTeam20.innerHTML,
      draws: drawsTeam20.innerHTML,
      lost: lostTeam20.innerHTML,
      goalsFor: goalsForTeam20.innerHTML,
      goalsAgainst: goalsAgainstTeam20.innerHTML,
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
  //     goalsFor: team.goalsFor,
  //     goalsAgainst: team.goalsAgainst,
  //     points: team.points,
  //   }))
  //   .sort((a, b) => {
  //     if (b.points !== a.points) {
  //       return parseInt(b.points) - parseInt(a.points);
  //     } else {
  //       let diffA = parseInt(a.goalsFor) - parseInt(a.goalsAgainst);
  //       let diffB = parseInt(b.goalsFor) - parseInt(b.goalsAgainst);
  //       if (diffB !== diffA) {
  //         return diffB - diffA;
  //       } else {
  //         return parseInt(b.goalsFor) - parseInt(a.goalsFor);
  //       }
  //     }
  //   });

  // for (let i = 0; i < sortedStanding.length; i++) {
  //   standingTeams[i].innerHTML = sortedStanding[i].team;
  //   playedTeams[i].innerHTML = sortedStanding[i].games;
  //   winsTeams[i].innerHTML = sortedStanding[i].wins;
  //   drawsTeams[i].innerHTML = sortedStanding[i].draws;
  //   lostTeams[i].innerHTML = sortedStanding[i].lost;
  //   goalsFor[i].innerHTML = sortedStanding[i].goalsFor;
  //   goalsAgainst[i].innerHTML = sortedStanding[i].goalsAgainst;
  //   pointsTeams[i].innerHTML = sortedStanding[i].points;
  // }

  if (startGames.disabled == true) {
    modal.style.visibility = "visible";
    wrapperContainer.style.opacity = "0.6";
    modalContent.innerHTML = `Congratulations, <span class="modal_winnerTeam"><br>${standingTeams[0].innerHTML}!</br></span> <br></br>Not so good, <span class="modal_looserTeam"><br>${standingTeams[19].innerHTML}!</br></span>`;
  } else {
    modal.style.visibility = "hidden";
  }
};

startGames.focus();
function startPlayingWithEnter(event) {
  if (event.key === "13") {
    startPlaying();
  }
}

clearResults.addEventListener("click", () => {
  location.reload(true);
});

modalClose.onclick = () => {
  modal.style.visibility = "hidden";
  wrapperContainer.style.opacity = "1";
};

modal.addEventListener("mousedown", startDragging);

let offset = 0;
let isDown = false;

function startDragging(e) {
  isDown = true;
  offset = e.clientY + 200 + -modal.offsetTop;
  document.addEventListener("mousemove", doDrag);
  document.addEventListener("mouseup", stopDragging);
}

function doDrag(e) {
  e.preventDefault();
  if (isDown) {
    modal.style.top = e.clientY - offset + "px";
  }
}

function stopDragging() {
  isDown = false;
  document.removeEventListener("mousemove", doDrag);
  document.removeEventListener("mouseup", stopDragging);
}
