import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.APP_USER,
    pass: process.env.APP_PASS,
  },
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  trustedOrigins: [process.env.APP_URL!],
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      const verificationURL = `${process.env.APP_URL}/verify-email?token=${token}`;
      await transporter.sendMail({
        from: `"Prisma Blog" <${process.env.APP_USER}>`, // sender address
        to: user.email,
        subject: "Verify your email address",
        text: `Click the link to verify your email: ${url}`,
        html: `
  <div style="font-family: Arial, sans-serif; padding: 30px; background-color: #f5f5f5;">
    <div style="
      max-width: 600px;
      margin: 0 auto;
      padding: 30px;
      background-color: #ffffff;
      border-radius: 10px;
    ">
      <h2 style="color: #111827;">
        Verify Your Email Address
      </h2>

      <p style="color: #4b5563; line-height: 1.6;">
        Hello ${user.name || "there"},
      </p>

      <p style="color: #4b5563; line-height: 1.6;">
        Thanks for creating an account with Prisma Blog.
        Please click the button below to verify your email address.
      </p>

      <div style="margin: 30px 0;">
        <a
          href="${verificationURL}"
          style="
            display: inline-block;
            padding: 12px 24px;
            background-color: #111827;
            color: #ffffff;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
          "
        >
          Verify My Email
        </a>
      </div>

      <p style="color: #6b7280; font-size: 13px;">
        Or copy and paste this link into your browser:
      </p>

      <p style="word-break: break-all;">
        <a
          href="${verificationURL}"
          style="color: #2563eb;"
        >
          ${verificationURL}
        </a>
      </p>

      <p style="color: #9ca3af; font-size: 12px; margin-top: 25px;">
        If you didn't create an account with Prisma Blog,
        you can safely ignore this email.
      </p>
    </div>
  </div>
`,
      });
    },
  },
});
