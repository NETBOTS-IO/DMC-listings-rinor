// SubmitButton.jsx
import React from 'react';
import Button from '@mui/material/Button';
import * as XLSX from 'xlsx';

const SubmitButton = ({ formData }) => {
    const handleGenerateExcel = ({ formData }) => {
        // Create a new workbook
        const wb = XLSX.utils.book_new();

        // Convert the form data to a worksheet
        if (formData) {
            const ws = XLSX.utils.json_to_sheet([formData]);
            // Rest of your code
        } else {
            console.error('formData is undefined or null');
        }
        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(wb, ws, 'PropertyData');

        // Generate a timestamp for the file name
        const timestamp = new Date().toLocaleString().replace(/[^a-zA-Z0-9]/g, '');

        // Add the timestamp to the file name
        const fileName = `property_listing_data_${timestamp}.xlsx`;

        // Generate the Excel file with the updated file name
        XLSX.writeFile(wb, fileName);
    };

    return (
        <div>
            <Button 
            variant="contained" 
            color="primary" 
            onClick={() => console.log(formData)}
            style={{ margin: '10px', float: 'right' }}
            >
                Submit Data
            </Button>
            <Button 
            variant="contained" 
            color="primary" 
            onClick={handleGenerateExcel}
            style={{ margin: '10px', float: 'right' }}
            >
                Generate Excel
            </Button>
        </div>
    );
};

export default SubmitButton;
