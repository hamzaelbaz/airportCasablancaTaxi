const form = document.querySelector("form"),
    nom = document.querySelector("#nom"),
    depart = document.querySelector("#depart"),
    destination = document.querySelector("#destination"),
    nombre = document.querySelector("#nombre"),
    email = document.querySelector("#email"),
    message = document.querySelector("#message"),
    dates = document.querySelector("#date")
form.addEventListener("submit", async e => {
    e.preventDefault();
    let a = nom.value,
        r = depart.value,
        t = destination.value,
        l = nombre.value,
        n = email.value,
        o = message.value,
        d = dates.value
    try {
        await axios.post("/.netlify/functions/sendEmail", {
            name: a,
            start: r,
            destinations: t,
            numbers: l,
            emails: n,
            dates: d,
            messages: o
        }), nom.value = "", depart.value = "", destination.value = "", nombre.value = "", email.value = "", message.value = "",dates.value=""
    } catch (s) {
        console.error("oups! elle y a une erreur:", s)
    }
});