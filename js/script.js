const localTotalVictoryField = document.getElementById('local-total-victory-field') //ruang jumlah permainan yang berhasil dimenangkan
const localMaximumAttemptField = document.getElementById('local-maximum-attempt-field') //ruang jumlah tebakan salah sekali main
const destrroyDataButton = document.getElementById('destroy-data-button') //tombol Hapus semua data

const playButton = document.getElementById('play-button'); //tombol mulai main game
const beforeGameDisplay = document.getElementById('before-game-display'); //sebelum game dimulai
const duringGameDisplay = document.getElementById('during-game-display'); //ketika game sudah dimulai
const afterGameDisplay = document.getElementById('after-game-display'); //ketika game sudah selsai

const answerButton1 = document.getElementById('answer-1-button');
const answerButton2 = document.getElementById('answer-2-button');
const answerButton3 = document.getElementById('answer-3-button'); 

const sessionUserAnswerField = document.getElementById('session-user-answer-field');
const sessionUserWrongAnswerField = document.getElementById('session-user-wrong-answer-field');
const sessionUserTrueAnswerField = document.getElementById('session-true-answer-field');
const sessionUserAttemptsField = document.getElementById('session-user-attemps-amount-field');

//inisialiasi fungsi untuk menghasilkan jawaban permainan
function getAnswer(){
    let answer = '123'.split('');
    console.log(answer);
    for(let i=0; i<answer.length; i++){
        const j = Math.round(Math.random()*(i+1)); //mengenerate angka acak untuk dijadikan indeks agar memanggil urutan angka acak
        let temp = answer[i]; //memindahkan nilai answer urutan ke i dalam variabel temp
        // console.log('ini nilai awal --> '+ answer[i], temp);
        answer[i]=answer[j];
        // console.log('setelah diganti ke j-->  '+answer[i]);
        answer[j]=temp;
        // console.log('ini nilai j--> '+answer[j]);
        // answer[i]=answer[j]; //variabel answer urutan ke i kosong, kemudian dimasukkan nilai answer urutan ke j
        // answer[j]=temp; //answer urutan ke j kosong, kemudian dimasukkan nilai temp
    }
    return answer.join('');
}

// console.log(getAnswer())

//inisialisasi key untuk session storage
const sessionAnswerKey = 'SESSION_ANSWER';
const sessionUserAttemptsKey = 'SESSION_USER_ATTEMPTS';
const sessionUserIsPlayingKey = 'SESSION_USER_IS_PLAYING';

//inisialisasi key untuk local storage
const localTotalVictoryKey = 'LOCAL_TOTAL_VICTORIES_PLAYED';
const localMaximumAttemptKey = 'LOCAL_MAXIMUM_ATTEMPTS';

//membuat event listener "load" pada object window. sehingga, ketika berkas HTML sudah selsai ditampilkan
//kita akan mengecek apakah item pada session storage maupun local storage sudah dibuat atau belum

window.addEventListener("load",function(){
    if(typeof(Storage)!== 'undefined'){
        //inisialisasi semua item storage yang akan digunakan
        if(sessionStorage.getItem(sessionAnswerKey)===null){
            sessionStorage.setItem(sessionAnswerKey,'');
        }
        if(sessionStorage.getItem(sessionUserAttemptsKey===null)){
            sessionStorage.setItem(sessionUserAttemptsKey,0);
        }
        if(sessionStorage.getItem(sessionUserIsPlayingKey===null)){
            sessionStorage.setItem(sessionUserIsPlayingKey,false);
        }
        if(localStorage.getItem(localTotalVictoryKey===null)){
            localStorage.setItem(localTotalVictoryKey,0);
        }
        if(localStorage.getItem(localMaximumAttemptKey===null)){
            localStorage.setItem(localMaximumAttemptKey,0);
        }
    }else{
        alert('Browser yang anda gunakan tidak mendukung web storage')
    }
    sessionUserAttemptsField.innerText= sessionStorage.getItem(sessionUserAttemptsKey);
    localTotalVictoryField.innerText= localStorage.getItem(localTotalVictoryKey);
    localMaximumAttemptField.innerText= localStorage.getItem(localMaximumAttemptKey);
})  