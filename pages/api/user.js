export default function handler(req, res) {
    switch (req.method) {
        case 'POST':
            res.status(200).json({ name: 'Its a baby post!' })
            break
        
        case 'GET':
            res.status(200).json({ name: 'Its a baby get!' })
            break
        
        default:
            res.status(200).json({ name: 'Its a baby put probably!' })
            break
    }
  }