import { RequestHandler } from 'express';
import client from '../../twilio';

const service = process.env.VERIFY_SERVICE_SID!;

export const startVerify: RequestHandler = async (req, res) => {
  // TODO
  const { phone, locale } = req.body;

  client.verify
    .services(service)
    .verifications.create({
      locale,
      channel: 'sms',
      to: phone,
    })
    .then((verification) => {
      console.log(`Sent verification: '${verification.sid}'`);
      res.status(200).send({ success: true });
    })
    .catch((error) => {
      console.log(error);
      res.status(error.status).send({
        success: false,
        message: error.message,
      });
    });
};

export const checkVerify: RequestHandler = async (req, res) => {
  // TODO
  const { phone, code } = req.body;

  client.verify
    .services(service)
    .verificationChecks.create({
      code,
      to: phone,
    })
    .then((check) => {
      if (check.status === 'approved') {
        res.status(200).send({
          success: true,
          message: 'Verification success.',
        });
      } else {
        res.status(401).send({
          success: false,
          message: 'Incorrect token.',
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(error.status).send({
        success: false,
        message: error.message,
      });
    });
};
