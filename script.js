
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




      var divTabs = $('<div></div>').attr('class','tabs');
      
      var ulTabs = $('<ul></ul>');
      var liTabs1 = $('<li></li>');
      var liTabs2 = $('<li></li>');
      var liTabs3 = $('<li></li>');
      var aTabs1 = $('<a></a>').attr('href','#tabs-1').text("Tab 1");
      var aTabs2 = $('<a></a>').attr('href','#tabs-2').text("Tab 2");
      var aTabs3 = $('<a></a>').attr('href','#tabs-3').text("Tab 3");

      var divTab1 = $('<div></div>').attr('id','tabs-1');
      var pTab1 = $('<p></p>').text("Tab info 1");

      var divTab2 = $('<div></div>').attr('id','tabs-2');
      var pTab2 = $('<p></p>').text("Tab info 2");

      var divTab3 = $('<div></div>').attr('id','tabs-3');
      var pTab3 = $('<p></p>').text("Tab info 3");


      $('#sortable1').append(li);

      li.append(button);
      button.append(div);
      div.append(p);

      li.append(divTabs);
      divTabs.append(ulTabs);
      ulTabs.append(liTabs1);
      ulTabs.append(liTabs2);
      ulTabs.append(liTabs3);
      liTabs1.append(aTabs1);
      liTabs2.append(aTabs2);
      liTabs3.append(aTabs3);
     
    

      divTabs.append(divTab1);
      divTab1.append(pTab1);

      divTabs.append(divTab2);
      divTab2.append(pTab2);

      divTabs.append(divTab3);
      divTab3.append(pTab3);



      

      $("." + taskID).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 200
        },
      });

      $( ".tabs" ).tabs();

      taskID ++;

      $( ".dialog-button" ).on( "click", function() {
        let classId =  $(this).prop('id');
        $("." + classId).dialog("open");

      });

    });
      
    
    });
  


