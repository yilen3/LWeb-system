import express from 'express';
import fs from 'fs'
const app = express()
const prot = 3000

app.get('./useEcharts.json', (req, res) => {
  fs.readFileSync('./useEcharts.json', 'utf-8')
})

app.post('/', (req, res) => {
  // res.send('Hello World!')
})


app.listen(prot, () => {
  console.log('开启服务')
})

