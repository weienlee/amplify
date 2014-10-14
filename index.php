<!DOCTYPE html>
<html>
  <head>
    <title><Amplify></title>
    <link rel="stylesheet" href="css/style.css" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="js/jquery.autosize.min.js"></script>
    <script type="text/javascript" src="js/JavaScriptSpellCheck/include.js" ></script>
    <script src="js/Chart.min.js"></script>
    <script src="js/script.js"></script>
  </head>
  <body>
    
    <h1>Spellcheck</h1>
    <div id="page_container">
      <div id="textarea_container">
	<textarea id="textarea" placeholder="Insert paragraph here..." spellcheck="true"></textarea>
	<button id="check_button">Check Spelling</button>
	<div id="error_list_container">
	  <h2>Misspelled Words</h2>
	  <ul id="error_list"></ul>
	</div>

      </div>
      <div class="chart_container">
	<h2>Number of Mispellings</h2>
	<canvas id="chart1" width="300px" height="300px"></canvas>
      </div>
      <div class="chart_container">
	<h2>Mispellings by Word Length</h2>
	<canvas id="chart2" width="300px" height="300px"></canvas>
      </div>
    </div>
  </body>
</html>
