var recipes = {pasta:"pound", sauce:"vodka", cheese: "parm"};


  function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
  }
  
//the above already work

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object, key)
  return Object;
}