let homeScore1 = document.querySelector(".game1_home_score");
let guestScore1 = document.querySelector(".game1_guest_score");
let homeScore2 = document.querySelector(".game2_home_score");
let guestScore2 = document.querySelector(".game2_guest_score");
let homeScore3 = document.querySelector(".game3_home_score");
let guestScore3 = document.querySelector(".game3_guest_score");
let homeScore4 = document.querySelector(".game4_home_score");
let guestScore4 = document.querySelector(".game4_guest_score");
let homeScore5 = document.querySelector(".game5_home_score");
let guestScore5 = document.querySelector(".game5_guest_score");
let homeScore6 = document.querySelector(".game6_home_score");
let guestScore6 = document.querySelector(".game6_guest_score");
let homeScore7 = document.querySelector(".game7_home_score");
let guestScore7 = document.querySelector(".game7_guest_score");
let homeScore8 = document.querySelector(".game8_home_score");
let guestScore8 = document.querySelector(".game8_guest_score");
let homeScore9 = document.querySelector(".game9_home_score");
let guestScore9 = document.querySelector(".game9_guest_score");
let homeScore10 = document.querySelector(".game10_home_score");
let guestScore10 = document.querySelector(".game10_guest_score");

let startGames = document.querySelector(".start_games");
let clearResults = document.querySelector(".clear_results");

let standingNo1 = document.querySelector(".standings_no1_teams"); //homeScore1
let standingNo2 = document.querySelector(".standings_no2_teams"); //guestScore1
let standingNo3 = document.querySelector(".standings_no3_teams"); //homeScore2
let standingNo4 = document.querySelector(".standings_no4_teams"); //guestScore2
let standingNo5 = document.querySelector(".standings_no5_teams"); //homeScore3
let standingNo6 = document.querySelector(".standings_no6_teams"); //guestScore3
let standingNo7 = document.querySelector(".standings_no7_teams"); //homeScore4
let standingNo8 = document.querySelector(".standings_no8_teams"); //guestScore4
let standingNo9 = document.querySelector(".standings_no9_teams"); //homeScore5
let standingNo10 = document.querySelector(".standings_no10_teams"); //guestScore5
let standingNo11 = document.querySelector(".standings_no11_teams"); //homeScore6
let standingNo12 = document.querySelector(".standings_no12_teams"); //guestScore6
let standingNo13 = document.querySelector(".standings_no13_teams"); //homeScore7
let standingNo14 = document.querySelector(".standings_no14_teams"); //guestScore7
let standingNo15 = document.querySelector(".standings_no15_teams"); //homeScore8
let standingNo16 = document.querySelector(".standings_no16_teams"); //guestScore8
let standingNo17 = document.querySelector(".standings_no17_teams"); //homeScore9
let standingNo18 = document.querySelector(".standings_no18_teams"); //guestScore9
let standingNo19 = document.querySelector(".standings_no19_teams"); //homeScore10
let standingNo20 = document.querySelector(".standings_no20_teams"); //guestScore10

let playedTeam1 = document.querySelector(".standings_no1_played"); //homeScore1
let playedTeam2 = document.querySelector(".standings_no2_played"); //guestScore1
let playedTeam3 = document.querySelector(".standings_no3_played"); //homeScore2
let playedTeam4 = document.querySelector(".standings_no4_played"); //guestScore2
let playedTeam5 = document.querySelector(".standings_no5_played"); //homeScore3
let playedTeam6 = document.querySelector(".standings_no6_played"); //guestScore3
let playedTeam7 = document.querySelector(".standings_no7_played"); //homeScore4
let playedTeam8 = document.querySelector(".standings_no8_played"); //guestScore4
let playedTeam9 = document.querySelector(".standings_no9_played"); //homeScore5
let playedTeam10 = document.querySelector(".standings_no10_played"); //guestScore5
let playedTeam11 = document.querySelector(".standings_no11_played"); //homeScore6
let playedTeam12 = document.querySelector(".standings_no12_played"); //guestScore6
let playedTeam13 = document.querySelector(".standings_no13_played"); //homeScore7
let playedTeam14 = document.querySelector(".standings_no14_played"); //guestScore7
let playedTeam15 = document.querySelector(".standings_no15_played"); //homeScore8
let playedTeam16 = document.querySelector(".standings_no16_played"); //guestScore8
let playedTeam17 = document.querySelector(".standings_no17_played"); //homeScore9
let playedTeam18 = document.querySelector(".standings_no18_played"); //guestScore9
let playedTeam19 = document.querySelector(".standings_no19_played"); //homeScore10
let playedTeam20 = document.querySelector(".standings_no20_played"); //guestScore10

let winsTeam1 = document.querySelector(".standings_no1_wins"); //homeScore1
let winsTeam2 = document.querySelector(".standings_no2_wins"); //guestScore1
let winsTeam3 = document.querySelector(".standings_no3_wins"); //homeScore2
let winsTeam4 = document.querySelector(".standings_no4_wins"); //guestScore2
let winsTeam5 = document.querySelector(".standings_no5_wins"); //homeScore3
let winsTeam6 = document.querySelector(".standings_no6_wins"); //guestScore3
let winsTeam7 = document.querySelector(".standings_no7_wins"); //homeScore4
let winsTeam8 = document.querySelector(".standings_no8_wins"); //guestScore4
let winsTeam9 = document.querySelector(".standings_no9_wins"); //homeScore5
let winsTeam10 = document.querySelector(".standings_no10_wins"); //guestScore5
let winsTeam11 = document.querySelector(".standings_no11_wins"); //homeScore6
let winsTeam12 = document.querySelector(".standings_no12_wins"); //guestScore6
let winsTeam13 = document.querySelector(".standings_no13_wins"); //homeScore7
let winsTeam14 = document.querySelector(".standings_no14_wins"); //guestScore7
let winsTeam15 = document.querySelector(".standings_no15_wins"); //homeScore8
let winsTeam16 = document.querySelector(".standings_no16_wins"); //guestScore8
let winsTeam17 = document.querySelector(".standings_no17_wins"); //homeScore9
let winsTeam18 = document.querySelector(".standings_no18_wins"); //guestScore9
let winsTeam19 = document.querySelector(".standings_no19_wins"); //homeScore10
let winsTeam20 = document.querySelector(".standings_no20_wins"); //guestScore10

