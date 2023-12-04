let arr = [1, 2, 3, 0, -4, 5]
let sum = 0 
for(let i of arr){
	if(i < 0)
		break
	else
		sum += i
}

console.log(sum)