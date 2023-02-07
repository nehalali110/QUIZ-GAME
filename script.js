const questions = [
    {
        'question': "I have three apples. If you take away two from me, how many do you have?",
        'a': "1",
        'b': "0",
        'c': "3",
        'd': "2",
        'correct': 'd',
        'Explanation': '2 because you took two apples'
        
    },
    {
        'question': "A doctor gives you three pills telling you to take one every half hour. How long would the pills last?",
        'a': "90 mins",
        'b': "40 mins",
        'c': "60 mins",
        'd': "10 mins",
        'correct': 'c',
        'Explanation': '60 mins because first pill you ate now then 2 pills after half hour'
    },
    {
        'question': 'Which one is correct? “Penguins flies” or “A Penguin flies.”',
        'a': "Penguins flies",
        'b': "A Penguin flies",
        'c': "Both",
        'd': "None",
        'correct': 'd',
        'Explanation' : 'None, Have you seen a Penguin flying?'
    },
    {
        'question' : "If you divide 30 by half and add ten, what do you get?",
        'a': "25",
        'b': "70",
        'c': "60",
        'd': "10",
        'correct': 'b',
        'Explanation':'70 because 30*0.5+10 = 70'
    },
    {
        'question': 'If it takes eight men ten hours to build a wall, how long would it take four men?',
        'a': "5 hours",
        'b': "3 hours",
        'c': "0 hours",
        'd': "20 hours",
        'correct': 'c',
        'Explantion': '0 , The wall is already built'
    }
]


let index = 0
let correct = 0
const question = document.getElementById('questionHeading')
const opt1 = document.getElementById('opt1')
const opt2 = document.getElementById('opt2')
const opt3 = document.getElementById('opt3')
const opt4 = document.getElementById('opt4')
const nextBtn = document.getElementById('nextBtn')
const previousBtn = document.getElementById('previousBtn')
let container = document.querySelector('.container')
let right = 0
let wrong = 0
let total = questions.length
let input = document.querySelectorAll('input')
input = [...input]
let options = []
options.push(opt1,opt2,opt3,opt4)


const reset = ()=>{
    input.forEach((inputEl)=>{
        inputEl.checked = false
    })
}

const renderQuestion = ()=>{
    if(index === questions.length){
        getResult()
    }
    if(index <0){
        return
    }
    reset()
    question.innerHTML = questions[index]['question']
    options[0].innerText = questions[index]['a']
    options[1].innerText = questions[index]['b']
    options[2].innerText = questions[index]['c']
    options[3].innerText = questions[index]['d']
    
}

renderQuestion()

const getAnswer = ()=>{
    let ans;
    input.forEach((inputEl)=>{
        if(inputEl.checked){
            ans = inputEl.value
        }
    })
    return ans
}




nextBtn.addEventListener('click',()=>{
    let data = questions[index]
    let ans = getAnswer()
    if(ans===data.correct){
        right++
    } else{
        wrong++
    }
    index++
    renderQuestion()
        
})


previousBtn.addEventListener('click',()=>{
    index--
    renderQuestion()
})



const getResult = ()=>{
    
    container.innerHTML = 
        `<div style="display:flex; flex-direction:column; justify-content:center; align-items:center;">
            <div>Your score is ${right}/${total}</div>
        </div>`
    
    if(right <= 1){
        container.innerHTML += `<div>Better luck Next Time</div>`
    }
    else{
        container.innerHTML += `<div>You did it Champ!</div>`
    }
}


