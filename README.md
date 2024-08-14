PDF Reviewer
============
This is a simple tool to review PDF files. It is written in Python and uses the PyMuPDF library to render the PDF files. 


Prerequisites
-
This tool requires node.js and npm to be installed on your system. 
You can download and install them from the official website: https://nodejs.org/en/download/

Also required is git, which can be downloaded from https://git-scm.com/download/win.

Note these may require admin rights to install. 

Installation
------------
You can install the tool using the following command:


```shell
md pdf_reviewer
cd pdf_reviewer
npm install https://github.com/PowerLightTech/pdf_reviewer.git --save
```

Usage
-----
To use the tool, you can run the following command:

```shell
node .\node_modules\pdf_reviewer\server.js
```

This will open a window where you can review the PDF file. You can use the arrow keys to navigate through the pages 
and the mouse to select text.

Invoice PDF Reviewer Protocol
-----------------------------
This tool works with a python script that extracts the text from the PDF file. The python 
script is located in the python_scripts folder. The script package is called plt_?????????, 
and in found on GitHub at https://github.com/PowerLightTech/plt_?????????. See the README.md
file in the plt_????????? folder for more information on how to install and run the python
script.

The python script listens for a GET request on port 5000. This tool sends a GET request 
to the python script, which returns the text extracted from the PDF file as a JSON string. 
The text is then displayed as a form to allow the user to review the text.  When the user 
submits the form, the text is sent back to the python script as a POST request. The python
script then writes the text to a .csv file in the ????? folder.

<!--- this image illustrates the protocol between the PDF Reviewer and the python script.
![Protocol](InvoicePDFReviewerProtocol.PNG) --->
![Protocol](InvoicePDFReviewerProtocol.PNG)


License
-------
This tool is for authorized PLT only. See the LICENSE.txt file for more information.
