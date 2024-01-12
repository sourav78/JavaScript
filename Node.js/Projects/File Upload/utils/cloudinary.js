// import { v2 as cloudinary } from 'cloudinary'
const { v2:cloudinary } = require('cloudinary')
const fs = require('fs')

cloudinary.config({
    cloud_name: 'sourav78',
    api_key: '616679495748689',
    api_secret: 'xqXJsq-Mitt6QJxn_hv6D9gR_C0'
});

const uploadOnCloudynary = async (localFilePath) => {

    try {
        if(!localFilePath) return null
        
        //upload the file

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        console.log("File is uploaded on cloudinary", response.url);
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        
        fs.unlinkSync(localFilePath) //unlink the file path when uploading is failed

        return null
    }

}

module.exports = {
    uploadOnCloudynary
}