let drawsTeam1 = document.querySelector(".standings_no1_draws"); //homeScore1
let drawsTeam2 = document.querySelector(".standings_no2_draws"); //guestScore1
let drawsTeam3 = document.querySelector(".standings_no3_draws"); //homeScore2
let drawsTeam4 = document.querySelector(".standings_no4_draws"); //guestScore2
let drawsTeam5 = document.querySelector(".standings_no5_draws"); //homeScore3
let drawsTeam6 = document.querySelector(".standings_no6_draws"); //guestScore3
let drawsTeam7 = document.querySelector(".standings_no7_draws"); //homeScore4
let drawsTeam8 = document.querySelector(".standings_no8_draws"); //guestScore4
let drawsTeam9 = document.querySelector(".standings_no9_draws"); //homeScore5
let drawsTeam10 = document.querySelector(".standings_no10_draws"); //guestScore5
let drawsTeam11 = document.querySelector(".standings_no11_draws"); //homeScore6
let drawsTeam12 = document.querySelector(".standings_no12_draws"); //guestScore6
let drawsTeam13 = document.querySelector(".standings_no13_draws"); //homeScore7
let drawsTeam14 = document.querySelector(".standings_no14_draws"); //guestScore7
let drawsTeam15 = document.querySelector(".standings_no15_draws"); //homeScore8
let drawsTeam16 = document.querySelector(".standings_no16_draws"); //guestScore8
let drawsTeam17 = document.querySelector(".standings_no17_draws"); //homeScore9
let drawsTeam18 = document.querySelector(".standings_no18_draws"); //guestScore9
let drawsTeam19 = document.querySelector(".standings_no19_draws"); //homeScore10
let drawsTeam20 = document.querySelector(".standings_no20_draws"); //guestScore10

let lostTeam1 = document.querySelector(".standings_no1_lost"); //homeScore1
let lostTeam2 = document.querySelector(".standings_no2_lost"); //guestScore1
let lostTeam3 = document.querySelector(".standings_no3_lost"); //homeScore2
let lostTeam4 = document.querySelector(".standings_no4_lost"); //guestScore2
let lostTeam5 = document.querySelector(".standings_no5_lost"); //homeScore3
let lostTeam6 = document.querySelector(".standings_no6_lost"); //guestScore3
let lostTeam7 = document.querySelector(".standings_no7_lost"); //homeScore4
let lostTeam8 = document.querySelector(".standings_no8_lost"); //guestScore4
let lostTeam9 = document.querySelector(".standings_no9_lost"); //homeScore5
let lostTeam10 = document.querySelector(".standings_no10_lost"); //guestScore5
let lostTeam11 = document.querySelector(".standings_no11_lost"); //homeScore6
let lostTeam12 = document.querySelector(".standings_no12_lost"); //guestScore6
let lostTeam13 = document.querySelector(".standings_no13_lost"); //homeScore7
let lostTeam14 = document.querySelector(".standings_no14_lost"); //guestScore7
let lostTeam15 = document.querySelector(".standings_no15_lost"); //homeScore8
let lostTeam16 = document.querySelector(".standings_no16_lost"); //guestScore8
let lostTeam17 = document.querySelector(".standings_no17_lost"); //homeScore9
let lostTeam18 = document.querySelector(".standings_no18_lost"); //guestScore9
let lostTeam19 = document.querySelector(".standings_no19_lost"); //homeScore10
let lostTeam20 = document.querySelector(".standings_no20_lost"); //guestScore10

let goalsTeam1 = document.querySelector(".standings_no1_goals"); //homeScore1
let goalsTeam2 = document.querySelector(".standings_no2_goals"); //guestScore1
let goalsTeam3 = document.querySelector(".standings_no3_goals"); //homeScore2
let goalsTeam4 = document.querySelector(".standings_no4_goals"); //guestScore2
let goalsTeam5 = document.querySelector(".standings_no5_goals"); //homeScore3
let goalsTeam6 = document.querySelector(".standings_no6_goals"); //guestScore3
let goalsTeam7 = document.querySelector(".standings_no7_goals"); //homeScore4
let goalsTeam8 = document.querySelector(".standings_no8_goals"); //guestScore4
let goalsTeam9 = document.querySelector(".standings_no9_goals"); //homeScore5
let goalsTeam10 = document.querySelector(".standings_no10_goals"); //guestScore5
let goalsTeam11 = document.querySelector(".standings_no11_goals"); //homeScore6
let goalsTeam12 = document.querySelector(".standings_no12_goals"); //guestScore6
let goalsTeam13 = document.querySelector(".standings_no13_goals"); //homeScore7
let goalsTeam14 = document.querySelector(".standings_no14_goals"); //guestScore7
let goalsTeam15 = document.querySelector(".standings_no15_goals"); //homeScore8
let goalsTeam16 = document.querySelector(".standings_no16_goals"); //guestScore8
let goalsTeam17 = document.querySelector(".standings_no17_goals"); //homeScore9
let goalsTeam18 = document.querySelector(".standings_no18_goals"); //guestScore9
let goalsTeam19 = document.querySelector(".standings_no19_goals"); //homeScore10
let goalsTeam20 = document.querySelector(".standings_no20_goals"); //guestScore10

let pointsTeam1 = document.querySelector(".standings_no1_points"); //homeScore1
let pointsTeam2 = document.querySelector(".standings_no2_points"); //guestScore1
let pointsTeam3 = document.querySelector(".standings_no3_points"); //homeScore2
let pointsTeam4 = document.querySelector(".standings_no4_points"); //guestScore2
let pointsTeam5 = document.querySelector(".standings_no5_points"); //homeScore3
let pointsTeam6 = document.querySelector(".standings_no6_points"); //guestScore3
let pointsTeam7 = document.querySelector(".standings_no7_points"); //homeScore4
let pointsTeam8 = document.querySelector(".standings_no8_points"); //guestScore4
let pointsTeam9 = document.querySelector(".standings_no9_points"); //homeScore5
let pointsTeam10 = document.querySelector(".standings_no10_points"); //guestScore5
let pointsTeam11 = document.querySelector(".standings_no11_points"); //homeScore6
let pointsTeam12 = document.querySelector(".standings_no12_points"); //guestScore6
let pointsTeam13 = document.querySelector(".standings_no13_points"); //homeScore7
let pointsTeam14 = document.querySelector(".standings_no14_points"); //guestScore7
let pointsTeam15 = document.querySelector(".standings_no15_points"); //homeScore8
let pointsTeam16 = document.querySelector(".standings_no16_points"); //guestScore8
let pointsTeam17 = document.querySelector(".standings_no17_points"); //homeScore9
let pointsTeam18 = document.querySelector(".standings_no18_points"); //guestScore9
let pointsTeam19 = document.querySelector(".standings_no19_points"); //homeScore10
let pointsTeam20 = document.querySelector(".standings_no20_points"); //guestScore10

// ---------------------------------------------------------------------------------------------

clearResults.disabled = true;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

