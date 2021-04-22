import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    OneToOne, 
    PrimaryColumn 
} from "typeorm";

import { v4 as uuid } from "uuid"
import { Setting } from "./Setting";
@Entity("users")
export class User {
    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
