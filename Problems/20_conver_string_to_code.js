// Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e


const input = "Every developer likes to mix kubernetes and javascript"

const code = input.split(" ").map( (str) => {
    return str[0]+(str.length-2)+str[str.length-1]
}).join(" ")

console.log(code);