startGames.addEventListener("click", () => {
  // startGames.disabled = true;
  clearResults.disabled = false;

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

  standings();

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

  let xxx = Object.values(standingDetails)
    .map((team) => ({
      team: team.name,
      games: team.games,
      wins: team.wins,
      draws: team.draws,
      lost: team.lost,
      goals: team.goals,
      points: team.points,
    }))
    .sort((a, b) => parseInt(b.points) - parseInt(a.points));

  standingNo1.innerHTML = xxx[0].team;
  standingNo2.innerHTML = xxx[1].team;
  standingNo3.innerHTML = xxx[2].team;
  standingNo4.innerHTML = xxx[3].team;
  standingNo5.innerHTML = xxx[4].team;
  standingNo6.innerHTML = xxx[5].team;
  standingNo7.innerHTML = xxx[6].team;
  standingNo8.innerHTML = xxx[7].team;
  standingNo9.innerHTML = xxx[8].team;
  standingNo10.innerHTML = xxx[9].team;
  standingNo11.innerHTML = xxx[10].team;
  standingNo12.innerHTML = xxx[11].team;
  standingNo13.innerHTML = xxx[12].team;
  standingNo14.innerHTML = xxx[13].team;
  standingNo15.innerHTML = xxx[14].team;
  standingNo16.innerHTML = xxx[15].team;
  standingNo17.innerHTML = xxx[16].team;
  standingNo18.innerHTML = xxx[17].team;
  standingNo19.innerHTML = xxx[18].team;
  standingNo20.innerHTML = xxx[19].team;

  playedTeam1.innerHTML = xxx[0].games;
  playedTeam2.innerHTML = xxx[1].games;
  playedTeam3.innerHTML = xxx[2].games;
  playedTeam4.innerHTML = xxx[3].games;
  playedTeam5.innerHTML = xxx[4].games;
  playedTeam6.innerHTML = xxx[5].games;
  playedTeam7.innerHTML = xxx[6].games;
  playedTeam8.innerHTML = xxx[7].games;
  playedTeam9.innerHTML = xxx[8].games;
  playedTeam10.innerHTML = xxx[9].games;
  playedTeam11.innerHTML = xxx[10].games;
  playedTeam12.innerHTML = xxx[11].games;
  playedTeam13.innerHTML = xxx[12].games;
  playedTeam14.innerHTML = xxx[13].games;
  playedTeam15.innerHTML = xxx[14].games;
  playedTeam16.innerHTML = xxx[15].games;
  playedTeam17.innerHTML = xxx[16].games;
  playedTeam18.innerHTML = xxx[17].games;
  playedTeam19.innerHTML = xxx[18].games;
  playedTeam20.innerHTML = xxx[19].games;

  winsTeam1.innerHTML = xxx[0].wins;
  winsTeam2.innerHTML = xxx[1].wins;
  winsTeam3.innerHTML = xxx[2].wins;
  winsTeam4.innerHTML = xxx[3].wins;
  winsTeam5.innerHTML = xxx[4].wins;
  winsTeam6.innerHTML = xxx[5].wins;
  winsTeam7.innerHTML = xxx[6].wins;
  winsTeam8.innerHTML = xxx[7].wins;
  winsTeam9.innerHTML = xxx[8].wins;
  winsTeam10.innerHTML = xxx[9].wins;
  winsTeam11.innerHTML = xxx[10].wins;
  winsTeam12.innerHTML = xxx[11].wins;
  winsTeam13.innerHTML = xxx[12].wins;
  winsTeam14.innerHTML = xxx[13].wins;
  winsTeam15.innerHTML = xxx[14].wins;
  winsTeam16.innerHTML = xxx[15].wins;
  winsTeam17.innerHTML = xxx[16].wins;
  winsTeam18.innerHTML = xxx[17].wins;
  winsTeam19.innerHTML = xxx[18].wins;
  winsTeam20.innerHTML = xxx[19].wins;

  drawsTeam1.innerHTML = xxx[0].draws;
  drawsTeam2.innerHTML = xxx[1].draws;
  drawsTeam3.innerHTML = xxx[2].draws;
  drawsTeam4.innerHTML = xxx[3].draws;
  drawsTeam5.innerHTML = xxx[4].draws;
  drawsTeam6.innerHTML = xxx[5].draws;
  drawsTeam7.innerHTML = xxx[6].draws;
  drawsTeam8.innerHTML = xxx[7].draws;
  drawsTeam9.innerHTML = xxx[8].draws;
  drawsTeam10.innerHTML = xxx[9].draws;
  drawsTeam11.innerHTML = xxx[10].draws;
  drawsTeam12.innerHTML = xxx[11].draws;
  drawsTeam13.innerHTML = xxx[12].draws;
  drawsTeam14.innerHTML = xxx[13].draws;
  drawsTeam15.innerHTML = xxx[14].draws;
  drawsTeam16.innerHTML = xxx[15].draws;
  drawsTeam17.innerHTML = xxx[16].draws;
  drawsTeam18.innerHTML = xxx[17].draws;
  drawsTeam19.innerHTML = xxx[18].draws;
  drawsTeam20.innerHTML = xxx[19].draws;

  lostTeam1.innerHTML = xxx[0].lost;
  lostTeam2.innerHTML = xxx[1].lost;
  lostTeam3.innerHTML = xxx[2].lost;
  lostTeam4.innerHTML = xxx[3].lost;
  lostTeam5.innerHTML = xxx[4].lost;
  lostTeam6.innerHTML = xxx[5].lost;
  lostTeam7.innerHTML = xxx[6].lost;
  lostTeam8.innerHTML = xxx[7].lost;
  lostTeam9.innerHTML = xxx[8].lost;
  lostTeam10.innerHTML = xxx[9].lost;
  lostTeam11.innerHTML = xxx[10].lost;
  lostTeam12.innerHTML = xxx[11].lost;
  lostTeam13.innerHTML = xxx[12].lost;
  lostTeam14.innerHTML = xxx[13].lost;
  lostTeam15.innerHTML = xxx[14].lost;
  lostTeam16.innerHTML = xxx[15].lost;
  lostTeam17.innerHTML = xxx[16].lost;
  lostTeam18.innerHTML = xxx[17].lost;
  lostTeam19.innerHTML = xxx[18].lost;
  lostTeam20.innerHTML = xxx[19].lost;

  goalsTeam1.innerHTML = xxx[0].goals;
  goalsTeam2.innerHTML = xxx[1].goals;
  goalsTeam3.innerHTML = xxx[2].goals;
  goalsTeam4.innerHTML = xxx[3].goals;
  goalsTeam5.innerHTML = xxx[4].goals;
  goalsTeam6.innerHTML = xxx[5].goals;
  goalsTeam7.innerHTML = xxx[6].goals;
  goalsTeam8.innerHTML = xxx[7].goals;
  goalsTeam9.innerHTML = xxx[8].goals;
  goalsTeam10.innerHTML = xxx[9].goals;
  goalsTeam11.innerHTML = xxx[10].goals;
  goalsTeam12.innerHTML = xxx[11].goals;
  goalsTeam13.innerHTML = xxx[12].goals;
  goalsTeam14.innerHTML = xxx[13].goals;
  goalsTeam15.innerHTML = xxx[14].goals;
  goalsTeam16.innerHTML = xxx[15].goals;
  goalsTeam17.innerHTML = xxx[16].goals;
  goalsTeam18.innerHTML = xxx[17].goals;
  goalsTeam19.innerHTML = xxx[18].goals;
  goalsTeam20.innerHTML = xxx[19].goals;

  pointsTeam1.innerHTML = xxx[0].points;
  pointsTeam2.innerHTML = xxx[1].points;
  pointsTeam3.innerHTML = xxx[2].points;
  pointsTeam4.innerHTML = xxx[3].points;
  pointsTeam5.innerHTML = xxx[4].points;
  pointsTeam6.innerHTML = xxx[5].points;
  pointsTeam7.innerHTML = xxx[6].points;
  pointsTeam8.innerHTML = xxx[7].points;
  pointsTeam9.innerHTML = xxx[8].points;
  pointsTeam10.innerHTML = xxx[9].points;
  pointsTeam11.innerHTML = xxx[10].points;
  pointsTeam12.innerHTML = xxx[11].points;
  pointsTeam13.innerHTML = xxx[12].points;
  pointsTeam14.innerHTML = xxx[13].points;
  pointsTeam15.innerHTML = xxx[14].points;
  pointsTeam16.innerHTML = xxx[15].points;
  pointsTeam17.innerHTML = xxx[16].points;
  pointsTeam18.innerHTML = xxx[17].points;
  pointsTeam19.innerHTML = xxx[18].points;
  pointsTeam20.innerHTML = xxx[19].points;
});

