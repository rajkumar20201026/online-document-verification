import React, { useEffect, useState } from 'react';
import fireDB from '../storage';


const Uploadfile = () => {

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = async () => {
    console.log(selectedFile)
    const fileRef = fireDB.storage().ref().child(`PDF Folder-3/important`).child(`${selectedFile.name}`)
    await fileRef.put(selectedFile, alert(`${selectedFile.name} Uploded Successfully 👍👍👍`), (err) => {
      if (err) {
        console.log(err);
      }
    })
  };


  return (
    <div>
      <h1>Upload Document</h1>
      <div className="input-upload">
        <input type="file" class="custom-file-input" name="file" onChange={changeHandler} />

        {/* <p className="input-text">Drag and Drop the File here</p> */}
        {isFilePicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{' '}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p className="display-input">Select a file to show details</p>
        )}
      </div>
      <div>
        <button className="btn_1" onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  )
}

export default Uploadfile;
