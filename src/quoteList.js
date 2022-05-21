export function quoteList() {
    const quotes = [
        {
        quote: "Nem sempre meu sorriso significa felicidade, do mesmo modo que meu choro não significa tristesa.",
        speaker: "Nami Swan"
        },
        {
        quote: 'É o meu sonho e não me importo de morrer por ele.',
        speaker: 'Monkey D. Luffy'
        },
        {
            quote: 'Se você não pode mudar seu destino, mude sua atitude.',
            speaker: 'Roronoa Zoro'
        },
        {
            quote: 'O segredo é... Não depender de ninguém.',
            speaker: 'Roronoa Zoro'
        },
        {
            quote: 'Se não arriscarmos, não criamos o futuro.',
            speaker: 'Monkey D. Luffy'
        },
        {
            quote: 'As pessoas não são reconhecidas pelo seu rosto, e sim pelo seu coração.',
            speaker: 'Sanji'
        },
        {
            quote: 'Será que eu merecia ter nascido? O que eu queria era uma resposta para essa pergunta.',
            speaker: 'Portgas D. Ace'
        },
        {
            quote: 'Nenhum Deus ou Diabo irá chegar  á aqueles que não lutam por eles mesmos...',
            speaker: 'Brook'
        },
        {
            quote: 'Conhecendo tanto a derrota quanto a votória, andando por ai derramando lágrimas, é assim que você se torna um verdadeiro homem',
            speaker: 'Shanks'
        },      
        {
            quote: 'O sonho das pessoas nunca morrerá!',
            speaker: 'Gol D. Roger'
        }
    ];
    let quoteSelected = Math.floor(Math.random() * quotes.length)
    return quotes[quoteSelected]
}
