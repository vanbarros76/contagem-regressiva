function countdown(endDate) { /* à partir da data final começa a fazer a contagem */
    let days, hours, minutes, seconds;

    endDate = new Date(endDate).getTime(); /* pega a data e transforma em milisegundos com getTime*/

    if (isNaN(endDate)) { /* Verificação Not a Number retorna um booleano; verifica se é um número válido */
        return;
    }

    setInterval(calculate, 1000) // função de eventos, espera-se uma função e um valor (em milisegundos: para 1 segundo, passo 1000 milisegundos) => setInterval(function, 1000)

    function calculate() {
        let startDate = new Date().getTime();

        let timeRemaining = parseInt((endDate - startDate) / 1000); /* atualização da data de seundo em segundo, divide por 1000 para ter certeza que terei o tempo em segundos, parseInt para garantir que a informação dada é um número */

        if (timeRemaining >= 0) {

            //24h*60m*60s = 86400 (número de segundos em 1 dia)

            //Calcula o número de dias restantes
            days = parseInt(timeRemaining / 86400); // parte inteira; hora inteira
            timeRemaining = (timeRemaining % 86400); // tempo restante; resto da divisão

            //Calcula o número de horas restantes
            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);

            //Calcula o número de minutos restantes
            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);

            //Calcula o número de segundos restantes
            seconds = parseInt(timeRemaining);

            console.log(days, hours, minutes, seconds)

            document.getElementById("days").innerHTML = pad(days, 2);
            document.getElementById("hours").innerHTML = pad(hours, 2);
            document.getElementById("minutes").innerHTML = pad(minutes, 2);
            document.getElementById("seconds").innerHTML = pad(seconds, 2);

        } else {
            return;
        }
    }
} 

// é uma função ternária (utilizadas apenas em condições simples retornos simples), que significa que se a condição return for satisfeita, então retorne 'alguma coisa'; os : siginifica o 'se não', então ele retorna outra coisa
function pad(n, width) { // a função pad vai colocar um número à esquerda, se ele for do tamanho de 1; então, recebe o número e o tamanho desejado => (n, width)
    n = n.toString(); // toString transforma o número em string pra ver o tamanho dele
    return (n.length >= width) ? n : '0' + n; // se o tamanho da string for maior ou igual ao número passado (2, neste caso), então, vai retornar n, se não, pega o número 0 e concatena com a função
    // ou return é a mesma coisa que:
    // if(n.length >= width){
    //    return n
    //} else {
    //    return '0' + n;
    //}
}

countdown('2024-11-16T23:59:59')
//2024-11-16T23:59:59