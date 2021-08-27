const Answers = ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'];
const form = document.querySelector('form');
const result = document.querySelector('p');
const scoreSection = document.querySelector('.score');
console.log(result);
const span = result.querySelector('span');
console.log(span);
form.addEventListener('submit', e => {
    e.preventDefault();
    let  score = 0;
    let formAnswers = [form.q1.value, form.q2.value, form.q3.value,
                       form.q4.value, form.q5.value, form.q6.value,
                       form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    formAnswers.forEach((value, index) => {
        if (value === Answers[index])
            score += 10;
    })
    scrollTo(0, 0);
    scoreSection.classList.remove('d-none');
    
    let output = 0;
    const timer = setInterval(() => {
        span.innerText = `${output}`;
        if (output === score)
            clearInterval(timer);
        else
            output++;
    },)
   
},01);