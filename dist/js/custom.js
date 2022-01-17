function MyNavigator(e) {
  var menus = [
    "homepage",
    "occupied",
    "note",
    "commands",
    "shortcut",
    "custom-shortcut",
    "lose-mic",
    "report-issue",
    "exit",
  ];
  if(e=="exit"){
    $("body").hide("slow");
    fetch(`https://trexx_helper/escape`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8', },
      body: JSON.stringify({})
    }).then(resp => resp.json()).then(resp => {
      return resp;
    });
    return;
  }

  $(`#${e}`).fadeIn();

  menus.forEach((nav) => {
    if (nav !== e) {
      $(`#${nav}`).hide();
    }
  });
}


