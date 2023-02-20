const createIntIp = (ipStr) => {
  const ipArr = ipStr.split('.');
  if(ipArr.length !== 4){
    throw new Error('Ip address is wrong:' + ipStr);
  }
  const resultString =  ipArr.reduce((pre,cur) => {
    if(Number(cur).toString(16) !== "NaN"){
      const hex = Number(cur).toString(16);
      return `${pre}${hex.length === 1 ? '0':''}${hex}`;
    }else{
      throw new Error('Ip address is wrong:' + ipStr);
    }
  },'0x');
  return Number(resultString);
}

module.exports = {
  createIntIp
}