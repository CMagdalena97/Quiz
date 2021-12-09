// 1.elementy ktore musimy pobrać

// 2.Quiz będzie walidowany na submita ( bo to formularz), więc tworzymy funkcję do zarządzania quizem. Dodatkowo pozbywamy się domyślego zachowania event-submit-button

// 3.Sprawdzamy które odpowiedzi zostały zaznaczone
//  3.a Sprawdzamy czy zostały zaznaczone poprawne odpowiedzi

// 4.Sprawdzamy czy zostały zaznaczone wszystkie odpowiedzi

// 5.Wyswietlamy modalz informacja o błędzie jeśli użytkownik próbuje zakończyć quiz bez zaznaczenia wszystkich odpowiedzi

// 6.Zamykamy modal

// 7.Sprawdzamy czy wszystkie odpowiedzi zostały zaznaczone, sprawdzamy czy są poprawne i jeśli tak to podświetlamy je na zielono a jeśli nie to na czerwono

// 8. Wyświetlamy odpowiednio modal z gratulacjami lub z informacją o przegranej


const form = document.querySelector('.quiz-box')
const answers = Array.from(document.querySelectorAll('.answer'))
const allQuestions = document.querySelectorAll('.question')
const modal = document.querySelector('.modal')
const modalInfo = modal.querySelector('p')
const modalBtn = modal.querySelector('.close-modal')



const handleQuiz = (e) => {
    e.preventDefault();

    const checkedAnswers = answers.filter(answer => answer.checked)
    const isTrue = checkedAnswers.every(answer => answer.value === 'true')
    const allChecked = checkedAnswers.length === allQuestions.length
  

    if (!allChecked) {
        modal.classList.add('modal-active')
        modalInfo.textContent = 'Wybierz wszystkie odpowiedzi!'
        return
    }

    checkedAnswers.forEach(answer => {
        const checkIfCorrect= answer.value === 'true'
        const answerBox = answer.closest('.answer-box')
          
        if(checkIfCorrect){
            answerBox.classList.add('correct')
            answerBox.classList.remove('incorrect')
        } else{
            answerBox.classList.add('incorrect')
            answerBox.classList.remove('correct')
        }
        
    })

    if(isTrue && allChecked){
        modal.classList.add('modal-active')
        modalInfo.textContent = 'Brawo!!'
    } else{
        modal.classList.add('modal-active')
        modalInfo.textContent = 'Niestety przegrywasz :('
    }

    



    
    


    
    
}

const closeModal = () =>{
    modal.classList.remove('modal-active')
    
}

form.addEventListener('submit', handleQuiz)

modalBtn.addEventListener('click', closeModal)