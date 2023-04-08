import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity()
  export class Carts {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text', nullable: false })
    user_id: string;
  }