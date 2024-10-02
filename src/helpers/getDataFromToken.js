import jwt from "jsonwebtoken"

export const getDataFromToken = (request) => {
    try {
        const Token = request.cookies.get("Token")?.value || "";
        const decodedToken = jwt.verify(Token, process.env.TOKEN_SECRET);

        return decodedToken.id
    } catch (error) {
        throw new Error(error.message);
    }
}
