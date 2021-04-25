import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

interface IConnectionsCreate {
    id?: string; // "?" optional
    admin_id?: string;
    user_id: string;
    socket_id: string;
};

export class ConnectionsService {
    private connectionsRepository: Repository<Connection>;

    constructor() {
        this.connectionsRepository = getCustomRepository(ConnectionsRepository);
    };

    async create({ id, admin_id, user_id, socket_id }: IConnectionsCreate) {
        const connections = this.connectionsRepository.create({
            id,
            admin_id,
            user_id,
            socket_id,
        });

        await this.connectionsRepository.save(connections);

        return connections;
    };

    async findByUserId(user_id: string) {

        const connection = await this.connectionsRepository.findOne({ user_id });
      
        return connection;
    };
};