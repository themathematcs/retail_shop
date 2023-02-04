const searchinput = document.querySelector("[data-search]")

searchinput.addEventListener("input", (e) => {
    const value = e.target.value
    console.log(value)
})

