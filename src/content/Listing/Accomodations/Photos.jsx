import React, { useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handlePhotoUpload = (newPhotos) => {
        // Validate the number and size of selected photos
        const isValid = validatePhotos(newPhotos);
        if (!isValid) {
            setErrorMessage('Please select at least one photo, and ensure each photo is under 5 MB.');
            return;
        }

        setPhotos([...photos, ...newPhotos]);
    };

    const validatePhotos = (selectedPhotos) => {
        if (selectedPhotos.length === 0) {
            return false;
        }

        for (const photo of selectedPhotos) {
            if (photo.size > 5 * 1024 * 1024) {
                return false;
            }
        }

        return true;
    };

    const handleRemovePhoto = (index) => {
        const updatedPhotos = [...photos];
        updatedPhotos.splice(index, 1);
        setPhotos(updatedPhotos);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
                Photos
            </Typography>
            <DropzoneArea
                acceptedFiles={['image/*']}
                filesLimit={5} // You can adjust the limit as needed
                onChange={handlePhotoUpload}
            />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <div>
                {photos.map((photo, index) => (
                    <div key={index}>
                        <img
                            src={URL.createObjectURL(photo)}
                            alt={`Photo ${index + 1}`}
                            style={{ maxWidth: '100px', maxHeight: '100px' }}
                        />
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => handleRemovePhoto(index)}
                        >
                            Remove
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Photos;
