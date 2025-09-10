// code your solution here
function saturdayFun(activity=null){
    return `This Saturday, I want to ${activity?activity:'roller-skate'}!`
}

console.log(saturdayFun("bathe my dog"))

const mondayWork=function(activity=null){
    return `This Monday, I will ${activity?activity:"go to the office"}.`
}

const wrapAdjective=(flair="*")=>{
   return function(statement="Special"){
    return `You are ${flair}${statement}${flair}!`
   }
}
