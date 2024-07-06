import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, phone, first, last, message } = req.body;

    try {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const msg = {
        to: 'tarastutoringtt@gmail.com',
        from: 'tarastutoringtt@gmail.com',
        replyto: email,
        subject: `New message from ${first} ${last} ${email} ${phone}`,
        text: message,
        html: `<p>${message}</p>`,
      };

      const response = await sgMail.send(msg);
      console.log('Email sent:', response);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error.response?.body || error.message);
      res.status(error.code || 500).json({ error: error.response?.body || 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
