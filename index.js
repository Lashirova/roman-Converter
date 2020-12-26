function convertToRoman(num) {
 var romanToNum = {
     M: 1000,
     CM: 900,
     D:500,
     CD:400,
     C:100,
     XC: 90,
     L:50,
     XL:40,
     X:10,
     IX:9,
     V:5,
     IV:4,
     III:3,
     II:2,
     I:1
 };
 var romanV = "";
 for(var key in romanToNum){
    while(num>=romanToNum[key]){
        romanV+= key;
        num-=romanToNum[key];
     
    }
 }
 return romanV;
}

convertToRoman(36);