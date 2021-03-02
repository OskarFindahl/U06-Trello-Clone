
  $( function() {

    $( ".list" ).sortable({
      connectWith: ".list"
    });
    

    let taskID = 1;
    $(".create-task-button").on("click", function() {


      var li = $('<li></li>').text('Task: ' + taskID);
      var button = $('<button></button>').attr('type','button').attr('id',taskID).attr('class','dialog-button').text('Dialog');
      var div = $('<div></div>').attr('class',taskID).attr('title','Basic dialog');
      var p = $('<p></p>').text('Task ' + taskID + ' Dialog Info');
      $('#sortable1').append(li);
      li.append(button);
      button.append(div);
      div.append(p);


  

      $("." + taskID).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 200
        },
      });

      taskID ++;

      $( ".dialog-button" ).on( "click", function() {
        let classId =  $(this).prop('id');
        $("." + classId).dialog("open");

      });

    });
      
    
    });
  


