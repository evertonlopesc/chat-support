import { Repository } from "typeorm";
import { Connections } from "../entities/Connection";

export class ConnectionsRepository extends Repository<Connections>{};