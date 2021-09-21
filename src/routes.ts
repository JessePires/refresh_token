import { Router } from 'express';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { AuthenticateUserController } from './useCases/authenticateUser/AuthenticateUserController';
import { CreateUserController } from './useCases/ceateUser/CreateUserController';
import { RefreshTokenUserController } from './useCases/refreshTokenUser/RefreshTokenUserUserController';

const router = Router();

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refresh-token", refreshTokenUserController.handle);

// ROTA CRIADA APENAS PARA TESTAR O TOKEN
router.get("/courses", ensureAuthenticated, (request, response) => {
  return response.json([
    {id: 1, name: "NodeJS"},
    {id: 2, name: "ReactJS"},
    {id: 3, name: "React Native"},
    {id: 4, name: "Flutter"},
    {id: 5, name: "Elixir"},
  ]);
});

export {router};