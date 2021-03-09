
  $( function() {



    $.widget( "custom.colorize", {
      // default options
      options: {
        red: 255,
        green: 0,
        blue: 0,
 
        // Callbacks
        change: null,
        random: null
      },
 
      // The constructor
      _create: function() {
        
        this.element
          // add a class for theming
          .addClass( "custom-colorize" );
 
        this.changer = this.element.find('#tabs-1').find('button');
        
    
      
       
 
        // Bind click events on the changer button to the random method
        this._on( this.changer, {
          // _on won't call random when widget is disabled
          click: "random"
        });

        this._refresh();
      },
 
      // Called when created, and later when changing options
      _refresh: function() {
        this.element.css( "background-color", "rgb(" +
          this.options.red +"," +
          this.options.green + "," +
          this.options.blue + ")"
        );
 
        // Trigger a callback/event
        this._trigger( "change" );
      },
 
      // A public method to change the color to a random value
      // can be called directly via .colorize( "random" )
      random: function( event ) {
        var colors = {
          red: Math.floor( Math.random() * 256 ),
          green: Math.floor( Math.random() * 256 ),
          blue: Math.floor( Math.random() * 256 )
        };
 
        // Trigger an event, check if it's canceled
        if ( this._trigger( "random", event, colors ) !== false ) {
          this.option( colors );
        }
      },
 
      // Events bound via _on are removed automatically
      // revert other modifications here
    
 
      // _setOptions is called with a hash of all options that are changing
      // always refresh when changing options
      _setOptions: function() {
        // _super and _superApply handle keeping the right this-context
        this._superApply( arguments );
        this._refresh();
      },
 
     
    });










  //Code for creating list and tasks 

    $( ".list" ).sortable({
      connectWith: ".list"
    });
    



    


    let taskID = 1; //For taskCards

    $(".create-task-button").on("click", function() {

      $(this).effect( "highlight", "slow" );


      


      //Creats card with dialog element
      var li = $('<li></li>').text('Task: ' + taskID);
      var button = $('<button></button>').attr('type','button').attr('id',taskID).attr('class','dialog-button text-2xl').text('Dialog');
      var div = $('<div></div>').attr('class',taskID).attr('title','Basic dialog');
      var p = $('<p></p>').text('Task ' + taskID + ' Dialog Info');




      //Creats Tabs
      var divTabs = $('<div></div>').attr('class','tabs bg-red-50 w-80 m-7 text-lg').attr('id', `tabs${taskID}`);
      
      var ulTabs = $('<ul></ul>');
      var liTabs1 = $('<li></li>');
      var liTabs2 = $('<li></li>');
      var liTabs3 = $('<li></li>');
      var aTabs1 = $('<a></a>').attr('href','#tabs-1').text("Tab 1");
      var aTabs2 = $('<a></a>').attr('href','#tabs-2').text("Tab 2");
      var aTabs3 = $('<a></a>').attr('href','#tabs-3').text("Tab 3");

      var divTab1 = $('<div></div>').attr('id','tabs-1');
      var pTab1 = $('<button></button>').attr('type','button').attr('id',`colorButton${taskID}`).attr('class','colorButton').text("Change Color");

      var divTab2 = $('<div></div>').attr('id','tabs-2');
      var pTab2 = $('<p></p>').text("Tab info 2");

      var divTab3 = $('<div></div>').attr('id','tabs-3');
      var pTab3 = $('<p></p>').text('Date: ');
      var date = $('<input></input>').attr('type','text').attr('class','datepicker');


      //Append dialog 
      // .append(li);

       li.append(button);
       button.append(div);
       div.append(p);

      //Append tabs
      $('#sortable1').append(divTabs);
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
      divTab2.append(li);

      divTabs.append(divTab3);
      divTab3.append(pTab3);
      pTab3.append(date);



     
      

      //Creates Dialog
      $("." + taskID).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 200
        },



        
      });
      
      

      //Creates Tabs
      $( ".tabs" ).tabs();



  
      //Create Datepicker
      $( ".datepicker" ).datepicker();


      
      $(`#colorButton${taskID}`).click(function() {
        let id = taskID;
    
        $(this).parent().parent().colorize();
      });


      //Incriment taskID for taskCards
      taskID ++;

      //Activate Dialog Button 
      $( ".dialog-button" ).on( "click", function() {
        let classId =  $(this).prop('id');
        $("." + classId).dialog("open").effect("pulsate");

      });

      


    

    });

    
    
  




      
    
    });
  


