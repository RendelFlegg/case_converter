function getString() {
    return document.querySelector('textarea').value
}

function separateAndCapitalize(text, sep) {
    let parts = text.split(sep);
    for (let i = 0; i < parts.length; i++) {
        parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].substring(1).toLowerCase();
    }
    return parts.join(sep);
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("upper-case").addEventListener("click", function() {
    document.querySelector("textarea").value = getString().toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function() {
    document.querySelector("textarea").value = getString().toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function() {
    document.querySelector("textarea").value = separateAndCapitalize(getString(), " ");
});

document.getElementById("sentence-case").addEventListener("click", function() {
    document.querySelector("textarea").value = separateAndCapitalize(getString(), ". ");
});

document.getElementById("save-text-file").addEventListener("click", function() {
    download("text.txt", getString());
});