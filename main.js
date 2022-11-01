//task 1
let lab1 = [5, 5, 0, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab4_5 = [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 5];
let lab6 = [5, 5, 10, 5, 5, 10];
let lab8 = [5, 10, 10, 10 ,5];
let quiz1 = 38;

//

function main(lab1, lab2, lab3, lab4_5, lab6, lab8) { 
	function get_sum(lab) { 
		let sum_for_this_lab = 0;
		for (let i = 0; i < lab.length; i++) {
			sum_for_this_lab = sum_for_this_lab + lab[i];
		}
		return sum_for_this_lab; 
	}
	sum1= get_sum(lab1);
	sum2= get_sum(lab2);
	sum3= get_sum(lab3);
	sum4_5= get_sum(lab4_5);
	sum6= get_sum(lab6);
	sum8= get_sum(lab8);

	const results = {
		lab1: lab1,
		lab2: lab2,
		lab3: lab3,
		lab4_5: lab4_5,
		lab6: lab6,
		lab8: lab8,
		quiz1: quiz1,
		sums: [sum1, sum2, sum3, sum4_5, sum6, sum8],
		total_score: 0.4*((quiz1*100)/40)+ 0.1*(((sum1*100)/40) + ((sum2*100)/40) + ((sum3*100)/40) + ((sum4_5*100)/80) +((sum6*100)/40) + ((sum8*100)/40)),
	}
return results; 
}

console.log(main(lab1, lab2, lab3, lab4_5, lab6, lab8));




