// Retrieving JSON Data from the JSON file

const setUp = (category, score_tag, title_tag, icon_tag) => {
    fetch ('./data.json')
        .then ((res) => res.json())
        .then((data) => {
            for (const details of data) {
                if (details.category == category) {
                    score_tag.innerHTML = details.score;
                    title_tag.innerHTML = details.category;
                    icon_tag.src = details.icon;
                }
            }
        })
        .catch ((error) => console.error(error))
}

const getData = () => {

    // Reaction Setup
    const rxn_score = document.getElementById('rxn-score');
    const rxn_icon = document.getElementById('rxn-svg');
    const rxn_title = document.getElementById('rxn-title');

    // Memory Setup
    const mem_score = document.getElementById('mem-score');
    const mem_icon = document.getElementById('mem-svg');
    const mem_title = document.getElementById('mem-title');

    // Verbal Setup
    const vbl_score = document.getElementById('vbl-score');
    const vbl_icon = document.getElementById('vbl-svg');
    const vbl_title = document.getElementById('vbl-title');

    // Visual Setup
    const vsl_score = document.getElementById('vsl-score');
    const vsl_icon = document.getElementById('vsl-svg');
    const vsl_title = document.getElementById('vsl-title');

    // Testing Functionality For Fetching Data
    setUp('Reaction', rxn_score, rxn_title, rxn_icon);
    setUp('Memory', mem_score, mem_title, mem_icon);
    setUp('Verbal', vbl_score, vbl_title, vbl_icon);
    setUp('Visual', vsl_score, vsl_title, vsl_icon);
}

const getProgress = () => {
    let total = 0;
    let average;

    for (const item of document.getElementsByClassName('left-score')) {
        total += Number.parseInt(item.innerHTML);
    }

    average = (total / 4).toFixed(0);

    const progress = document.getElementById('progress-top');

    progress.innerHTML = average;
}

setTimeout(() => getData(), 5000);
setTimeout(() => getProgress(), 10000);