import {S3Client} from "@aws-sdk/client-s3";

const s3 = new S3Client({
    region: process.env.AMAZON_REGION,
    credentials: {
        accessKeyId: process.env.AMAZON_ACCESS_KEY!, 
        secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY!,
    }
});

export default s3; 