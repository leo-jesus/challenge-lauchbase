const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

const cards = require('./data-cards')

server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", (req, res) => {
    const about = {
        avatar_url: 'https://yt3.ggpht.com/a/AGF-l7_gRI0RdRC_VNg535o0C21ltP0eTFhi4rjRmw=s240-c-k-c0xffffffff-no-rj-mo',
        name: 'Rocketseat',
        description: `<h2>A menor distância entre você e seus objetivos...</h2>
            <p>No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém
            que te leve na direção certa.</p>`
    }

    return res.render("about", { about })
})

server.get("/courses", (req, res) => {
    return res.render("courses", { cards })
})

server.get("/courses/:id", function (req, res) {
    const id = req.params.id;
    const course = cards.find((course) => {
        if (course.id == id)
            return true
    })

    if (!course) {
        return res.render("not-found")
    }
    return res.render("course", { card: course })
})


server.use((req, res) => {
    res.status(404).render("not-found")
})


server.listen(7000, () => {
    console.log("server online")
})