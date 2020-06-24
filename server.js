const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

const cards = require('./data-cards')
const layout = require('./data-layout')


server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
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
    return res.render("courses", { cards} )
})

server.use((req, res) => {
    res.status(404).render("not-found")
})


server.listen(7000, () => {
    console.log("server online")
})