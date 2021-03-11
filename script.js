$(function () {
  $.getScript("widget.js", function () {});

  //Code for creating list and tasks
  $(".list").sortable({
    connectWith: ".list",
  });

  let taskID = 1; //For taskCards

  $(".create-task-button").on("click", function () {
    $(this).effect("highlight", "slow");

    //Creates DOM components
    var string = "";
    string += `<div class="tabs bg-red-50 w-80 m-7 text-lg" id="tabs${taskID}" >`;
    string += `<ul>`;
    string += `<li><a href="#tabs-1">Tab 1</a></li><li><a href="#tabs-2">Tab 2</a></li><li><a href="#tabs-3">Tab 3</a></li>`;
    string += `</ul>`;
    string += `<div id="tabs-1"><button type="button" id="colorButton${taskID}" class="colorButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Change Color</button></div>`;
    string += `<div id="tabs-2"><li><button type="button" id="${taskID}" class="dialog-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Dialog<div class="${taskID}" title="Basic dialog"><p>"Task ${taskID} Dialog Info"</p></div></button></li></div>`;
    string += `<div id="tabs-3"><p>Date: <input type="text" class="datepicker"></p></div></div>`;

    $("#sortable1").append(string);

    //Creates Dialog
    $("." + taskID).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 200,
      },
    });

    //Creates Tabs
    $(".tabs").tabs();

    //Create Datepicker
    $(".datepicker").datepicker();

    //Custome Widget
    $(`#colorButton${taskID}`).click(function () {
      $(this).parent().parent().colors();
    });

    //Incriment taskID for taskCards
    taskID++;

    //Activate Dialog Button
    $(".dialog-button").on("click", function () {
      let classId = $(this).prop("id");
      $("." + classId)
        .dialog("open")
        .effect("pulsate");
    });
  });

  $(".create-column").on("click", function () {
    $("#column-div").append(
      `<ul class="list m-2 w-96 bg-red-100 text-4xl"><h2 class="w-96">Custome</h2></ul>`
    );

    $(".list").sortable({
      connectWith: ".list",
    });
  });
});
