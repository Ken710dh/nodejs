module.exports = {
  blankItem: function (arr, perRow){
    let length = arr.length;
    if (length % perRow !== 0) {
      let blankItems = perRow - (length % perRow);
      for (let i = 0; i < blankItems; i++) {
        arr.push({ blank: true });
      }
    }
    return arr;
  }
}