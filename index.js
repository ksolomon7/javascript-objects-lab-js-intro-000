function updateObjectWithKeyAndValue(object,key,value){
  let newObj= Object.assign({},object,{[key]:value});
  return newObj;
}
