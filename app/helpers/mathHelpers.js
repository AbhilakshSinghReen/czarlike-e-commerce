export const convertIntegerToIndianLocaleString = (x) => {
  if (x === undefined) {
    return "";
  }

  //var x=12345678;
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  //alert(res);
  return res;
};
