function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function saveSurveyResults(answers, totalScore, avgScore) {
  var sheet = SpreadsheetApp.openById("shettIDของคุณ").getSheetByName("SurveyResults");
  sheet.appendRow([new Date()].concat(answers, totalScore, avgScore));
