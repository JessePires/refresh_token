import { hash } from 'bcryptjs'
import { client } from "../../prisma/client";

interface ICreateUser {
  name: string;
  username: string;
  password: string;
}

class CreateUserUseCase {
  async execute({ name, username, password }: ICreateUser) {
    // VERIFICAR EXISTÊNCIA DO USUÁRIO
    const userAlreadyExists = await client.user.findFirst({
      where: {
        username
      }
    })

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    // CADASTRAR O USUÁRIO
    const passwordHash = await hash(password, 8);

    const user = await client.user.create({
      data: {
        name,
        username,
        password: passwordHash
      }
    });

    return user;
  }
}

export { CreateUserUseCase };
