import { Entity, Column, PrimaryColumn, CreateDateColumn, JoinColumn, ManyToOne  } from "typeorm";

import { v4 as uuid } from "uuid";
import { User } from "./User";
@Entity("messages")
export class Message {

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    message: string;
    
    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User)
    user: User;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}