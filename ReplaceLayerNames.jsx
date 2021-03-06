﻿// ---------
// Cycle through all layers and ReplaceLayerNames
// 
// v_0.2
// Emil_Drahos
// 21. 9. 2016
// ---------

function replaceArtLayersName(set) {
    
    for (var li = set.artLayers.length - 1; li > -1; li--) {
        layerName = set.artLayers[li].name
        isVisible = set.artLayers[li].visible
        if (layerName.indexOf(stringToReplace) != -1) {
            set.artLayers[li].name = layerName.replace(stringToReplace, newString)
            set.artLayers[li].visible = isVisible 
        }
    }    
}

function iterateOverGroupsAndLayers(root) {
    
    replaceArtLayersName(root)

    for (var i = root.layerSets.length - 1; i > -1; i--) {
        replaceArtLayersName(root.layerSets[i])

        layerName = root.layerSets[i].name
        isVisible = root.layerSets[i].visible
        if (layerName.indexOf(stringToReplace) != -1) {
            root.layerSets[i].name = layerName.replace(stringToReplace, newString)
            root.layerSets[i].visible = isVisible 
        }

        if (root.layerSets[i].layerSets.length > 0) {
                iterateOverGroupsAndLayers(root.layerSets[i])
        }
    }    
}
// --------------- MAIN ---------------- //


$.writeln("–––––––– Start –––––––––")


#target photoshop
app.bringToFront()

var layerName = ""
var isVisible = true
    
var stringToReplace = prompt("Text, ktery se ma nahradit:");
var newString = prompt("Novy text:");

var docRef = app.activeDocument
iterateOverGroupsAndLayers(docRef)

$.writeln("–––––––– End –––––––––")
