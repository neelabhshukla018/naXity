const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOTPEmail = async (email, otp) => {
  await transporter.sendMail({
    from: `"naXity" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "🔐 Verify Your naXity Account",
    html: `
      <div style="
        margin:0;
        padding:0;
        background:#f5f7fb;
        font-family:Arial,sans-serif;
      ">
        <div style="
          max-width:600px;
          margin:40px auto;
          background:white;
          border-radius:20px;
          overflow:hidden;
          box-shadow:0 10px 30px rgba(0,0,0,0.08);
        ">

          <div style="
            background:linear-gradient(135deg,#2563EB,#06B6D4);
            padding:40px;
            text-align:center;
            color:black;
          ">
            <h1 style="
              margin:0;
              font-size:34px;
              font-weight:700;
            ">
              na𝕏ity
            </h1>

            <p style="
              margin-top:10px;
              opacity:0.9;
            ">
              AI-Powered Smart City Platform
            </p>
          </div>

          <div style="padding:40px;">
            <h2 style="margin-top:0;">
              Welcome to naXity 👋
            </h2>

            <p style="
              color:#475569;
              line-height:1.7;
            ">
              Thank you for joining naXity.
              Use the verification code below
              to activate your account.
            </p>

            <div style="
              text-align:center;
              margin:35px 0;
            ">
              <div style="
                display:inline-block;
                background:#EFF6FF;
                color:#2563EB;
                padding:18px 35px;
                border-radius:14px;
                font-size:34px;
                font-weight:700;
                letter-spacing:10px;
              ">
                ${otp}
              </div>
            </div>

            <p style="
              color:#475569;
              line-height:1.7;
            ">
              This verification code will expire in
              <strong>10 minutes</strong>.
            </p>

            <p style="
              color:#64748B;
              line-height:1.7;
            ">
              If you didn't create a naXity account,
              you can safely ignore this email.

            </p>

           <p style="
  color:white;
  line-height:1.8;
">
  Best Regards,<br/><br/>

  <strong>Neelabh Shukla</strong><br/>
  Founder & CEO, naXity<br/>
  AI-Powered Smart City Platform
</p>

            

            <hr style="
              border:none;
              border-top:1px solid #ffffff;
              margin:30px 0;
            " />

            <p style="
              text-align:center;
              color:#94A3B8;
              font-size:13px;
            ">
              © 2026 naXity • Smart City Intelligence Platform
            </p>
          </div>

        </div>
      </div>
    `,
  });
};

module.exports = sendOTPEmail;