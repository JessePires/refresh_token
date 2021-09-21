import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      message: "Token is missing"
    });
  }

  // fomato original: Bearer fljjalkj2tu2u3ojt2kj32l3jlk3j03923t
  const [, token] = authToken.split(" "); // o split resultará em apenas dois "blocos"

  try {
    verify(token, "b73d3149-729d-4e01-b919-d186b1abcae2");
    
    return next();
  } catch (err) {
    response.status(401).json({
      message: "Invalid Token!"
    });
  };
}