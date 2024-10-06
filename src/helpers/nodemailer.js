import nodemailer from "nodemailer"
import User from "@/models/userModel"
import bcryptjs from "bcryptjs"

export const sendMail = async ({ email, emailType, userID }) => {
    try {
        if (emailType === "VERIFY") {
            const hashToken = await bcryptjs.hash(userID.toString(), 10)
            await User.findByIdAndUpdate(userID,
                {
                    verifyToken: hashToken,
                    verifyTokenExpiry: new Date() + 600
                }
            )
        }
        else if (emailType === "RESET") {
            const hashToken = await bcryptjs.hash(userID.toString(), 10)
            await User.findByIdAndUpdate(userID,
                {
                    forgotPasswordToken: hashToken,
                    forgotPasswordExpiry: new Date() + 600
                }
            )
        }

        var transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "78b6ca7c841f26",
              pass: "2e5b02e72a87d9"
            }
          });

        const mailInfo = await transporter.sendMail({
            from: "codngwthubaid@gmail.com",
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email..." : "Reset your Password",
            text: "Hello world?",
            html: `<p> Click <a href ="${process.env.DOMAIN}/verifyemail=${hashToken}">here</a> to ${emailType === "VERIFY" ? "Verify your email" : "reset your password"}
            orr copy paste the link below in your browser <br> ${process.env.DOMAIN}/verifyemail=${hashToken}
            </p>`
        });

        const mailResponse = await transporter.sendMail(mailInfo)
        return mailResponse

    } catch (error) {
        throw new Error(error.message);

    }
}