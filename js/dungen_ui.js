// UI elements

function bindButtons() {
  var redrawButton = document.getElementById("redraw");
  redrawButton.addEventListener("click", function() { DG.network.redraw(); } );
  
  var regenerateButton = document.getElementById("regenerate");
  regenerateButton.addEventListener("click", function() { DG.digDungeon("dungeon"); } );
  
  var wildsButton = document.getElementById("wilds");
  wildsButton.addEventListener("click", function() { DG.digDungeon("wilds"); } );
  
  var moveTableButton = document.getElementById("move_table");
  moveTableButton.addEventListener("click", function() { 
     var keyStyle = document.getElementById("dungeon_key").style.display
	 if (keyStyle == "none"){ 
	   document.getElementById("dungeon_key").style.display = "block";
       document.getElementById("dungeon_key_for_printing").style.display = "none";
       document.getElementById("move_table").innerHTML ="Move Table for Printing"; 
	 }
	 else { 
	   document.getElementById("dungeon_key").style.display = "none";
       document.getElementById("dungeon_key_for_printing").style.display = "block"; 
	   document.getElementById("move_table").innerHTML = "Move Table Back"; 
	 };

	 false;
	});
  
  var saveButton = document.getElementById("save");
  saveButton.addEventListener("click", function() { DG.saveDungeon(); } );
  
  var loadButton = document.getElementById("load");
  loadButton.addEventListener("click", function() { DG.loadDungeon(); } );
  
  var deleteButton = document.getElementById("delete");
  deleteButton.addEventListener("click", function() { DG.deleteDungeon(); } );
  
  var exportButton = document.getElementById("export");
  exportButton.addEventListener("click", function() { DG.exportDungeon(); } );
  
  var importButton = document.getElementById("import");
  importButton.addEventListener("click", function() { DG.importDungeon(); } );
  
  var themeButton = document.getElementById("theme");
    themeButton.addEventListener("click", function() { 
      DG.themeBox(); 
  });
  
  var keyButton = document.getElementById("scroll-to-key");
  keyButton.addEventListener("click", function() { DG.scrollToKey(); $(this).hide(); $("#scroll-to-top").show(); } );

  var topButton = document.getElementById("scroll-to-top");
  topButton.addEventListener("click", function() { DG.scrollToTop(); $(this).hide(); $("#scroll-to-key").show();} );
  
  var replaceButton = document.getElementById("replace");
  replaceButton.addEventListener("click", function() { 
    var textFrom = $('#text_from').val();
    var textTo = $('#text_to').val();
    DG.replaceText(textFrom, textTo);  return false; } );

  $('#notes').change(function(){ DG.data.notes = $(this).val()});
  $("#notes").on("clearText", function(){$(this).val('');});
 
};

function populateUI(){
  DG.populateSavedSelect();
}
