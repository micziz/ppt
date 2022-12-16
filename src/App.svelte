<script lang="ts">
    import { chooseOptions } from "./chooseOptions.js";

    let playing = true;
    let result;

    function handleInput(userChoise: string){
        playing = false;        
        if (userChoise == "rock"){
            result = decide("rock")
        } else if(userChoise == "scissors") {
            result = decide("scissors")
        } else if(userChoise == "paper"){
            result = decide("paper")
        }
    }

    function decide(userChoise: string){
        let computerChoise = chooseOptions()
        if (userChoise === computerChoise){
            return "Empate";
        } else if (userChoise == "rock" && computerChoise == "scissors" || computerChoise == "paper" && userChoise == "scissors" || userChoise == "paper" && computerChoise == "rock") {
            return "Ganaste!";
        } else {
            return `Gano el ordenador!`
        }
    }
</script>

<main>
    <h1 class="title is-1" id="title">Piedra, Papel o Tijera</h1>
    {#if playing}
        <div id="choices">
            <button class="button is-primary is-light" id="btn3" on:click={() => {
                handleInput("rock")
            }}>
                Piedra
            </button>
    
            <button class="button is-primary is-light" id="btn3" on:click={() => {
                handleInput("paper")
            }}>
                Papel
            </button>
    
            <button class="button is-primary is-light" id="btn3" on:click={() => {
                handleInput("scissors")
            }}>
                Tijera
            </button>
        </div>
    {:else}
        <h1 class="title is-1" id="title">{result}</h1>
        <div id="choices-2">
            <button class="button is-primary is-light" on:click={() => {
                playing = true;
            }}>
                Juega Otra Vez!
            </button>
        </div>
        
    {/if}
</main>

<style>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

    #choices{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 18rem;
    }
    
    #choices-2{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3rem;
    }

    #btn3{
        margin-right: 3rem;
    }
    

    #title{
        text-align: center;
        margin-top: 3rem;
    }
</style>