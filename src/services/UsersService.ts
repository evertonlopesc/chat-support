import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

export class UsersService {
    async create( email : string) {
        const usersRepository = getCustomRepository(UsersRepository);

        const userAlreadyExists = await usersRepository.findOne({
            email,
        });

        if (userAlreadyExists) {
            return userAlreadyExists;
        };

        const users = usersRepository.create({
            email,
        });

        await usersRepository.save(users);

        return users;
    }
};
