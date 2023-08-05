

async function cadastrar(event) {
    event.preventDefault()

    const elogio = document.getElementById("elogio").value
    console.log(elogio)

    const url = `http://localhost:3303/cadastro`

    var resp = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            elogio: elogio
        }),

    })
    console.log(elogio)
}