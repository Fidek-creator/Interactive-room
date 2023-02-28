/**
 * Generated by Verge3D Puzzles v.4.1.1
 * Tue, 28 Feb 2023 17:35:41 GMT
 * Prefer not editing this file as your changes may get overridden once Puzzles are saved.
 * Check out https://www.soft8soft.com/docs/manual/en/introduction/Using-JavaScript.html
 * for the information on how to add your own JavaScript to Verge3D apps.
 */

'use strict';

(function() {

// global variables/constants used by puzzles' functions

var LIST_NONE = '<none>';

var _pGlob = {};

_pGlob.objCache = {};
_pGlob.fadeAnnotations = true;
_pGlob.pickedObject = '';
_pGlob.hoveredObject = '';
_pGlob.mediaElements = {};
_pGlob.loadedFile = '';
_pGlob.states = [];
_pGlob.percentage = 0;
_pGlob.openedFile = '';
_pGlob.openedFileMeta = {};
_pGlob.xrSessionAcquired = false;
_pGlob.xrSessionCallbacks = [];
_pGlob.screenCoords = new v3d.Vector2();
_pGlob.intervalTimers = {};
_pGlob.customEvents = new v3d.EventDispatcher();

_pGlob.AXIS_X = new v3d.Vector3(1, 0, 0);
_pGlob.AXIS_Y = new v3d.Vector3(0, 1, 0);
_pGlob.AXIS_Z = new v3d.Vector3(0, 0, 1);
_pGlob.MIN_DRAG_SCALE = 10e-4;
_pGlob.SET_OBJ_ROT_EPS = 1e-8;

_pGlob.vec2Tmp = new v3d.Vector2();
_pGlob.vec2Tmp2 = new v3d.Vector2();
_pGlob.vec3Tmp = new v3d.Vector3();
_pGlob.vec3Tmp2 = new v3d.Vector3();
_pGlob.vec3Tmp3 = new v3d.Vector3();
_pGlob.vec3Tmp4 = new v3d.Vector3();
_pGlob.eulerTmp = new v3d.Euler();
_pGlob.eulerTmp2 = new v3d.Euler();
_pGlob.quatTmp = new v3d.Quaternion();
_pGlob.quatTmp2 = new v3d.Quaternion();
_pGlob.colorTmp = new v3d.Color();
_pGlob.mat4Tmp = new v3d.Matrix4();
_pGlob.planeTmp = new v3d.Plane();
_pGlob.raycasterTmp = new v3d.Raycaster();

var PL = v3d.PL = v3d.PL || {};

// a more readable alias for PL (stands for "Puzzle Logic")
v3d.puzzles = PL;

PL.procedures = PL.procedures || {};




PL.execInitPuzzles = function(options) {
    // always null, should not be available in "init" puzzles
    var appInstance = null;
    // app is more conventional than appInstance (used in exec script and app templates)
    var app = null;

    var _initGlob = {};
    _initGlob.percentage = 0;
    _initGlob.output = {
        initOptions: {
            fadeAnnotations: true,
            useBkgTransp: false,
            preserveDrawBuf: false,
            useCompAssets: false,
            useFullscreen: true,
            useCustomPreloader: false,
            preloaderStartCb: function() {},
            preloaderProgressCb: function() {},
            preloaderEndCb: function() {},
        }
    }

    // provide the container's id to puzzles that need access to the container
    _initGlob.container = options !== undefined && 'container' in options
            ? options.container : "";

    

    
    return _initGlob.output;
}

PL.init = function(appInstance, initOptions) {

// app is more conventional than appInstance (used in exec script and app templates)
var app = appInstance;

initOptions = initOptions || {};

if ('fadeAnnotations' in initOptions) {
    _pGlob.fadeAnnotations = initOptions.fadeAnnotations;
}

this.procedures["zmienMebel"] = zmienMebel;
this.procedures["zmien właściwości lodowki"] = zmien_w_C5_82a_C5_9Bciwo_C5_9Bci_lodowki;
this.procedures["zmien właściwości naroznika"] = zmien_w_C5_82a_C5_9Bciwo_C5_9Bci_naroznika;
this.procedures["zmien wlasciwosci zlewu"] = zmien_wlasciwosci_zlewu;
this.procedures["zmien właściwości kredensy"] = zmien_w_C5_82a_C5_9Bciwo_C5_9Bci_kredensy;
this.procedures["zmien wlasciwosci sofy"] = zmien_wlasciwosci_sofy;

var lista_Obiektow, Lodowki, Zlewy, Naro_C5_BCniki, Kredensy, Stoly, Krzesla, Sofy, Komody, aktualnie_wybrany_ID, warto_C5_9B_C4_87, LodowkaID, NaroznikID, ZlewID, KredensID, StolID, KrzeslaID, SofaID, KomodaID;

// utility function envoked by almost all V3D-specific puzzles
// filter off some non-mesh types
function notIgnoredObj(obj) {
    return obj.type !== 'AmbientLight' &&
           obj.name !== '' &&
           !(obj.isMesh && obj.isMaterialGeneratedMesh) &&
           !obj.isAuxClippingMesh;
}


// utility function envoked by almost all V3D-specific puzzles
// find first occurence of the object by its name
function getObjectByName(objName) {
    var objFound;
    var runTime = _pGlob !== undefined;
    objFound = runTime ? _pGlob.objCache[objName] : null;

    if (objFound && objFound.name === objName)
        return objFound;

    if (appInstance.scene) {
        appInstance.scene.traverse(function(obj) {
            if (!objFound && notIgnoredObj(obj) && (obj.name == objName)) {
                objFound = obj;
                if (runTime) {
                    _pGlob.objCache[objName] = objFound;
                }
            }
        });
    }
    return objFound;
}


// utility function envoked by almost all V3D-specific puzzles
// retrieve all objects on the scene
function getAllObjectNames() {
    var objNameList = [];
    appInstance.scene.traverse(function(obj) {
        if (notIgnoredObj(obj))
            objNameList.push(obj.name)
    });
    return objNameList;
}


// utility function envoked by almost all V3D-specific puzzles
// retrieve all objects which belong to the group
function getObjectNamesByGroupName(targetGroupName) {
    var objNameList = [];
    appInstance.scene.traverse(function(obj){
        if (notIgnoredObj(obj)) {
            var groupNames = obj.groupNames;
            if (!groupNames)
                return;
            for (var i = 0; i < groupNames.length; i++) {
                var groupName = groupNames[i];
                if (groupName == targetGroupName) {
                    objNameList.push(obj.name);
                }
            }
        }
    });
    return objNameList;
}


// utility function envoked by almost all V3D-specific puzzles
// process object input, which can be either single obj or array of objects, or a group
function retrieveObjectNames(objNames) {
    var acc = [];
    retrieveObjectNamesAcc(objNames, acc);
    return acc.filter(function(name) {
        return name;
    });
}

function retrieveObjectNamesAcc(currObjNames, acc) {
    if (typeof currObjNames == "string") {
        acc.push(currObjNames);
    } else if (Array.isArray(currObjNames) && currObjNames[0] == "GROUP") {
        var newObj = getObjectNamesByGroupName(currObjNames[1]);
        for (var i = 0; i < newObj.length; i++)
            acc.push(newObj[i]);
    } else if (Array.isArray(currObjNames) && currObjNames[0] == "ALL_OBJECTS") {
        var newObj = getAllObjectNames();
        for (var i = 0; i < newObj.length; i++)
            acc.push(newObj[i]);
    } else if (Array.isArray(currObjNames)) {
        for (var i = 0; i < currObjNames.length; i++)
            retrieveObjectNamesAcc(currObjNames[i], acc);
    }
}

// show and hide puzzles
function changeVis(objSelector, bool) {
    var objNames = retrieveObjectNames(objSelector);

    for (var i = 0; i < objNames.length; i++) {
        var objName = objNames[i]
        if (!objName)
            continue;
        var obj = getObjectByName(objName);
        if (!obj)
            continue;
        obj.visible = bool;
        obj.resolveMultiMaterial().forEach(function(objR) {
            objR.visible = bool;
        });
    }
}

// outline puzzle
function outline(objSelector, doWhat) {
    var objNames = retrieveObjectNames(objSelector);

    if (!appInstance.postprocessing || !appInstance.postprocessing.outlinePass)
        return;
    var outlineArray = appInstance.postprocessing.outlinePass.selectedObjects;
    for (var i = 0; i < objNames.length; i++) {
        var objName = objNames[i];
        var obj = getObjectByName(objName);
        if (!obj)
            continue;
        if (doWhat == "ENABLE") {
            if (outlineArray.indexOf(obj) == -1)
                outlineArray.push(obj);
        } else {
            var index = outlineArray.indexOf(obj);
            if (index > -1)
                outlineArray.splice(index, 1);
        }
    }
}

// utility functions envoked by the HTML puzzles
function getElements(ids, isParent) {
    var elems = [];
    if (Array.isArray(ids) && ids[0] != 'CONTAINER' && ids[0] != 'WINDOW' &&
        ids[0] != 'DOCUMENT' && ids[0] != 'BODY' && ids[0] != 'QUERYSELECTOR') {
        for (var i = 0; i < ids.length; i++)
            elems.push(getElement(ids[i], isParent));
    } else {
        elems.push(getElement(ids, isParent));
    }
    return elems;
}

function getElement(id, isParent) {
    var elem;
    if (Array.isArray(id) && id[0] == 'CONTAINER') {
        if (appInstance !== null) {
            elem = appInstance.container;
        } else if (typeof _initGlob !== 'undefined') {
            // if we are on the initialization stage, we still can have access
            // to the container element
            var id = _initGlob.container;
            if (isParent) {
                elem = parent.document.getElementById(id);
            } else {
                elem = document.getElementById(id);
            }
        }
    } else if (Array.isArray(id) && id[0] == 'WINDOW') {
        if (isParent)
            elem = parent;
        else
            elem = window;
    } else if (Array.isArray(id) && id[0] == 'DOCUMENT') {
        if (isParent)
            elem = parent.document;
        else
            elem = document;
    } else if (Array.isArray(id) && id[0] == 'BODY') {
        if (isParent)
            elem = parent.document.body;
        else
            elem = document.body;
    } else if (Array.isArray(id) && id[0] == 'QUERYSELECTOR') {
        if (isParent)
            elem = parent.document.querySelector(id);
        else
            elem = document.querySelector(id);
    } else {
        if (isParent)
            elem = parent.document.getElementById(id);
        else
            elem = document.getElementById(id);
    }
    return elem;
}

// eventHTMLElem puzzle
function eventHTMLElem(eventType, ids, isParent, callback) {
    var elems = getElements(ids, isParent);
    for (var i = 0; i < elems.length; i++) {
        var elem = elems[i];
        if (!elem)
            continue;
        elem.addEventListener(eventType, callback);
        if (v3d.PL.editorEventListeners)
            v3d.PL.editorEventListeners.push([elem, eventType, callback]);
    }
}

/**
 * Retrieve coordinate system from the loaded scene
 */
function getCoordSystem() {
    var scene = appInstance.scene;

    if (scene && 'coordSystem' in scene.userData) {
        return scene.userData.coordSystem;
    }

    return 'Y_UP_RIGHT';
}


/**
 * Transform coordinates from one space to another
 * Can be used with Vector3 or Euler.
 */
function coordsTransform(coords, from, to, noSignChange) {

    if (from == to)
        return coords;

    var y = coords.y, z = coords.z;

    if (from == 'Z_UP_RIGHT' && to == 'Y_UP_RIGHT') {
        coords.y = z;
        coords.z = noSignChange ? y : -y;
    } else if (from == 'Y_UP_RIGHT' && to == 'Z_UP_RIGHT') {
        coords.y = noSignChange ? z : -z;
        coords.z = y;
    } else {
        console.error('coordsTransform: Unsupported coordinate space');
    }

    return coords;
}


/**
 * Verge3D euler rotation to Blender/Max shortest.
 * 1) Convert from intrinsic rotation (v3d) to extrinsic XYZ (Blender/Max default
 *    order) via reversion: XYZ -> ZYX
 * 2) swizzle ZYX->YZX
 * 3) choose the shortest rotation to resemble Blender's behavior
 */
var eulerV3DToBlenderShortest = function() {

    var eulerTmp = new v3d.Euler();
    var eulerTmp2 = new v3d.Euler();
    var vec3Tmp = new v3d.Vector3();

    return function(euler, dest) {

        var eulerBlender = eulerTmp.copy(euler).reorder('YZX');
        var eulerBlenderAlt = eulerTmp2.copy(eulerBlender).makeAlternative();

        var len = eulerBlender.toVector3(vec3Tmp).lengthSq();
        var lenAlt = eulerBlenderAlt.toVector3(vec3Tmp).lengthSq();

        dest.copy(len < lenAlt ? eulerBlender : eulerBlenderAlt);
        return coordsTransform(dest, 'Y_UP_RIGHT', 'Z_UP_RIGHT');
    }

}();

// tweenCamera puzzle
function tweenCamera(posOrObj, targetOrObj, duration, doSlot, movementType) {
    var camera = appInstance.getCamera();

    if (Array.isArray(posOrObj)) {
        var worldPos = _pGlob.vec3Tmp.fromArray(posOrObj);
        worldPos = coordsTransform(worldPos, getCoordSystem(), 'Y_UP_RIGHT');
    } else if (posOrObj) {
        var posObj = getObjectByName(posOrObj);
        if (!posObj) return;
        var worldPos = posObj.getWorldPosition(_pGlob.vec3Tmp);
    } else {
        // empty input means: don't change the position
        var worldPos = camera.getWorldPosition(_pGlob.vec3Tmp);
    }

    if (Array.isArray(targetOrObj)) {
        var worldTarget = _pGlob.vec3Tmp2.fromArray(targetOrObj);
        worldTarget = coordsTransform(worldTarget, getCoordSystem(), 'Y_UP_RIGHT');
    } else {
        var targObj = getObjectByName(targetOrObj);
        if (!targObj) return;
        var worldTarget = targObj.getWorldPosition(_pGlob.vec3Tmp2);
    }

    duration = Math.max(0, duration);

    if (appInstance.controls && appInstance.controls.tween) {
        // orbit and flying cameras
        if (!appInstance.controls.inTween) {
            appInstance.controls.tween(worldPos, worldTarget, duration, doSlot,
                    movementType);
        }
    } else {
        // TODO: static camera, just position it for now
        if (camera.parent) {
            camera.parent.worldToLocal(worldPos);
        }
        camera.position.copy(worldPos);
        camera.lookAt(worldTarget);
        doSlot();
    }
}

// Describe this function...
function zmienMebel(lista_Obiektow, aktualnie_wybrany_ID, warto_C5_9B_C4_87) {
  console.log(lista_Obiektow.length);
  changeVis(lista_Obiektow[aktualnie_wybrany_ID], false);
  aktualnie_wybrany_ID = aktualnie_wybrany_ID + warto_C5_9B_C4_87;
  if (aktualnie_wybrany_ID < 0) {
    aktualnie_wybrany_ID = lista_Obiektow.length - 1;
  }
  if (aktualnie_wybrany_ID >= lista_Obiektow.length) {
    aktualnie_wybrany_ID = 0;
  }
  changeVis(lista_Obiektow[aktualnie_wybrany_ID], true);
  zmien_w_C5_82a_C5_9Bciwo_C5_9Bci_lodowki();
  zmien_wlasciwosci_zlewu();
  zmien_w_C5_82a_C5_9Bciwo_C5_9Bci_kredensy();
  zmien_w_C5_82a_C5_9Bciwo_C5_9Bci_lodowki();
  zmien_w_C5_82a_C5_9Bciwo_C5_9Bci_naroznika();
  zmien_wlasciwosci_sofy();
  return aktualnie_wybrany_ID;
}

// assignMaterial puzzle
function assignMat(objSelector, matName) {
    var objNames = retrieveObjectNames(objSelector);
    if (!matName)
        return;
    var mat = v3d.SceneUtils.getMaterialByName(appInstance, matName);
    if (!mat)
        return;
    for (var i = 0; i < objNames.length; i++) {
        var objName = objNames[i];
        if (!objName)
            continue;
        var obj = getObjectByName(objName);
        if (obj) {
            var firstSubmesh = obj.resolveMultiMaterial()[0];
            firstSubmesh.material = mat;
        }
    }
}

// getHTMLElemAttribute puzzle
function getHTMLElemAttribute(attr, id, isParent) {
    var elem = getElement(id, isParent);
    return elem ? elem[attr]: '';
}

function setMorphFactor(objName, targetName, factor) {

    if (objName && targetName) {
        var obj = getObjectByName(objName);
        if (obj) {
            obj.resolveMultiMaterial().forEach(function(objR) {
                if (objR.morphTargetDictionary && targetName in objR.morphTargetDictionary) {
                    var idx = objR.morphTargetDictionary[targetName];
                    objR.morphTargetInfluences[idx] = Number(factor);
                }
            });

            obj.resolveMultiMaterial().forEach(function(objR) {
                objR.getAuxClippingMeshes().forEach(function(objC) {
                    if (objC.morphTargetDictionary && targetName in objC.morphTargetDictionary) {
                        var idx = objC.morphTargetDictionary[targetName];
                        objC.morphTargetInfluences[idx] = Number(factor);
                    }
                });
            });
        }
    }

}

// Describe this function...
function zmien_w_C5_82a_C5_9Bciwo_C5_9Bci_lodowki() {
  eventHTMLElem('click', 'salon', false, function(event) {
    tweenCamera('Kamera.pozycja.salon', 'Kamera.kierunek.salon', 2, function() {}, 1);
  });
  eventHTMLElem('click', 'kuchnia', false, function(event) {
    tweenCamera('Kamera.pozycja.kuchnia', 'Kamera.kierunek.kuchnia', 2, function() {}, 1);
  });
  eventHTMLElem('click', 'back', false, function(event) {
    tweenCamera('Kamera.pozycja.stol', 'Kamera.kierunek.stol', 2, function() {}, 1);
  });
  eventHTMLElem('click', 'Kuchnia-Lodówka-0-Kolor-599BE7', false, function(event) {
    assignMat('lodowka.moja', 'Niebieski_lodowka');
  });
  eventHTMLElem('click', 'Kuchnia-Lodówka-0-Kolor-E70500', false, function(event) {
    assignMat('lodowka.moja', 'Czerwona_lodowka');
  });
  eventHTMLElem('click', 'Kuchnia-Lodówka-0-Kolor-2BE73E', false, function(event) {
    assignMat('lodowka.moja', 'Zielona_lodowka');
  });
  eventHTMLElem('click', 'Kuchnia-Narożnik-0-Kolor blatu-007500', false, function(event) {
    assignMat('naroznik.moj.blat', 'Zielony_top_naroznik');
  });
  eventHTMLElem('click', 'Kuchnia-Narożnik-0-Kolor blatu-C0C0C0', false, function(event) {
    assignMat('naroznik.moj.blat', 'Bialy_top_naroznik');
  });
  eventHTMLElem('input', 'Kuchnia-Lodówka-0-Wysokość', false, function(event) {
    setMorphFactor('lodowka.moja', 'lodowka.wysokosc', getHTMLElemAttribute('value', 'Kuchnia-Lodówka-0-Wysokość', false) / 100);
  });
  eventHTMLElem('input', 'Kuchnia-Lodówka-0-Szerokość', false, function(event) {
    setMorphFactor('lodowka.moja', 'lodowka.szerokosc', getHTMLElemAttribute('value', 'Kuchnia-Lodówka-0-Szerokość', false) / 100);
  });
}

// Describe this function...
function zmien_w_C5_82a_C5_9Bciwo_C5_9Bci_naroznika() {
  eventHTMLElem('click', 'Kuchnia-Narożniki-0-Kolor blatu-007500', false, function(event) {
    assignMat('naroznik.moj.blat', 'Zielony_top_naroznik');
  });
  eventHTMLElem('click', 'Kuchnia-Narożniki-0-Kolor blatu-C0C0C0', false, function(event) {
    assignMat('naroznik.moj.blat', 'Bialy_top_naroznik');
  });
  eventHTMLElem('click', 'Kuchnia-Narożniki-0-Kolor blatu-000000', false, function(event) {
    assignMat('naroznik.moj.blat', 'Czarny_top_naroznik');
  });
  eventHTMLElem('click', 'Kuchnia-Narożniki-0-Kolor frontu-964B00', false, function(event) {
    assignMat('naroznik.moj.baza', 'Drewno.1');
    assignMat('naroznik.moj.dol', 'Drewno.1');
  });
  eventHTMLElem('click', 'Kuchnia-Narożniki-0-Kolor frontu-C0C0C0', false, function(event) {
    assignMat('naroznik.moj.baza', 'Drewno.2');
    assignMat('naroznik.moj.dol', 'Drewno.2');
  });
  eventHTMLElem('click', 'Kuchnia-Narożniki-0-Kolor frontu-000000', false, function(event) {
    assignMat('naroznik.moj.baza', 'Drewno.3');
    assignMat('naroznik.moj.dol', 'Drewno.3');
  });
}

// Describe this function...
function zmien_wlasciwosci_zlewu() {
  eventHTMLElem('click', 'Kuchnia-Zlew-0-Kolor frontu-964B00', false, function(event) {
    assignMat('zlew.moj.baza', 'Drewno.1');
    assignMat('zlew.moj.dol', 'Drewno.1');
  });
  eventHTMLElem('click', 'Kuchnia-Zlew-0-Kolor frontu-C0C0C0', false, function(event) {
    assignMat('zlew.moj.baza', 'Drewno.2');
    assignMat('zlew.moj.dol', 'Drewno.2');
  });
  eventHTMLElem('click', 'Kuchnia-Zlew-0-Kolor frontu-000000', false, function(event) {
    assignMat('zlew.moj.baza', 'Drewno.3');
    assignMat('zlew.moj.dol', 'Drewno.3');
  });
}

// Describe this function...
function zmien_w_C5_82a_C5_9Bciwo_C5_9Bci_kredensy() {
  eventHTMLElem('click', 'Kuchnia-Kredensy-0-Kolor blatu-007500', false, function(event) {
    assignMat('kredens.moj.blat', 'Zielony_top_naroznik');
  });
  eventHTMLElem('click', 'Kuchnia-Kredensy-0-Kolor blatu-C0C0C0', false, function(event) {
    assignMat('kredens.moj.blat', 'Bialy_top_naroznik');
  });
  eventHTMLElem('click', 'Kuchnia-Kredensy-0-Kolor blatu-000000', false, function(event) {
    assignMat('kredens.moj.blat', 'Czarny_top_naroznik');
  });
  eventHTMLElem('click', 'Kuchnia-Kredensy-0-Kolor frontu-964B00', false, function(event) {
    assignMat('kredens.moj.baza', 'Drewno.1');
    assignMat('kredens.moj.dol', 'Drewno.1');
  });
  eventHTMLElem('click', 'Kuchnia-Kredensy-0-Kolor frontu-C0C0C0', false, function(event) {
    assignMat('kredens.moj.baza', 'Drewno.2');
    assignMat('kredens.moj.dol', 'Drewno.2');
  });
  eventHTMLElem('click', 'Kuchnia-Kredensy-0-Kolor frontu-000000', false, function(event) {
    assignMat('kredens.moj.baza', 'Drewno.3');
    assignMat('kredens.moj.dol', 'Drewno.3');
  });
}

// Describe this function...
function zmien_wlasciwosci_sofy() {
  eventHTMLElem('click', 'Salon-Sofa-0-Kolor sofy-706461', false, function(event) {
    assignMat('sofa.moja', 'sofa.moja.szara');
  });
  eventHTMLElem('click', 'Salon-Sofa-0-Kolor sofy-304E70', false, function(event) {
    assignMat('sofa.moja', 'sofa.moja.niebieska');
  });
  eventHTMLElem('click', 'Salon-Sofa-0-Kolor sofy-70353C', false, function(event) {
    assignMat('sofa.moja', 'sofa.moja.czerwona');
  });
  eventHTMLElem('click', 'Salon-Sofa-0-Kolor poduszek-706461', false, function(event) {
    assignMat('poduszki', 'sofa.moja.szara');
  });
  eventHTMLElem('click', 'Salon-Sofa-0-Kolor poduszek-304E70', false, function(event) {
    assignMat('poduszki', 'sofa.moja.niebieska');
  });
  eventHTMLElem('click', 'Salon-Sofa-0-Kolor poduszek-70353C', false, function(event) {
    assignMat('poduszki', 'sofa.moja.czerwona');
  });
}


lista_Obiektow = [Lodowki, Naro_C5_BCniki, Zlewy, Kredensy, Krzesla, Stoly, Sofy, Komody];

Lodowki = ['lodowka.moja', 'lodowka.1', 'lodowka.2', 'lodowka.3'];
changeVis(Lodowki, false);
LodowkaID = 0;
changeVis(Lodowki[LodowkaID], true);
eventHTMLElem('mouseover', 'Lodówka', false, function(event) {
  outline(Lodowki, 'ENABLE');
});
eventHTMLElem('mouseout', 'Lodówka', false, function(event) {
  outline(Lodowki, 'DISABLE');
});
eventHTMLElem('click', 'Lodówka', false, function(event) {
  tweenCamera('Kamera.pozycja.lodowka', 'Kamera.kierunek.lodowka', 2, function() {}, 1);
});

Zlewy = [['zlew.moj.baza', 'zlew.moj', 'zlew.moj.dol', 'zlew.moj.uchwyty'], 'Zlew'];
changeVis(Zlewy, false);
ZlewID = 0;
changeVis(Zlewy[ZlewID], true);
eventHTMLElem('mouseover', 'Zlew', false, function(event) {
  outline(Zlewy, 'ENABLE');
});
eventHTMLElem('mouseout', 'Zlew', false, function(event) {
  outline(Zlewy, 'DISABLE');
});
eventHTMLElem('click', 'Zlew', false, function(event) {
  tweenCamera('Kamera.kuchnia.pozycja.glowna', 'okno.kuchnia', 2, function() {}, 1);
});

Naro_C5_BCniki = [['naroznik.moj.baza', 'naroznik.moj.blat', 'naroznik.moj.dol'], 'narozniki.1'];
changeVis(Naro_C5_BCniki, false);
NaroznikID = 0;
changeVis(Naro_C5_BCniki[NaroznikID], true);
eventHTMLElem('mouseover', 'Narożniki', false, function(event) {
  outline(Naro_C5_BCniki, 'ENABLE');
});
eventHTMLElem('mouseout', 'Narożniki', false, function(event) {
  outline(Naro_C5_BCniki, 'DISABLE');
});
eventHTMLElem('click', 'Narożniki', false, function(event) {
  tweenCamera('Kamera.kuchnia.pozycja.glowna', 'noże', 2, function() {}, 1);
});

Kredensy = [['kredens.moj.baza', 'kredens.moj.blat', 'kredens.moj.dol', 'kredens.moj.uchwyty'], 'kredensy.1'];
changeVis(Kredensy, false);
KredensID = 0;
changeVis(Kredensy[KredensID], true);
eventHTMLElem('mouseover', 'Kredensy', false, function(event) {
  outline(Kredensy, 'ENABLE');
});
eventHTMLElem('mouseout', 'Kredensy', false, function(event) {
  outline(Kredensy, 'DISABLE');
});
eventHTMLElem('click', 'Kredensy', false, function(event) {
  tweenCamera('Kamera.kuchnia.pozycja.glowna', 'Kamera.pozycja.lodowka', 2, function() {}, 1);
});

Stoly = ['stol.kuchnia.1', 'stol.kuchnia.2', 'stol.kuchnia.3'];
changeVis(Stoly, false);
StolID = 0;
changeVis(Stoly[StolID], true);
eventHTMLElem('mouseover', 'Stół', false, function(event) {
  outline(Stoly, 'ENABLE');
});
eventHTMLElem('mouseout', 'Stół', false, function(event) {
  outline(Stoly, 'DISABLE');
});
eventHTMLElem('click', 'Stół', false, function(event) {
  tweenCamera('Kamera.pozycja.stol', 'Kamera.kierunek.stol', 2, function() {}, 1);
});

Krzesla = ['krzesla.1', 'krzesla.2', 'krzesla.3'];
changeVis(Krzesla, false);
KrzeslaID = 0;
changeVis(Krzesla[KrzeslaID], true);
eventHTMLElem('mouseover', 'Krzesła', false, function(event) {
  outline(Krzesla, 'ENABLE');
});
eventHTMLElem('mouseout', 'Krzesła', false, function(event) {
  outline(Krzesla, 'DISABLE');
});
eventHTMLElem('click', 'Krzesła', false, function(event) {
  tweenCamera('Kamera.pozycja.stol', 'Kamera.kierunek.stol', 2, function() {}, 1);
});

Sofy = [['sofa.moja', 'poduszki', 'nogi'], 'sofa.1', 'sofa.2'];
changeVis(Sofy, false);
SofaID = 0;
changeVis(Sofy[SofaID], true);
eventHTMLElem('mouseover', 'Sofa', false, function(event) {
  outline(Sofy, 'ENABLE');
});
eventHTMLElem('mouseout', 'Sofa', false, function(event) {
  outline(Sofy, 'DISABLE');
});
eventHTMLElem('click', 'Sofa', false, function(event) {
  tweenCamera('Kamera.pozycja.kuchnia', 'Kamera.kierunek.sofa', 2, function() {}, 1);
});

Komody = ['komoda.1', 'Komoda.2', 'komoda.3'];
changeVis(Komody, false);
KomodaID = 0;
changeVis(Komody[KomodaID], true);
eventHTMLElem('mouseover', 'Komoda', false, function(event) {
  outline(Komody, 'ENABLE');
});
eventHTMLElem('mouseout', 'Komoda', false, function(event) {
  outline(Komody, 'DISABLE');
});
eventHTMLElem('click', 'Komoda', false, function(event) {
  tweenCamera('Kamera.pozycja.kuchnia', 'Kamera.kierunek.komoda', 2, function() {}, 1);
});

zmien_w_C5_82a_C5_9Bciwo_C5_9Bci_lodowki();
zmien_wlasciwosci_zlewu();
zmien_w_C5_82a_C5_9Bciwo_C5_9Bci_kredensy();
zmien_w_C5_82a_C5_9Bciwo_C5_9Bci_lodowki();
zmien_w_C5_82a_C5_9Bciwo_C5_9Bci_naroznika();
zmien_wlasciwosci_sofy();

eventHTMLElem('click', 'salon', false, function(event) {
  tweenCamera('Kamera.pozycja.salon', 'Kamera.kierunek.salon', 2, function() {}, 1);
});
eventHTMLElem('click', 'kuchnia', false, function(event) {
  tweenCamera('Kamera.pozycja.kuchnia', 'Kamera.kierunek.kuchnia', 2, function() {}, 1);
});
eventHTMLElem('click', 'back', false, function(event) {
  tweenCamera('Kamera.pozycja.stol', 'Kamera.kierunek.stol', 2, function() {}, 1);
});

eventHTMLElem('click', 'Kuchnia.Lodówka.prev', false, function(event) {
  LodowkaID = zmienMebel(Lodowki, LodowkaID, -1);
});
eventHTMLElem('click', 'Kuchnia.Lodówka.next', false, function(event) {
  LodowkaID = zmienMebel(Lodowki, LodowkaID, 1);
});

eventHTMLElem('click', 'Kuchnia.Narożniki.prev', false, function(event) {
  NaroznikID = zmienMebel(Naro_C5_BCniki, NaroznikID, -1);
});
eventHTMLElem('click', 'Kuchnia.Narożniki.next', false, function(event) {
  NaroznikID = zmienMebel(Naro_C5_BCniki, NaroznikID, 1);
});

eventHTMLElem('click', 'Kuchnia.Zlew.prev', false, function(event) {
  ZlewID = zmienMebel(Zlewy, ZlewID, -1);
});
eventHTMLElem('click', 'Kuchnia.Zlew.next', false, function(event) {
  ZlewID = zmienMebel(Zlewy, ZlewID, 1);
});

eventHTMLElem('click', 'Kuchnia.Kredensy.prev', false, function(event) {
  KredensID = zmienMebel(Kredensy, KredensID, -1);
});
eventHTMLElem('click', 'Kuchnia.Kredensy.next', false, function(event) {
  KredensID = zmienMebel(Kredensy, KredensID, 1);
});

eventHTMLElem('click', 'Kuchnia.Stół.prev', false, function(event) {
  StolID = zmienMebel(Stoly, StolID, -1);
});
eventHTMLElem('click', 'Kuchnia.Stół.next', false, function(event) {
  StolID = zmienMebel(Stoly, StolID, 1);
});

eventHTMLElem('click', 'Kuchnia.Krzesła.prev', false, function(event) {
  KrzeslaID = zmienMebel(Krzesla, KrzeslaID, -1);
});
eventHTMLElem('click', 'Kuchnia.Krzesła.next', false, function(event) {
  KrzeslaID = zmienMebel(Krzesla, KrzeslaID, 1);
});

eventHTMLElem('click', 'Salon.Sofa.prev', false, function(event) {
  SofaID = zmienMebel(Sofy, SofaID, -1);
});
eventHTMLElem('click', 'Salon.Sofa.next', false, function(event) {
  SofaID = zmienMebel(Sofy, SofaID, 1);
});

eventHTMLElem('click', 'Salon.Komoda.prev', false, function(event) {
  KomodaID = zmienMebel(Komody, KomodaID, -1);
});
eventHTMLElem('click', 'Salon.Komoda.next', false, function(event) {
  KomodaID = zmienMebel(Komody, KomodaID, 1);
});



} // end of PL.init function

})(); // end of closure

/* ================================ end of code ============================= */
