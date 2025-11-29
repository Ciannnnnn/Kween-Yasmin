const letterImages = {
    "a": "letters/a.jpg",
    "b": "letters/b.jpg",
    "c": "letters/c.jpg",
    "d": "letters/d.jpg",
    "e": "letters/e.jpg",
    "f": "letters/f.jpg",
    "g": "letters/g.jpg",
    "h": "letters/h.jpg",
    "i": "letters/i.jpg",
    "j": "letters/j.jpg",
    "k": "letters/k.jpg",
    "l": "letters/l.jpg",
    "m": "letters/m.jpg",
    "n": "letters/n.jpg",
    "o": "letters/o.jpg",
    "p": "letters/p.jpg",
    "q": "letters/q.jpg",
    "r": "letters/r.jpg",
    "s": "letters/s.jpg",
    "t": "letters/t.jpg",
    "u": "letters/u.jpg",
    "v": "letters/v.jpg",
    "w": "letters/w.jpg",
    "x": "letters/x.jpg",
    "y": "letters/y.jpg",
    "z": "letters/z.jpg"
};


        function renderImages() {
            const text = document.getElementById("inputText").value.toLowerCase();
            const container = document.getElementById("images");

            container.innerHTML = "";

            for (let char of text) {
                if (letterImages[char]) {
                    const img = document.createElement("img");
                    img.src = letterImages[char];
                    img.alt = char;
                    container.appendChild(img);
                } else {
                    
                    const missing = document.createElement("div");
                    missing.innerHTML = `<p>No image for "${char}"</p>`;
                    container.appendChild(missing);
                }
            }
        }