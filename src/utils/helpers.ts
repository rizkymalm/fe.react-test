export async function findObj(array: any, attr: any, value: any) {
  var result = -1;
  for (var i = 0; i < array.length; i += 1) {
    if (Array.isArray(array[i][attr])) {
      if (array[i][attr].indexOf(value) !== -1) {
        result = i;
      }
    } else {
      if (array[i][attr] === value) {
        result = i;
      }
    }
  }
  return result;
}
