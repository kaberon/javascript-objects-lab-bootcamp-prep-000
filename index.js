var recipes = {pasta:"pound", sauce:"vodka", cheese: "parm"};


  function updateObjectWithKeyAndValue(object, key, value) {
 
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return Object;
  }
  
function deleteFromObjectByKey(object, key) {
 Object.assign({}, object, key)
  return Object;
}

//the above already work

function DestructivelyDeleteFromObjectByKey(object, key) {
  
}