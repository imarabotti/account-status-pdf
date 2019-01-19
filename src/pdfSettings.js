const { footerTemplate, headerTemplate } = require('./templates')

module.exports.pdfSettings = {
    path: '/tmp/expense.pdf',
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    margin: {
        top: '30px',
        bottom: '30px',
        right: '30px',
        left: '60px',
    },
    headerTemplate,
    footerTemplate,
    landscape: true,
}