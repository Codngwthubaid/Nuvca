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

        const transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            secure: true, // true for port 465, false for other ports
            auth: {
                user: `${email}`,
                pass: process.env.password,
            },
        });

        const mailInfo = await transporter.sendMail({
            from: `${email}`, // sender address
            to: "codngwthubaid@gmail.com", // list of receivers
            subject: emailType === "VERIFY" ? "Verify your email..." : "Reset your Password", // Subject line
            text: "Hello world?", // plain text body
            html: `<p> Click <a href ="${process.env.DOMAIN}/verifyemail=${hashToken}">here</a> to ${emailType === "VERIFY" ? "Verify your email" : "reset your password"}
            orr copy paste the link below in your browser <br> ${process.env.DOMAIN}/verifyemail=${hashToken}
            </p>` // html body
        });

        const mailResponse = await transporter.sendMail(mailInfo)
        return mailResponse

    } catch (error) {
        throw new Error(error.message);

    }
}