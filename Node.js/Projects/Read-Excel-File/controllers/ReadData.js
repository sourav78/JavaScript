import xlsx from 'xlsx'

const readDataFromExcel = (req, res) => {
    
    const excelSheet = xlsx.readFile('assets/bgmi.xlsx')
    let workbook_sheet = excelSheet.SheetNames

    let excelData = xlsx.utils.sheet_to_json(
        excelSheet.Sheets[workbook_sheet[0]]
    )

    res.status(200).json({
        data: excelData
    })
}

export {readDataFromExcel}