import xlsx from 'xlsx'

const writeDataInFile = (req, res) => {
    const excelSheet = xlsx.readFile('assets/bgmi.xlsx')

    const insertData = [
        {
            "sl": 199,
            "roll_no": "03BSC2124",
            "uname": "Kama sahoo",
            "clg": "Creative techno",
            "class": "BSC 5th sem",
            "phone": 4585548558,
            "bgmi": 2
        },
        {
            "sl": 200,
            "roll_no": "03BCA2124",
            "uname": "Dama sahoo",
            "clg": "Creative techno",
            "class": "BCA 5th sem",
            "phone": 7452565441,
            "bgmi": 5
        }
    ]

    try {
        const sheetData = xlsx.utils.json_to_sheet(insertData)
        xlsx.utils.book_append_sheet(excelSheet, sheetData)

        xlsx.writeFile(excelSheet, 'assets/bgmi.xlsx')

        res.json({
            success: true,
        })
    } catch (error) {
        res.json({
            success: true,
        })
    }
}

export {
    writeDataInFile
}