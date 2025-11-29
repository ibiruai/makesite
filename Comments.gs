function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var comments = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i][3] == e.parameter.slug) {
      comments.push({
        date: data[i][0],
        name: data[i][1],
        comment: data[i][2],
      });
    }
  }
  return ContentService.createTextOutput(JSON.stringify(comments))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var date = new Date();
  var name = e.parameter.name;
  var comment = e.parameter.comment;
  var slug = e.parameter.slug;
  sheet.appendRow([date, name, comment, slug]);
  return ContentService.createTextOutput(JSON.stringify({result: 'success'}))
    .setMimeType(ContentService.MimeType.JSON);
}
