/*

// Create a file input element
const fileInput = document.createElement('input');
fileInput.type = 'file';

// Add an event listener to handle file selection
fileInput.addEventListener('change', function(event) {
  const file = event.target.files[0];

  // Use a FileReader to read the file content
  const reader = new FileReader();
  reader.onload = function(event) {
    const fileContent = event.target.result;
    console.log(fileContent);
  };
  reader.readAsText(file);
});

// Programmatically trigger a click on the file input element
//fileInput.click();





//////////////////////////////////////////////
//////////////////////////////////////////////

function writeFile(filename, content) {
  const errorHandler = function (err) {
    console.error('Error writing file:', err);
  };

  window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

  window.requestFileSystem(
    window.TEMPORARY,
    content.length,
    function (fs) {
      fs.root.getFile(
        filename,
        { create: true },
        function (fileEntry) {
          fileEntry.createWriter(
            function (fileWriter) {
              fileWriter.onwriteend = function () {
                //console.log('File successfully written.');
              };

              fileWriter.onerror = errorHandler;

              const blob = new Blob([content], { type: 'text/plain' });

              fileWriter.write(blob);
            },
            errorHandler
          );
        },
        errorHandler
      );
    },
    errorHandler
  );
}

// Usage
const fileContent = 'Hello, World!';
const fileName = 'example.txt';
writeFile(fileName, fileContent);




//////////////////////////////////////////////
//////////////////////////////////////////////




*/


/*
	WAYS TO READ AND WRITE DATA FROM A FILE
	
	const myObject = { name: 'John', age: 30 };
localStorage.setItem('myKey', JSON.stringify(myObject));

const myObject = JSON.parse(localStorage.getItem('myKey'));

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

To use the Blob object, you can create a new Blob with the JSON string as the parameter and then create a temporary URL that can be used to download the file:

const myObject = { name: 'John', age: 30 };
const data = JSON.stringify(myObject);
const blob = new Blob([data], { type: 'application/json' });
const url = window.URL.createObjectURL(blob);

// Use the URL to download the file
window.location.href = url;



/////////////////////////////////////////////////
Use a fetch() function. Basically something like:

fetch("theFile.txt") .then( (data)=>myDiv.innerHTML = data; )

I'm doing this on my phone so the syntax might not be exactly right but it's more or less like that.

The ,then() is because it's an async function; it won't write till it gets the data.

The above would go in the function called by the setInterval().

/////////////////////////////////////////////////////////////////////////

var fs = require("fs");
console.log("Going to write into existing file");

// Open a new file with name input.txt and write Simply Easy Learning! to it.
fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) {
   console.log("Data written successfully!");
   console.log("Let's read newly written data");

   // Read the newly written file and print all of its content on the console
   fs.readFile('input.txt', function (err, data) {
      console.log("Asynchronous read: " + data.toString());
   });
});



	
*/