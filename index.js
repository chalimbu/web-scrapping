const PORT=8000

const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const bob = express()

const url = "https://www.theguardian.com/international"

const page=axios(url).then((r)=>{
    const html=r.data
    const $ = cheerio.load(html)
    const articles = []

    $('.fc-container__header__title',html).each(function(){//todas las que tienen la clase
        const title=$(this).text() // el text inside
        const url=$(this).find('a').attr('href') // encontrar etiqueda a y el href value
        articles.push({
            title,
            url
        })
    })
    console.log(articles)
}).catch(e => console.log)

bob.listen(PORT, () => console.log(`server running on port ${PORT}`))