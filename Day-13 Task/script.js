const inputVal = "#example || @name && user_email 7895";
const sym=['#','@','||','&&'];     //,'!=','+','-','*','/','%'];
const symName=['intent','entity','OR','AND'];      //,'NOT Equal','Add','Minus','Multiply','Remainder','Quotient'];
let outVal=[];
let arrVal=inputVal.split(' ');
arrVal.map((val)=>{
     let obj={};
     if(+val){
          obj.type='number',
          obj.value=val
     }
     else{
          let symb=sym.filter((sym,i)=>{
               return val.includes(sym)
          });
          let name=symName[sym.indexOf(symb[0])];
          if (name) {
               switch (name) {
                    case 'intent':
                                   obj.type='intent',
                                   obj.value=val.slice(1,val.length);
                                   break;
                    case 'entity':
                                   obj.type='entity',
                                   obj.value=val.slice(1,val.length);
                                   break;
                    default:
                                   obj.type='operator',
                                   obj.value=name;
                                   break;
               }
               
          }
          else{
               obj.type='variable',
               obj.value=val
          }
     }
     outVal.push(obj);
})
console.log(outVal);