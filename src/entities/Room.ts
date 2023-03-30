import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import {Entity} from "typeorm"
import { Video } from './Video';
//decorator
@Entity('rooms')
export class Room {
    @PrimaryGeneratedColumn() //PK, autoincrement
    id: number

    @Column({ type: 'text' })
    name: string

    @Column({ type:'text', nullable: true })
    description: string

    @OneToMany(() => Video, (video:any) => video.room)
    videos: Video[]
}