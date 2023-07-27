import AWS from "aws-sdk";

const s3 = new AWS.S3({
    accessKeyId: process.env.AMAZON_ACCESS_KEY, 
    secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
    region: process.env.AMAZON_REGION,
});

export default s3; 