Hexatouch
=========

##Description
Browser-Based demonstration of the multitouch table application.

##Dependencies

To run and develop Hexatouch you need:

* [Node-Webkit](https://github.com/rogerwang/node-webkit)
* [node.js](https://nodejs.org)
* The [Jade](https://github.com/visionmedia/jade) Templating Engine
* [Tuio.js](https://github.com/fe9lix/Tuio.js)
* [CCV](http://nuicode.com/projects/tbeta/files) (CommunityCoreVision)


##Executing:

###Linux&Mac
 - Start the simulator at ```TUIO-Workfiles/TUIO_Simulator/TuioSimulator.jar```
 - Run the WebSocket-Service with ```node network/Tuio.js/src/server.js```
 - Start the app with node-webkit ```nw ./app/```
Now you can test the application with the TuioSimulator, you can change the angle of the objects(fiducials) by selecting them with right-click and scrolling up or down. We have a custom css for the object number 8.


##Hacking:
We have the following structure:

 - index.jade
   - contains head and body tags + includes ```head.jade```, ```scripts.jade``` and ```body.jade```
 - js/
   - includes libs-folder(jQuery, lodash, socket.io, Tuio.js+Tuio.min.js)
   - the main application tuio-init.js
   - tuio-init.js opens the socket connection, writes, updates and removes the div+classes&ids to the body
 - css/
   - blobs.css - css for the background-, touchpoint- and object-styling.
   - main.css - css for removing escaping objects

 - img/
   - not used yet, will be used for graphics(svg, png)

 - package.json(used by node-webkit) controls:
   - Browser-Window-size
   - Main-HTML-File
   - Fullscreen(kiosk)-mode enabled
   - maintainers
   - licence

PS: Code is managed by ```git```, see ```git log``` for the commit logs.


##Known issues:
There are some issues:
 - Sometimes a blob won't be removed(needs reload)
 - ...


##Licence
GPLv3
