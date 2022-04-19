import express, { Application } from 'express'
import { Request, Response } from 'express'

const app: Application = express()

app.get('/', (req: Request, res: Response) => {
    res.send('checkinf if npm build works fine')
})

/*
connect to instance
create key
chmod 400 keys
then:
ssh -i "~/.ssh/saws-key-pair.pem" ec2-user@ec2-18-197-75-173.eu-central-1.compute.amazonaws.com
*/

app.listen(3000, () => {
    console.log('Start aplikacji na porcie 3000!')
    console.log('checking npm run build working fine on ec2')
  })