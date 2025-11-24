const fs = require('fs')
const path = require('path')
const https = require('https')

const publicWorkerPath = path.join(process.cwd(), 'public', 'pdf.worker.min.js')

// Download worker from unpkg (more reliable than cdnjs)
const workerUrl = 'https://unpkg.com/pdfjs-dist@5.4.394/build/pdf.worker.min.mjs'

console.log('📥 Baixando PDF worker...')

https.get(workerUrl, (response) => {
  if (response.statusCode === 200) {
    const fileStream = fs.createWriteStream(publicWorkerPath)
    response.pipe(fileStream)
    fileStream.on('finish', () => {
      fileStream.close()
      console.log('✅ PDF worker baixado e salvo em public/pdf.worker.min.js')
    })
  } else {
    console.error('❌ Erro ao baixar worker:', response.statusCode)
    process.exit(1)
  }
}).on('error', (err) => {
  console.error('❌ Erro ao baixar worker:', err.message)
  process.exit(1)
})

