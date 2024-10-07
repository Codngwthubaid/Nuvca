import nodemailer from "nodemailer"
import User from "@/models/userModel"
import bcryptjs from "bcryptjs"

export const sendMail = async ({ email, emailType, userID }) => {
    try {
        const hashToken = await bcryptjs.hash(userID.toString(), 10)
        console.log(hashToken);
        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userID,
                {
                    verifyToken: hashToken,
                    verifyTokenExpiry: new Date() + 600
                }
            )
        }
        else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userID,
                {
                    forgotPasswordToken: hashToken,
                    forgotPasswordExpiry: new Date() + 600
                }
            )
        }

        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "54665293e14495",
                pass: "1d5102d788f957"
            }
        });

        const mailInfo = await transporter.sendMail({
            from: "codngwthubaid@gmail.com",
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email..." : "Reset your Password",
            text: "Hello world?",
            html: `<p> Click <a href ="${process.env.DOMAIN}/pages/VerifyEmail=${hashToken}">here</a> to ${emailType === "VERIFY" ? "Verify your email" : "reset your password"}
            orr copy paste the link below in your browser <br> ${process.env.DOMAIN}/pages/VerifyEmail=${hashToken}
            </p>`
        });

        const mailResponse = await transporter.sendMail(mailInfo)
        return mailResponse

    } catch (error) {
        console.log(error);
    }
}