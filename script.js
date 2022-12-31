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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

startGames.addEventListener("click", () => {
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
  if (homeScore1.innerHTML > guestScore1.innerHTML) {
    pointsTeam1.innerHTML == 3;
    pointsTeam2.innerHTML == 0;
  } else if (homeScore1.innerHTML < guestScore1.innerHTML) {
    pointsTeam1.innerHTML == 3;
    pointsTeam2.innerHTML == 0;
  } else {
    pointsTeam1.innerHTML == 1;
    pointsTeam2.innerHTML == 1;
  }
  xxx();
});

function xxx() {
  if (homeScore1.innerHTML > guestScore1.innerHTML) {
    pointsTeam1.innerHTML = 3;
    pointsTeam2.innerHTML = 0;
  } else if (homeScore1.innerHTML < guestScore1.innerHTML) {
    pointsTeam1.innerHTML = 0;
    pointsTeam2.innerHTML = 3;
  } else {
    pointsTeam1.innerHTML = 1;
    pointsTeam2.innerHTML = 1;
  }
}
