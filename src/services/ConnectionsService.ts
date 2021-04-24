import { getCustomRepository, Repository } from "typeorm";
import { Connections } from "../entities/Connection";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

interface IConnectionsCreate {
    id?: string; // "?" optional
    admin_id?: string;
    user_id: string;
    socket_id: string;
};

export class ConnectionsService {
    private connectionsRepository: Repository<Connections>;

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
};