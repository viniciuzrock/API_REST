import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToMany
} from 'typeorm';
import { Video } from './Video';
import { Subject } from './Subject';

@Entity('rooms')
export class Room {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string

    @Column({ type:'text', nullable: true })
    description: string

    @OneToMany(() => Video, (video:any) => video.room)
    videos: Video[]

    @ManyToMany(() => Subject, (subject) => subject.rooms)
    subjects: Subject[]
}