var recipes = {pasta:"pound", sauce:"vodka", cheese: "parm"};


  function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
  }
  
function deleteFromObjectByKey(object, key) {
 Object.assign({}, object, key)
  return Object;
}

//the above already work

function DestructivelyDeleteFromObjectByKey(object, key) {
  
}