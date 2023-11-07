function compareTriplets(a, b) {
  let aliceScore = 0;
  let bobScore = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
    } else if (a[i] < b[i]) {
      bobScore++;
    } else {
      continue;
    }
  }
  const finalScores = [aliceScore, bobScore];
  return finalScores;
}

console.log(compareTriplets([5, 5, 3], [1, 1, 1]));
