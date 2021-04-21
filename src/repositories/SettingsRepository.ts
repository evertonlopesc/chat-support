import { Repository } from "typeorm";
import { Setting } from "../entities/Setting";

export class SettingsRepository extends Repository<Setting> {};

