import formidable from "formidable";
import { readFileSync } from "fs";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const data = await new Promise(function (resolve, reject) {
      const form = new formidable.IncomingForm({ keepExtensions: true });
      form.parse(req, function (err, fields, files) {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    const { name, email, number, message } = data.fields;

    let msg = {
      to: process.env.EMAIL_ADDRESS,
      from: "kontakt@pmplusbud.pl",
      replyTo: email,
      templateId: process.env.TEMPLATE_ID,
      dynamicTemplateData: {
        name,
        email,
        number,
        message,
      },
      attachments: [],
    };

    const filesArr = Object.keys(data.files);

    for (let index = 0; index < filesArr.length; index++) {
      const file = filesArr[index];
      const fileToSend = data.files[file];
      const content = readFileSync(fileToSend.path).toString("base64");
      msg.attachments.push({
        content,
        filename: fileToSend.name,
        type: fileToSend.type,
        disposition: "attachment",
        contentId: file,
      });
    }

    await sgMail.send(msg);
    res.json({ success: true });
  } catch (e) {
    res.json({ success: false, e: e.message });
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};
