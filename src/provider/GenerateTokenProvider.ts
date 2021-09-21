import {sign} from "jsonwebtoken";

class GenerateTokenProvider {
  async execute(userId: string) {
    const token = sign({}, "b73d3149-729d-4e01-b919-d186b1abcae2", {
      subject: userId,
      expiresIn: "20s"
    });

    return token;
  };
};

export { GenerateTokenProvider };