function standings() {
  goalsTeam1.innerHTML = homeScore1.innerHTML + "-" + guestScore1.innerHTML;
  goalsTeam2.innerHTML = guestScore1.innerHTML + "-" + homeScore1.innerHTML;
  goalsTeam3.innerHTML = homeScore2.innerHTML + "-" + guestScore2.innerHTML;
  goalsTeam4.innerHTML = guestScore2.innerHTML + "-" + homeScore2.innerHTML;
  goalsTeam5.innerHTML = homeScore3.innerHTML + "-" + guestScore3.innerHTML;
  goalsTeam6.innerHTML = guestScore3.innerHTML + "-" + homeScore3.innerHTML;
  goalsTeam7.innerHTML = homeScore4.innerHTML + "-" + guestScore4.innerHTML;
  goalsTeam8.innerHTML = guestScore4.innerHTML + "-" + homeScore4.innerHTML;
  goalsTeam9.innerHTML = homeScore5.innerHTML + "-" + guestScore5.innerHTML;
  goalsTeam10.innerHTML = guestScore5.innerHTML + "-" + homeScore5.innerHTML;
  goalsTeam11.innerHTML = homeScore6.innerHTML + "-" + guestScore6.innerHTML;
  goalsTeam12.innerHTML = guestScore6.innerHTML + "-" + homeScore6.innerHTML;
  goalsTeam13.innerHTML = homeScore7.innerHTML + "-" + guestScore7.innerHTML;
  goalsTeam14.innerHTML = guestScore7.innerHTML + "-" + homeScore7.innerHTML;
  goalsTeam15.innerHTML = homeScore8.innerHTML + "-" + guestScore8.innerHTML;
  goalsTeam16.innerHTML = guestScore8.innerHTML + "-" + homeScore8.innerHTML;
  goalsTeam17.innerHTML = homeScore9.innerHTML + "-" + guestScore9.innerHTML;
  goalsTeam18.innerHTML = guestScore9.innerHTML + "-" + homeScore9.innerHTML;
  goalsTeam19.innerHTML = homeScore10.innerHTML + "-" + guestScore10.innerHTML;
  goalsTeam20.innerHTML = guestScore10.innerHTML + "-" + homeScore10.innerHTML;

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
  startGames.disabled = false;
  clearResults.disabled = true;

  if (homeScore1.innerHTML > guestScore1.innerHTML) {
    pointsTeam1.innerHTML = parseInt(pointsTeam1.innerHTML) - 3;
    pointsTeam2.innerHTML = parseInt(pointsTeam2.innerHTML) - 0;
    playedTeam1.innerHTML = parseInt(playedTeam1.innerHTML) - 1;
    playedTeam2.innerHTML = parseInt(playedTeam2.innerHTML) - 1;
    winsTeam1.innerHTML = parseInt(winsTeam1.innerHTML) - 1;
    winsTeam2.innerHTML = parseInt(winsTeam2.innerHTML) - 0;
    drawsTeam1.innerHTML = parseInt(drawsTeam1.innerHTML) - 0;
    drawsTeam2.innerHTML = parseInt(drawsTeam2.innerHTML) - 0;
    lostTeam1.innerHTML = parseInt(lostTeam1.innerHTML) - 0;
    lostTeam2.innerHTML = parseInt(lostTeam2.innerHTML) - 1;
  } else if (homeScore1.innerHTML < guestScore1.innerHTML) {
    pointsTeam1.innerHTML = parseInt(pointsTeam1.innerHTML) - 0;
    pointsTeam2.innerHTML = parseInt(pointsTeam2.innerHTML) - 3;
    playedTeam1.innerHTML = parseInt(playedTeam1.innerHTML) - 1;
    playedTeam2.innerHTML = parseInt(playedTeam2.innerHTML) - 1;
    winsTeam1.innerHTML = parseInt(winsTeam1.innerHTML) - 0;
    winsTeam2.innerHTML = parseInt(winsTeam2.innerHTML) - 1;
    drawsTeam1.innerHTML = parseInt(drawsTeam1.innerHTML) - 0;
    drawsTeam2.innerHTML = parseInt(drawsTeam2.innerHTML) - 0;
    lostTeam1.innerHTML = parseInt(lostTeam1.innerHTML) - 1;
    lostTeam2.innerHTML = parseInt(lostTeam2.innerHTML) - 0;
  } else {
    pointsTeam1.innerHTML = parseInt(pointsTeam1.innerHTML) - 1;
    pointsTeam2.innerHTML = parseInt(pointsTeam2.innerHTML) - 1;
    playedTeam1.innerHTML = parseInt(playedTeam1.innerHTML) - 1;
    playedTeam2.innerHTML = parseInt(playedTeam2.innerHTML) - 1;
    winsTeam1.innerHTML = parseInt(winsTeam1.innerHTML) - 0;
    winsTeam2.innerHTML = parseInt(winsTeam2.innerHTML) - 0;
    drawsTeam1.innerHTML = parseInt(drawsTeam1.innerHTML) - 1;
    drawsTeam2.innerHTML = parseInt(drawsTeam2.innerHTML) - 1;
    lostTeam1.innerHTML = parseInt(lostTeam1.innerHTML) - 0;
    lostTeam2.innerHTML = parseInt(lostTeam2.innerHTML) - 0;
  }

  if (homeScore2.innerHTML > guestScore2.innerHTML) {
    pointsTeam3.innerHTML = parseInt(pointsTeam3.innerHTML) - 3;
    pointsTeam4.innerHTML = parseInt(pointsTeam4.innerHTML) - 0;
    playedTeam3.innerHTML = parseInt(playedTeam3.innerHTML) - 1;
    playedTeam4.innerHTML = parseInt(playedTeam4.innerHTML) - 1;
    winsTeam3.innerHTML = parseInt(winsTeam3.innerHTML) - 1;
    winsTeam4.innerHTML = parseInt(winsTeam4.innerHTML) - 0;
    drawsTeam3.innerHTML = parseInt(drawsTeam3.innerHTML) - 0;
    drawsTeam4.innerHTML = parseInt(drawsTeam4.innerHTML) - 0;
    lostTeam3.innerHTML = parseInt(lostTeam3.innerHTML) - 0;
    lostTeam4.innerHTML = parseInt(lostTeam4.innerHTML) - 1;
  } else if (homeScore2.innerHTML < guestScore2.innerHTML) {
    pointsTeam3.innerHTML = parseInt(pointsTeam3.innerHTML) - 0;
    pointsTeam4.innerHTML = parseInt(pointsTeam4.innerHTML) - 3;
    playedTeam3.innerHTML = parseInt(playedTeam3.innerHTML) - 1;
    playedTeam4.innerHTML = parseInt(playedTeam4.innerHTML) - 1;
    winsTeam3.innerHTML = parseInt(winsTeam3.innerHTML) - 0;
    winsTeam4.innerHTML = parseInt(winsTeam4.innerHTML) - 1;
    drawsTeam3.innerHTML = parseInt(drawsTeam3.innerHTML) - 0;
    drawsTeam4.innerHTML = parseInt(drawsTeam4.innerHTML) - 0;
    lostTeam3.innerHTML = parseInt(lostTeam3.innerHTML) - 1;
    lostTeam4.innerHTML = parseInt(lostTeam4.innerHTML) - 0;
  } else {
    pointsTeam3.innerHTML = parseInt(pointsTeam3.innerHTML) - 1;
    pointsTeam4.innerHTML = parseInt(pointsTeam4.innerHTML) - 1;
    playedTeam3.innerHTML = parseInt(playedTeam3.innerHTML) - 1;
    playedTeam4.innerHTML = parseInt(playedTeam4.innerHTML) - 1;
    winsTeam3.innerHTML = parseInt(winsTeam3.innerHTML) - 0;
    winsTeam4.innerHTML = parseInt(winsTeam4.innerHTML) - 0;
    drawsTeam3.innerHTML = parseInt(drawsTeam3.innerHTML) - 1;
    drawsTeam4.innerHTML = parseInt(drawsTeam4.innerHTML) - 1;
    lostTeam3.innerHTML = parseInt(lostTeam3.innerHTML) - 0;
    lostTeam4.innerHTML = parseInt(lostTeam4.innerHTML) - 0;
  }

  if (homeScore3.innerHTML > guestScore3.innerHTML) {
    pointsTeam5.innerHTML = parseInt(pointsTeam5.innerHTML) - 3;
    pointsTeam6.innerHTML = parseInt(pointsTeam6.innerHTML) - 0;
    playedTeam5.innerHTML = parseInt(playedTeam5.innerHTML) - 1;
    playedTeam6.innerHTML = parseInt(playedTeam6.innerHTML) - 1;
    winsTeam5.innerHTML = parseInt(winsTeam5.innerHTML) - 1;
    winsTeam6.innerHTML = parseInt(winsTeam6.innerHTML) - 0;
    drawsTeam5.innerHTML = parseInt(drawsTeam5.innerHTML) - 0;
    drawsTeam6.innerHTML = parseInt(drawsTeam6.innerHTML) - 0;
    lostTeam5.innerHTML = parseInt(lostTeam5.innerHTML) - 0;
    lostTeam6.innerHTML = parseInt(lostTeam6.innerHTML) - 1;
  } else if (homeScore3.innerHTML < guestScore3.innerHTML) {
    pointsTeam5.innerHTML = parseInt(pointsTeam5.innerHTML) - 0;
    pointsTeam6.innerHTML = parseInt(pointsTeam6.innerHTML) - 3;
    playedTeam5.innerHTML = parseInt(playedTeam5.innerHTML) - 1;
    playedTeam6.innerHTML = parseInt(playedTeam6.innerHTML) - 1;
    winsTeam5.innerHTML = parseInt(winsTeam5.innerHTML) - 0;
    winsTeam6.innerHTML = parseInt(winsTeam6.innerHTML) - 1;
    drawsTeam5.innerHTML = parseInt(drawsTeam5.innerHTML) - 0;
    drawsTeam6.innerHTML = parseInt(drawsTeam6.innerHTML) - 0;
    lostTeam5.innerHTML = parseInt(lostTeam5.innerHTML) - 1;
    lostTeam6.innerHTML = parseInt(lostTeam6.innerHTML) - 0;
  } else {
    pointsTeam5.innerHTML = parseInt(pointsTeam5.innerHTML) - 1;
    pointsTeam6.innerHTML = parseInt(pointsTeam6.innerHTML) - 1;
    playedTeam5.innerHTML = parseInt(playedTeam5.innerHTML) - 1;
    playedTeam6.innerHTML = parseInt(playedTeam6.innerHTML) - 1;
    winsTeam5.innerHTML = parseInt(winsTeam5.innerHTML) - 0;
    winsTeam6.innerHTML = parseInt(winsTeam6.innerHTML) - 0;
    drawsTeam5.innerHTML = parseInt(drawsTeam5.innerHTML) - 1;
    drawsTeam6.innerHTML = parseInt(drawsTeam6.innerHTML) - 1;
    lostTeam5.innerHTML = parseInt(lostTeam5.innerHTML) - 0;
    lostTeam6.innerHTML = parseInt(lostTeam6.innerHTML) - 0;
  }

  if (homeScore4.innerHTML > guestScore4.innerHTML) {
    pointsTeam7.innerHTML = parseInt(pointsTeam7.innerHTML) - 3;
    pointsTeam8.innerHTML = parseInt(pointsTeam8.innerHTML) - 0;
    playedTeam7.innerHTML = parseInt(playedTeam7.innerHTML) - 1;
    playedTeam8.innerHTML = parseInt(playedTeam8.innerHTML) - 1;
    winsTeam7.innerHTML = parseInt(winsTeam7.innerHTML) - 1;
    winsTeam8.innerHTML = parseInt(winsTeam8.innerHTML) - 0;
    drawsTeam7.innerHTML = parseInt(drawsTeam7.innerHTML) - 0;
    drawsTeam8.innerHTML = parseInt(drawsTeam8.innerHTML) - 0;
    lostTeam7.innerHTML = parseInt(lostTeam7.innerHTML) - 0;
    lostTeam8.innerHTML = parseInt(lostTeam8.innerHTML) - 1;
  } else if (homeScore4.innerHTML < guestScore4.innerHTML) {
    pointsTeam7.innerHTML = parseInt(pointsTeam7.innerHTML) - 0;
    pointsTeam8.innerHTML = parseInt(pointsTeam8.innerHTML) - 3;
    playedTeam7.innerHTML = parseInt(playedTeam7.innerHTML) - 1;
    playedTeam8.innerHTML = parseInt(playedTeam8.innerHTML) - 1;
    winsTeam7.innerHTML = parseInt(winsTeam7.innerHTML) - 0;
    winsTeam8.innerHTML = parseInt(winsTeam8.innerHTML) - 1;
    drawsTeam7.innerHTML = parseInt(drawsTeam7.innerHTML) - 0;
    drawsTeam8.innerHTML = parseInt(drawsTeam8.innerHTML) - 0;
    lostTeam7.innerHTML = parseInt(lostTeam7.innerHTML) - 1;
    lostTeam8.innerHTML = parseInt(lostTeam8.innerHTML) - 0;
  } else {
    pointsTeam7.innerHTML = parseInt(pointsTeam7.innerHTML) - 1;
    pointsTeam8.innerHTML = parseInt(pointsTeam8.innerHTML) - 1;
    playedTeam7.innerHTML = parseInt(playedTeam7.innerHTML) - 1;
    playedTeam8.innerHTML = parseInt(playedTeam8.innerHTML) - 1;
    winsTeam7.innerHTML = parseInt(winsTeam7.innerHTML) - 0;
    winsTeam8.innerHTML = parseInt(winsTeam8.innerHTML) - 0;
    drawsTeam7.innerHTML = parseInt(drawsTeam7.innerHTML) - 1;
    drawsTeam8.innerHTML = parseInt(drawsTeam8.innerHTML) - 1;
    lostTeam7.innerHTML = parseInt(lostTeam7.innerHTML) - 0;
    lostTeam8.innerHTML = parseInt(lostTeam8.innerHTML) - 0;
  }

  if (homeScore5.innerHTML > guestScore5.innerHTML) {
    pointsTeam9.innerHTML = parseInt(pointsTeam9.innerHTML) - 3;
    pointsTeam10.innerHTML = parseInt(pointsTeam10.innerHTML) - 0;
    playedTeam9.innerHTML = parseInt(playedTeam9.innerHTML) - 1;
    playedTeam10.innerHTML = parseInt(playedTeam10.innerHTML) - 1;
    winsTeam9.innerHTML = parseInt(winsTeam9.innerHTML) - 1;
    winsTeam10.innerHTML = parseInt(winsTeam10.innerHTML) - 0;
    drawsTeam9.innerHTML = parseInt(drawsTeam9.innerHTML) - 0;
    drawsTeam10.innerHTML = parseInt(drawsTeam10.innerHTML) - 0;
    lostTeam9.innerHTML = parseInt(lostTeam9.innerHTML) - 0;
    lostTeam10.innerHTML = parseInt(lostTeam10.innerHTML) - 1;
  } else if (homeScore5.innerHTML < guestScore5.innerHTML) {
    pointsTeam9.innerHTML = parseInt(pointsTeam9.innerHTML) - 0;
    pointsTeam10.innerHTML = parseInt(pointsTeam10.innerHTML) - 3;
    playedTeam9.innerHTML = parseInt(playedTeam9.innerHTML) - 1;
    playedTeam10.innerHTML = parseInt(playedTeam10.innerHTML) - 1;
    winsTeam9.innerHTML = parseInt(winsTeam9.innerHTML) - 0;
    winsTeam10.innerHTML = parseInt(winsTeam10.innerHTML) - 1;
    drawsTeam9.innerHTML = parseInt(drawsTeam9.innerHTML) - 0;
    drawsTeam10.innerHTML = parseInt(drawsTeam10.innerHTML) - 0;
    lostTeam9.innerHTML = parseInt(lostTeam9.innerHTML) - 1;
    lostTeam10.innerHTML = parseInt(lostTeam10.innerHTML) - 0;
  } else {
    pointsTeam9.innerHTML = parseInt(pointsTeam9.innerHTML) - 1;
    pointsTeam10.innerHTML = parseInt(pointsTeam10.innerHTML) - 1;
    playedTeam9.innerHTML = parseInt(playedTeam9.innerHTML) - 1;
    playedTeam10.innerHTML = parseInt(playedTeam10.innerHTML) - 1;
    winsTeam9.innerHTML = parseInt(winsTeam9.innerHTML) - 0;
    winsTeam10.innerHTML = parseInt(winsTeam10.innerHTML) - 0;
    drawsTeam9.innerHTML = parseInt(drawsTeam9.innerHTML) - 1;
    drawsTeam10.innerHTML = parseInt(drawsTeam10.innerHTML) - 1;
    lostTeam9.innerHTML = parseInt(lostTeam9.innerHTML) - 0;
    lostTeam10.innerHTML = parseInt(lostTeam10.innerHTML) - 0;
  }

  if (homeScore6.innerHTML > guestScore6.innerHTML) {
    pointsTeam11.innerHTML = parseInt(pointsTeam11.innerHTML) - 3;
    pointsTeam12.innerHTML = parseInt(pointsTeam12.innerHTML) - 0;
    playedTeam11.innerHTML = parseInt(playedTeam11.innerHTML) - 1;
    playedTeam12.innerHTML = parseInt(playedTeam12.innerHTML) - 1;
    winsTeam11.innerHTML = parseInt(winsTeam11.innerHTML) - 1;
    winsTeam12.innerHTML = parseInt(winsTeam12.innerHTML) - 0;
    drawsTeam11.innerHTML = parseInt(drawsTeam11.innerHTML) - 0;
    drawsTeam12.innerHTML = parseInt(drawsTeam12.innerHTML) - 0;
    lostTeam11.innerHTML = parseInt(lostTeam11.innerHTML) - 0;
    lostTeam12.innerHTML = parseInt(lostTeam12.innerHTML) - 1;
  } else if (homeScore6.innerHTML < guestScore6.innerHTML) {
    pointsTeam11.innerHTML = parseInt(pointsTeam11.innerHTML) - 0;
    pointsTeam12.innerHTML = parseInt(pointsTeam12.innerHTML) - 3;
    playedTeam11.innerHTML = parseInt(playedTeam11.innerHTML) - 1;
    playedTeam12.innerHTML = parseInt(playedTeam12.innerHTML) - 1;
    winsTeam11.innerHTML = parseInt(winsTeam11.innerHTML) - 0;
    winsTeam12.innerHTML = parseInt(winsTeam12.innerHTML) - 1;
    drawsTeam11.innerHTML = parseInt(drawsTeam11.innerHTML) - 0;
    drawsTeam12.innerHTML = parseInt(drawsTeam12.innerHTML) - 0;
    lostTeam11.innerHTML = parseInt(lostTeam11.innerHTML) - 1;
    lostTeam12.innerHTML = parseInt(lostTeam12.innerHTML) - 0;
  } else {
    pointsTeam11.innerHTML = parseInt(pointsTeam11.innerHTML) - 1;
    pointsTeam12.innerHTML = parseInt(pointsTeam12.innerHTML) - 1;
    playedTeam11.innerHTML = parseInt(playedTeam11.innerHTML) - 1;
    playedTeam12.innerHTML = parseInt(playedTeam12.innerHTML) - 1;
    winsTeam11.innerHTML = parseInt(winsTeam11.innerHTML) - 0;
    winsTeam12.innerHTML = parseInt(winsTeam12.innerHTML) - 0;
    drawsTeam11.innerHTML = parseInt(drawsTeam11.innerHTML) - 1;
    drawsTeam12.innerHTML = parseInt(drawsTeam12.innerHTML) - 1;
    lostTeam11.innerHTML = parseInt(lostTeam11.innerHTML) - 0;
    lostTeam12.innerHTML = parseInt(lostTeam12.innerHTML) - 0;
  }

  if (homeScore7.innerHTML > guestScore7.innerHTML) {
    pointsTeam13.innerHTML = parseInt(pointsTeam13.innerHTML) - 3;
    pointsTeam14.innerHTML = parseInt(pointsTeam14.innerHTML) - 0;
    playedTeam13.innerHTML = parseInt(playedTeam13.innerHTML) - 1;
    playedTeam14.innerHTML = parseInt(playedTeam14.innerHTML) - 1;
    winsTeam13.innerHTML = parseInt(winsTeam13.innerHTML) - 1;
    winsTeam14.innerHTML = parseInt(winsTeam14.innerHTML) - 0;
    drawsTeam13.innerHTML = parseInt(drawsTeam13.innerHTML) - 0;
    drawsTeam14.innerHTML = parseInt(drawsTeam14.innerHTML) - 0;
    lostTeam13.innerHTML = parseInt(lostTeam13.innerHTML) - 0;
    lostTeam14.innerHTML = parseInt(lostTeam14.innerHTML) - 1;
  } else if (homeScore7.innerHTML < guestScore7.innerHTML) {
    pointsTeam13.innerHTML = parseInt(pointsTeam13.innerHTML) - 0;
    pointsTeam14.innerHTML = parseInt(pointsTeam14.innerHTML) - 3;
    playedTeam13.innerHTML = parseInt(playedTeam13.innerHTML) - 1;
    playedTeam14.innerHTML = parseInt(playedTeam14.innerHTML) - 1;
    winsTeam13.innerHTML = parseInt(winsTeam13.innerHTML) - 0;
    winsTeam14.innerHTML = parseInt(winsTeam14.innerHTML) - 1;
    drawsTeam13.innerHTML = parseInt(drawsTeam13.innerHTML) - 0;
    drawsTeam14.innerHTML = parseInt(drawsTeam14.innerHTML) - 0;
    lostTeam13.innerHTML = parseInt(lostTeam13.innerHTML) - 1;
    lostTeam14.innerHTML = parseInt(lostTeam14.innerHTML) - 0;
  } else {
    pointsTeam13.innerHTML = parseInt(pointsTeam13.innerHTML) - 1;
    pointsTeam14.innerHTML = parseInt(pointsTeam14.innerHTML) - 1;
    playedTeam13.innerHTML = parseInt(playedTeam13.innerHTML) - 1;
    playedTeam14.innerHTML = parseInt(playedTeam14.innerHTML) - 1;
    winsTeam13.innerHTML = parseInt(winsTeam13.innerHTML) - 0;
    winsTeam14.innerHTML = parseInt(winsTeam14.innerHTML) - 0;
    drawsTeam13.innerHTML = parseInt(drawsTeam13.innerHTML) - 1;
    drawsTeam14.innerHTML = parseInt(drawsTeam14.innerHTML) - 1;
    lostTeam13.innerHTML = parseInt(lostTeam13.innerHTML) - 0;
    lostTeam14.innerHTML = parseInt(lostTeam14.innerHTML) - 0;
  }

  if (homeScore8.innerHTML > guestScore8.innerHTML) {
    pointsTeam15.innerHTML = parseInt(pointsTeam15.innerHTML) - 3;
    pointsTeam16.innerHTML = parseInt(pointsTeam16.innerHTML) - 0;
    playedTeam15.innerHTML = parseInt(playedTeam15.innerHTML) - 1;
    playedTeam16.innerHTML = parseInt(playedTeam16.innerHTML) - 1;
    winsTeam15.innerHTML = parseInt(winsTeam15.innerHTML) - 1;
    winsTeam16.innerHTML = parseInt(winsTeam16.innerHTML) - 0;
    drawsTeam15.innerHTML = parseInt(drawsTeam15.innerHTML) - 0;
    drawsTeam16.innerHTML = parseInt(drawsTeam16.innerHTML) - 0;
    lostTeam15.innerHTML = parseInt(lostTeam15.innerHTML) - 0;
    lostTeam16.innerHTML = parseInt(lostTeam16.innerHTML) - 1;
  } else if (homeScore8.innerHTML < guestScore8.innerHTML) {
    pointsTeam15.innerHTML = parseInt(pointsTeam15.innerHTML) - 0;
    pointsTeam16.innerHTML = parseInt(pointsTeam16.innerHTML) - 3;
    playedTeam15.innerHTML = parseInt(playedTeam15.innerHTML) - 1;
    playedTeam16.innerHTML = parseInt(playedTeam16.innerHTML) - 1;
    winsTeam15.innerHTML = parseInt(winsTeam15.innerHTML) - 0;
    winsTeam16.innerHTML = parseInt(winsTeam16.innerHTML) - 1;
    drawsTeam15.innerHTML = parseInt(drawsTeam15.innerHTML) - 0;
    drawsTeam16.innerHTML = parseInt(drawsTeam16.innerHTML) - 0;
    lostTeam15.innerHTML = parseInt(lostTeam15.innerHTML) - 1;
    lostTeam16.innerHTML = parseInt(lostTeam16.innerHTML) - 0;
  } else {
    pointsTeam15.innerHTML = parseInt(pointsTeam15.innerHTML) - 1;
    pointsTeam16.innerHTML = parseInt(pointsTeam16.innerHTML) - 1;
    playedTeam15.innerHTML = parseInt(playedTeam15.innerHTML) - 1;
    playedTeam16.innerHTML = parseInt(playedTeam16.innerHTML) - 1;
    winsTeam15.innerHTML = parseInt(winsTeam15.innerHTML) - 0;
    winsTeam16.innerHTML = parseInt(winsTeam16.innerHTML) - 0;
    drawsTeam15.innerHTML = parseInt(drawsTeam15.innerHTML) - 1;
    drawsTeam16.innerHTML = parseInt(drawsTeam16.innerHTML) - 1;
    lostTeam15.innerHTML = parseInt(lostTeam15.innerHTML) - 0;
    lostTeam16.innerHTML = parseInt(lostTeam16.innerHTML) - 0;
  }

  if (homeScore9.innerHTML > guestScore9.innerHTML) {
    pointsTeam17.innerHTML = parseInt(pointsTeam17.innerHTML) - 3;
    pointsTeam18.innerHTML = parseInt(pointsTeam18.innerHTML) - 0;
    playedTeam17.innerHTML = parseInt(playedTeam17.innerHTML) - 1;
    playedTeam18.innerHTML = parseInt(playedTeam18.innerHTML) - 1;
    winsTeam17.innerHTML = parseInt(winsTeam17.innerHTML) - 1;
    winsTeam18.innerHTML = parseInt(winsTeam18.innerHTML) - 0;
    drawsTeam17.innerHTML = parseInt(drawsTeam17.innerHTML) - 0;
    drawsTeam18.innerHTML = parseInt(drawsTeam18.innerHTML) - 0;
    lostTeam17.innerHTML = parseInt(lostTeam17.innerHTML) - 0;
    lostTeam18.innerHTML = parseInt(lostTeam18.innerHTML) - 1;
  } else if (homeScore9.innerHTML < guestScore9.innerHTML) {
    pointsTeam17.innerHTML = parseInt(pointsTeam17.innerHTML) - 0;
    pointsTeam18.innerHTML = parseInt(pointsTeam18.innerHTML) - 3;
    playedTeam17.innerHTML = parseInt(playedTeam17.innerHTML) - 1;
    playedTeam18.innerHTML = parseInt(playedTeam18.innerHTML) - 1;
    winsTeam17.innerHTML = parseInt(winsTeam17.innerHTML) - 0;
    winsTeam18.innerHTML = parseInt(winsTeam18.innerHTML) - 1;
    drawsTeam17.innerHTML = parseInt(drawsTeam17.innerHTML) - 0;
    drawsTeam18.innerHTML = parseInt(drawsTeam18.innerHTML) - 0;
    lostTeam17.innerHTML = parseInt(lostTeam17.innerHTML) - 1;
    lostTeam18.innerHTML = parseInt(lostTeam18.innerHTML) - 0;
  } else {
    pointsTeam17.innerHTML = parseInt(pointsTeam17.innerHTML) - 1;
    pointsTeam18.innerHTML = parseInt(pointsTeam18.innerHTML) - 1;
    playedTeam17.innerHTML = parseInt(playedTeam17.innerHTML) - 1;
    playedTeam18.innerHTML = parseInt(playedTeam18.innerHTML) - 1;
    winsTeam17.innerHTML = parseInt(winsTeam17.innerHTML) - 0;
    winsTeam18.innerHTML = parseInt(winsTeam18.innerHTML) - 0;
    drawsTeam17.innerHTML = parseInt(drawsTeam17.innerHTML) - 1;
    drawsTeam18.innerHTML = parseInt(drawsTeam18.innerHTML) - 1;
    lostTeam17.innerHTML = parseInt(lostTeam17.innerHTML) - 0;
    lostTeam18.innerHTML = parseInt(lostTeam18.innerHTML) - 0;
  }

  if (homeScore10.innerHTML > guestScore10.innerHTML) {
    pointsTeam19.innerHTML = parseInt(pointsTeam19.innerHTML) - 3;
    pointsTeam20.innerHTML = parseInt(pointsTeam20.innerHTML) - 0;
    playedTeam19.innerHTML = parseInt(playedTeam19.innerHTML) - 1;
    playedTeam20.innerHTML = parseInt(playedTeam20.innerHTML) - 1;
    winsTeam19.innerHTML = parseInt(winsTeam19.innerHTML) - 1;
    winsTeam20.innerHTML = parseInt(winsTeam20.innerHTML) - 0;
    drawsTeam19.innerHTML = parseInt(drawsTeam19.innerHTML) - 0;
    drawsTeam20.innerHTML = parseInt(drawsTeam20.innerHTML) - 0;
    lostTeam19.innerHTML = parseInt(lostTeam19.innerHTML) - 0;
    lostTeam20.innerHTML = parseInt(lostTeam20.innerHTML) - 1;
  } else if (homeScore10.innerHTML < guestScore10.innerHTML) {
    pointsTeam19.innerHTML = parseInt(pointsTeam19.innerHTML) - 0;
    pointsTeam20.innerHTML = parseInt(pointsTeam20.innerHTML) - 3;
    playedTeam19.innerHTML = parseInt(playedTeam19.innerHTML) - 1;
    playedTeam20.innerHTML = parseInt(playedTeam20.innerHTML) - 1;
    winsTeam19.innerHTML = parseInt(winsTeam19.innerHTML) - 0;
    winsTeam20.innerHTML = parseInt(winsTeam20.innerHTML) - 1;
    drawsTeam19.innerHTML = parseInt(drawsTeam19.innerHTML) - 0;
    drawsTeam20.innerHTML = parseInt(drawsTeam20.innerHTML) - 0;
    lostTeam19.innerHTML = parseInt(lostTeam19.innerHTML) - 1;
    lostTeam20.innerHTML = parseInt(lostTeam20.innerHTML) - 0;
  } else {
    pointsTeam19.innerHTML = parseInt(pointsTeam19.innerHTML) - 1;
    pointsTeam20.innerHTML = parseInt(pointsTeam20.innerHTML) - 1;
    playedTeam19.innerHTML = parseInt(playedTeam19.innerHTML) - 1;
    playedTeam20.innerHTML = parseInt(playedTeam20.innerHTML) - 1;
    winsTeam19.innerHTML = parseInt(winsTeam19.innerHTML) - 0;
    winsTeam20.innerHTML = parseInt(winsTeam20.innerHTML) - 0;
    drawsTeam19.innerHTML = parseInt(drawsTeam19.innerHTML) - 1;
    drawsTeam20.innerHTML = parseInt(drawsTeam20.innerHTML) - 1;
    lostTeam19.innerHTML = parseInt(lostTeam19.innerHTML) - 0;
    lostTeam20.innerHTML = parseInt(lostTeam20.innerHTML) - 0;
  }

  homeScore1.innerHTML = 0;
  guestScore1.innerHTML = 0;
  homeScore2.innerHTML = 0;
  guestScore2.innerHTML = 0;
  homeScore3.innerHTML = 0;
  guestScore3.innerHTML = 0;
  homeScore4.innerHTML = 0;
  guestScore4.innerHTML = 0;
  homeScore5.innerHTML = 0;
  guestScore5.innerHTML = 0;
  homeScore6.innerHTML = 0;
  guestScore6.innerHTML = 0;
  homeScore7.innerHTML = 0;
  guestScore7.innerHTML = 0;
  homeScore8.innerHTML = 0;
  guestScore8.innerHTML = 0;
  homeScore9.innerHTML = 0;
  guestScore9.innerHTML = 0;
  homeScore10.innerHTML = 0;
  guestScore10.innerHTML = 0;

  goalsTeam1.innerHTML = homeScore1.innerHTML + "-" + guestScore1.innerHTML;
  goalsTeam2.innerHTML = guestScore1.innerHTML + "-" + homeScore1.innerHTML;
  goalsTeam3.innerHTML = homeScore2.innerHTML + "-" + guestScore2.innerHTML;
  goalsTeam4.innerHTML = guestScore2.innerHTML + "-" + homeScore2.innerHTML;
  goalsTeam5.innerHTML = homeScore3.innerHTML + "-" + guestScore3.innerHTML;
  goalsTeam6.innerHTML = guestScore3.innerHTML + "-" + homeScore3.innerHTML;
  goalsTeam7.innerHTML = homeScore4.innerHTML + "-" + guestScore4.innerHTML;
  goalsTeam8.innerHTML = guestScore4.innerHTML + "-" + homeScore4.innerHTML;
  goalsTeam9.innerHTML = homeScore5.innerHTML + "-" + guestScore5.innerHTML;
  goalsTeam10.innerHTML = guestScore5.innerHTML + "-" + homeScore5.innerHTML;
  goalsTeam11.innerHTML = homeScore6.innerHTML + "-" + guestScore6.innerHTML;
  goalsTeam12.innerHTML = guestScore6.innerHTML + "-" + homeScore6.innerHTML;
  goalsTeam13.innerHTML = homeScore7.innerHTML + "-" + guestScore7.innerHTML;
  goalsTeam14.innerHTML = guestScore7.innerHTML + "-" + homeScore7.innerHTML;
  goalsTeam15.innerHTML = homeScore8.innerHTML + "-" + guestScore8.innerHTML;
  goalsTeam16.innerHTML = guestScore8.innerHTML + "-" + homeScore8.innerHTML;
  goalsTeam17.innerHTML = homeScore9.innerHTML + "-" + guestScore9.innerHTML;
  goalsTeam18.innerHTML = guestScore9.innerHTML + "-" + homeScore9.innerHTML;
  goalsTeam19.innerHTML = homeScore10.innerHTML + "-" + guestScore10.innerHTML;
  goalsTeam20.innerHTML = guestScore10.innerHTML + "-" + homeScore10.innerHTML;
});